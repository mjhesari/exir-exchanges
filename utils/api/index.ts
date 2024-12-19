import { FilterState } from "@/redux/features/filters/filter-slice";

export const getExchangeData = async (
  pageIndex = 0,
  pageSize = 24,
  filters?: FilterState
) => {
  try {
    const defaultSet = { industry: ["0615cf73-9438-4801-9b8d-cc5cdce2da6b"] };
    const body = JSON.stringify(
      filters
        ? filterConvertor(filters)
          ? { ...defaultSet, ...filterConvertor(filters) }
          : defaultSet
        : defaultSet
    );
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
  const { selectedCategories, switchIsSelectedMargin, switchIsSelectedMarket } =
    filters;

  type BodyType = {
    [key: string]: string | string[] | { key: string; value: boolean }[];
  };

  const body: BodyType = {};
  selectedCategories.length && (body.tags = selectedCategories);
  switchIsSelectedMargin &&
    (body.attributes = [{ key: switchIsSelectedMargin, value: true }]);
  switchIsSelectedMarket &&
    (body.attributes = [
      ...((body?.attribute as { key: string; value: boolean }[]) ?? []),
      { key: switchIsSelectedMarket, value: true },
    ]);

  return Object.keys(body).length ? body : false;
};
