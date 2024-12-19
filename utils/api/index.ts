export const getExchangeData = async (pageIndex = 1,pageSize=24) => {
    try{
      const data = await fetch(`${process.env.BASE_URL}api/business?pageIndex=${pageIndex}&pageSize=${pageSize}`, {
        headers: { Authorization: `Bearer ${process.env.TOKEN}` },
      })
      .then((response) => response.json())
      .then((data) => data);
      return{ data}
    }
    catch(error){
      console.error("Error fetching ExchangeData in Layout:", error);
      return { data: { Data:{} } };
  }}