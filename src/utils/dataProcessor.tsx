// type for historical data where each date is associated with a number (case count)
type HistoricalData = {
  [date: string]: number;
};

// type for processed data where each entry has a date and case count
type ProcessedData = {
  date: string;
  caseCount: number;
};

// Function to process historical data into an array of ProcessedData
const processedHistoricalData = (data: HistoricalData): ProcessedData[] => {
  // Map over the keys (dates) of the input data and create an array of ProcessedData objects
  const res = Object.keys(data).map((key) => ({
    date: key,
    caseCount: data[key],
  }));
  return res; 
};


export { processedHistoricalData };
