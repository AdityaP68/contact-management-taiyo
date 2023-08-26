
// base URL for covid API requests
const BASE_URL = "https://disease.sh/v3/covid-19";

// Fetch historical COVID-19 data for all countries
const fetchHistoricalCovidData = async () => {
  const res = await fetch(`${BASE_URL}/historical/all?lastdays=all`);
  const result = await res.json();
  return result;
};

// Fetch COVID-19 data for all countries
const fetchCountryCovidData = async () => {
  const res = await fetch(`${BASE_URL}/countries`);
  const result = await res.json();
  return result;
};

export default { fetchHistoricalCovidData, fetchCountryCovidData };
