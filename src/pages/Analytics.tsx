import { useQuery } from "@tanstack/react-query";
import api from "../services/api";
import { processedHistoricalData } from "../utils/dataProcessor";
import LineChartCard from "../components/Charts/LineChartCard";

function Analytics() {
  const historicalDataQuery = useQuery({
    queryKey: ["historicalData"],
    queryFn: api.fetchHistoricalCovidData,
  });

  const countryDataQuery = useQuery({
    queryKey: ["countryData"],
    queryFn: api.fetchCountryCovidData,
  });

  console.log(historicalDataQuery.data, "alldat");
  console.log(countryDataQuery.data, "country");

  if (historicalDataQuery?.isLoading || countryDataQuery?.isLoading) {
    return <h1>Loading...</h1>;
  }

  const ModifiedData = processedHistoricalData(
    historicalDataQuery?.data?.cases
  );

  console.log(ModifiedData);

  return (
    <>
      <LineChartCard data={ModifiedData} />
    </>
  );
}

export default Analytics;
