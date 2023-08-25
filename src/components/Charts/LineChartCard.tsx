import React from "react";
import LineChart from "./LineChart"; // Update the path accordingly

interface DataPoint {
  date: string;
  caseCount: number;
}

interface LineChartCardProps {
  data: DataPoint[];
}

const LineChartCard: React.FC<LineChartCardProps> = ({ data }) => {
  return (
    <div className="w-full h-[55vh] bg-white px-10 pt-6 pb-16 rounded">
      <h1 className="mb-6 font-semibold text-lg">Historical Data of Covid cases</h1>
      <LineChart data={data} />
    </div>
  );
};

export default LineChartCard;
