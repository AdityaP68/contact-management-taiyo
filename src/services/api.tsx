const BASE_URL = "https://disease.sh/v3/covid-19";

const fetchHistoricalCovidData = async () => {
  const res = await fetch(`${BASE_URL}/historical/all?lastdays=all`);
  const result = await res.json();
  return result;
};
const fetchCountryCovidData = async () => {
  const res = await fetch(`${BASE_URL}/countries`);
  const result = await res.json();
  return result;
};

export default { fetchHistoricalCovidData, fetchCountryCovidData };
