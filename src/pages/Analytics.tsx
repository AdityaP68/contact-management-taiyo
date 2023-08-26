import { useQuery } from "@tanstack/react-query";
import api from "../services/api";
import { processedHistoricalData } from "../utils/dataProcessor";
import LineChartCard from "../components/Charts/LineChartCard";
import LeafletChartCard from "../components/Charts/LeafletChartCard";

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

  if (historicalDataQuery.isLoading || countryDataQuery.isLoading) {
    return <h1>Loading...</h1>;
  }

  if (historicalDataQuery.error || countryDataQuery.error) {
    return <h1>Error fetching data</h1>;
  }

  const ModifiedData = processedHistoricalData(
    historicalDataQuery.data?.cases
  );


  return (
    <div>
      <LineChartCard data={ModifiedData} />
      <LeafletChartCard countriesData={countryDataQuery.data} />
    </div>
  );
}

export default Analytics;
