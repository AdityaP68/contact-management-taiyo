// Import the necessary dependencies and components
import { CountryData } from "../../utils/types"; // Import the type if available
import LeafletChart from "./LeafletChart";

// Define the props for the LeafletChartCard component
type CovidMapCardProps = {
  countriesData: CountryData[];
};

// LeafletChartCard component
function LeafletChartCard({ countriesData }: CovidMapCardProps) {
  console.log(countriesData); // Log the countriesData to the console
  return (
    <div className="w-full bg-white rounded mt-6 px-10 py-6">
      <h1 className="mb-6 font-semibold text-lg">Country Wise Case Spread</h1>
      {/* Render the LeafletChart component */}
      <LeafletChart countriesData={countriesData} />
    </div>
  );
}

export default LeafletChartCard;
