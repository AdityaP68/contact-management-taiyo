import React from "react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Brush,
} from "recharts";

// Define the structure of each data point
interface DataPoint {
  date: string;
  caseCount: number;
}

// Define the props for the LineChartComponent
interface LineChartProps {
  data: DataPoint[];
}

const formatYAxisTick = (tickValue: number) => {
  if (tickValue >= 1000000) {
    return `${(tickValue / 1000000).toFixed(1)}M`;
  }
  return tickValue.toString();
};



// LineChartComponent: A functional component to render a line chart
const LineChartComponent: React.FC<LineChartProps> = ({ data }) => {
  return (
    <ResponsiveContainer>
      {/* Render the LineChart component */}
      <LineChart data={data}>
        {/* Render the CartesianGrid */}
        <CartesianGrid strokeDasharray="3 3" />
        
        {/* Render the XAxis */}
        <XAxis dataKey="date" tick={{ fontSize: 10 }} />
        
        {/* Render the YAxis */}
        <YAxis tick={{ fontSize: 10 }} tickFormatter={formatYAxisTick} />
        
        {/* Render the Tooltip */}
        <Tooltip />
        
        {/* Render the Legend */}
        <Legend wrapperStyle={{ fontSize: '14px' }} />
        
        {/* Render the Line */}
        <Line
          type="monotone"
          dataKey="caseCount"
          stroke="rgba(75,192,192,1)"
          name="Case Count"
          strokeWidth={1}
          dot={{ r: 0.5 }} // Customize the data point dots
        />
      <Brush dataKey="date" height={10} stroke="black"/>
      </LineChart>
    </ResponsiveContainer>
  );
};

export default LineChartComponent;
