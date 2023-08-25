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
} from "recharts";

interface DataPoint {
  date: string;
  caseCount: number;
}

interface LineChartProps {
  data: DataPoint[];
}

const LineChartComponent: React.FC<LineChartProps> = ({ data }) => {
  return (
    <ResponsiveContainer>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" tick={{ fontSize: 10 }}/>
        <YAxis tick={{ fontSize: 10 }}/>
        <Tooltip />
        <Legend wrapperStyle={{ fontSize: '14px' }}/>
        <Line
          type="monotone"
          dataKey="caseCount"
          stroke="rgba(75,192,192,1)"
          name="Case Count"
          strokeWidth={1}
          dot={{r:0.5}}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default LineChartComponent;
