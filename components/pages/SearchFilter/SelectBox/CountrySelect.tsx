import React, { useEffect, useState } from "react";
import { Chip, Select, SelectItem } from "@nextui-org/react";
// import Types
import { Country } from "@/types/componentTypes";
import { DictsTypes } from "@/app/[lang]/dictionaries/dictionaries";

interface CountrySelectProps {
  dicts:DictsTypes
  selectedCountries: string[];
  handleCountryChange: (value: Set<string>) => void;
  handleRemoveCountry: (country: string) => void;
}

const CountrySelect: React.FC<CountrySelectProps> = ({
  dicts,
  selectedCountries,
  handleCountryChange,
  handleRemoveCountry,
}) => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  // Fetch Data Countries
  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch("https://country.liara.run/api/country");
        if (!response.ok) {
          throw new Error("Failed to fetch countries");
        }
        const data: Country[] = await response.json();
        setCountries(data);
      } catch (error) {
        console.error("Error fetching countries:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCountries();
  }, []);

  // Helper function to get country name by ISO code
  const getCountryName = (iso: string) => {
    const country = countries.find((c) => c.iso === iso);
    return country?.tr.en || iso; // Return ISO if name is not found
  };

  return (
    <div className="flex flex-col gap-3">
      <h3 className="font-semibold">{dicts?.CardFilter?.country}</h3>
      <div>
        <Select 
          aria-label="country-selector"
          placeholder={loading ? "Loading countries..." : `${dicts?.placeholder?.countryChoose}`}
          fullWidth
          selectionMode="multiple"
          selectedKeys={new Set(selectedCountries)}
          onSelectionChange={(keys) => handleCountryChange(keys as Set<string>)}
          isDisabled={loading} 
        >
          {countries.map((country) => (
            <SelectItem key={country.iso} value={country.iso}>
              {country.tr.en}
            </SelectItem>
          ))}
        </Select>
      </div>
      <div className="flex flex-wrap gap-2">
        {selectedCountries.map((countryIso) => (
          <Chip
            className=" text-wrap h-full py-1"
            key={countryIso}
            variant="bordered"
            onClose={() => handleRemoveCountry(countryIso)}
          >
            {getCountryName(countryIso)}
          </Chip>
        ))}
      </div>
    </div>
  );
};

export default CountrySelect;
