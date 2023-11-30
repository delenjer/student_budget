const URL_EUR = 'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchangenew?valcode=EUR&?json';
const URL_USD = 'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchangenew?valcode=USD&?json';

const urls = [URL_EUR, URL_USD];

export const getExchange = async () => {
  try {
    const responses = await Promise.all(urls.map(url => fetch(url)));
    const data = await Promise.all(responses.map(response => response.json()));

    return data?.map(item => item.find(item => item.rate))
      .reduce((acc, item) => {
        acc[item.cc] = item.rate;

        return acc;
      }, {})
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}
