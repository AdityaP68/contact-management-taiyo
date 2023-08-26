// Import your CovidMap component
import { CountryData } from "../../utils/types"; // Import the type if available
import LeafletChart from "./LeafletChart";

type CovidMapCardProps = {
  countriesData: CountryData[];
};

function LeafletChartCard({ countriesData }: CovidMapCardProps) {
  console.log(countriesData);
  return (
    <div className="w-full bg-white rounded mt-6 px-10 py-6">
      <h1 className="mb-6 font-semibold text-lg">Country Wise Case Spread</h1>
      <LeafletChart countriesData={countriesData} />
    </div>
  );
}

export default LeafletChartCard;
