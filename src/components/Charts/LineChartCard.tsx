import React from "react";
import LineChart from "./LineChart"; // Import the LineChart component

// Define the structure of each data point
interface DataPoint {
  date: string;
  caseCount: number;
}

// Define the props for the LineChartCard
interface LineChartCardProps {
  data: DataPoint[];
}

// LineChartCard: A functional component to render a card containing a LineChart
const LineChartCard: React.FC<LineChartCardProps> = ({ data }) => {
  return (
    <div className="w-full h-[55vh] bg-white px-10 pt-6 pb-16 rounded">
      {/* Display the title */}
      <h1 className="mb-6 font-semibold text-lg">Historical Data of Covid cases</h1>
      
      {/* Render the LineChart component */}
      <LineChart data={data} />
    </div>
  );
};

export default LineChartCard;
