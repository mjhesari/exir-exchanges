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

  const getCountryName = (iso: string) => {
    const country = countries.find((c) => c.iso === iso);
    return country?.tr.en || iso; 
  };

  const getCountryIso = (name: string) => {
    const country = countries.find((c) => c.tr.en === name);
    return country?.iso || name; 
  };
  const handleSelectionChange = (keys: Set<string>) => {
    const selectedNames = Array.from(keys).map((key) => getCountryName(key));
    handleCountryChange(new Set(selectedNames));
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
          selectedKeys={ new Set(selectedCountries.map((name) => getCountryIso(name)))}
          onSelectionChange={(keys) => handleSelectionChange(keys as Set<string>)}
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
        {selectedCountries.map((countryName) => (
          <Chip
            className=" text-wrap h-full py-1"
            key={countryName}
            variant="bordered"
            onClose={() => handleRemoveCountry(countryName)}
          >
            {countryName}
          </Chip>
        ))}
      </div>
    </div>
  );
};

export default CountrySelect;
