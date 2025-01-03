import { FilterState } from "@/redux/features/filters/filter-slice";

export const getExchangeData = async (
  pageIndex = 0,
  pageSize = 24,
  filters?: FilterState
) => {
  try {
    const zibaIndustry = { industry: ["c259aa45-0a0f-49ac-be33-eade1392e136"] };
    const defaultSet = {
      industry: [
        `${
          process?.env?.NEXT_PUBLIC_DIRECTORY === "drziba"
            ? "c259aa45-0a0f-49ac-be33-eade1392e136"
            : "0615cf73-9438-4801-9b8d-cc5cdce2da6b"
        }`,
      ],
    };
    const body = JSON.stringify(
      filters
        ? filterConvertor(filters)
          ? { ...defaultSet, ...filterConvertor(filters) }
          : defaultSet
        : defaultSet
    );
    console.log("body: ", body);
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}api/business/filter?pageIndex=${pageIndex}&pageSize=${pageSize}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_TOKEN}`,
        },
        body,
        redirect: "follow",
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching ExchangeData in Layout:", error);
    return { data: { Data: {} } };
  }
};
export const filterConvertor = (filters: FilterState) => {
  const {
    selectedCategories,
    switchIsSelectedMargin,
    switchIsSelectedMarket,
    selectedCountries,
    selectedPayments,
    selectedCurrencies,
    searchName,
    selectedProvinces,selectedCities
  } = filters;

  type BodyType = {
    tags?: string[];
    country?: string;
    attributes?: { key: string; value: boolean | string[] }[];
    name?: { [key: string]: string };
    region?:string
  };

  const body: BodyType ={};
  selectedCategories.length && (body.tags = selectedCategories);
   process?.env?.NEXT_PUBLIC_DIRECTORY === "drziba" ? (body.country = "Iran") : selectedCountries.length && (body.country = selectedCountries);
  searchName && (body.name = searchName);
  selectedProvinces && (body.region=selectedProvinces);
  switchIsSelectedMargin && (body.attributes = [{ key: switchIsSelectedMargin, value: true }]);
  switchIsSelectedMarket && (body.attributes = [ ...(body?.attributes ?? []),   { key: switchIsSelectedMarket, value: false }, ]);
 selectedPayments.length && (body.attributes = [ ...(body?.attributes ?? []), { key: "bcc4a9db-c980-4b08-ac37-0054a1885dcb", value: selectedPayments },]);
  selectedCurrencies.length && (body.attributes = [...(body?.attributes ?? []),{key: "d735db00-99ce-4bac-90dd-c0219baec715", value: selectedCurrencies,
      },
    ]);
  return Object.keys(body).length ? body : false;
};
/* -------------------------------------------------------------------------- */
/*                                LanguageFetch                                */
/* -------------------------------------------------------------------------- */
export const getAllLanguage = async () => {
  const url = process.env.NEXT_PUBLIC_COUNTRY_BASE_URL + "api/language";
  try {
    const countries = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_TOKEN}`,
      },
    });
    if (!countries.ok) {
      throw new Error("Failed to fetch Languages");
    }
    const data = await countries.json();
    return data;
  } catch {
    return null;
  }
};
