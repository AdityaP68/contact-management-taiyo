import { useQuery } from "@tanstack/react-query";
import api from "../services/api";
import { processedHistoricalData } from "../utils/dataProcessor";
import LineChartCard from "../components/Charts/LineChartCard";
import LeafletChartCard from "../components/Charts/LeafletChartCard";

function Analytics() {
  // Query for fetching historical data
  const historicalDataQuery = useQuery({
    queryKey: ["historicalData"],
    queryFn: api.fetchHistoricalCovidData,
  });

  // Query for fetching country data
  const countryDataQuery = useQuery({
    queryKey: ["countryData"],
    queryFn: api.fetchCountryCovidData,
  });

  // Log fetched data for debugging
  console.log(historicalDataQuery.data, "alldat");
  console.log(countryDataQuery.data, "country");

  // Handle loading state
  if (historicalDataQuery.isLoading || countryDataQuery.isLoading) {
    return <h1>Loading...</h1>;
  }

  // Handle error state
  if (historicalDataQuery.error || countryDataQuery.error) {
    return <h1>Error fetching data</h1>;
  }

  // Process historical data
  const ModifiedData = processedHistoricalData(
    historicalDataQuery.data?.cases
  );

  // Render LineChartCard and LeafletChartCard components
  return (
    <div>
      <LineChartCard data={ModifiedData} />
      <LeafletChartCard countriesData={countryDataQuery.data} />
    </div>
  );
}

export default Analytics;
