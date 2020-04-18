const initialState = {
  currentPage: null,
  overallData: {
    totalCase: 2312124,
    recovered: 122412,
    deaths: 15122,
    newCase: 21234,
    newRecovered: 23532,
    newDeaths: 3233,
  },
  totalEffectedCountry: 123,
  top3Country: [],
  hotNews: [],
  chartData: {
    labels: ["10-4", "11-4", "12-4", "13-4", "14-4", "15-4", "16-4", "17-4"],
    datasets: [
      {
        label: "Cases",
        data: [
          1561234123,
          1652353243,
          1731254745,
          1812345325,
          1875368544,
          1953472354,
          2034346334,
          2112343634,
          2235365755,
        ],
      },
    ],
  },
};

const reducer = (state = initialState, action) => {
  return state;
};

export default reducer;
