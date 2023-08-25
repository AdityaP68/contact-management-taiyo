
type HistoricalData = {
  [date: string]: number;
};
type ProcessedData = {
  date: string;
  caseCount: number;
};

const processedHistoricalData = (data: HistoricalData): ProcessedData[] => {
  const res = Object.keys(data).map((key) => ({
    date: key,
    caseCount: data[key],
  }));
  return res;
};

export { processedHistoricalData };

