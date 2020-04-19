const initialState = {
  lastUpdate: null,
  currentPage: null,
  overallData: {
    totalCase: null,
    recovered: null,
    deaths: null,
    newCase: null,
    newDeaths: null,
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
  // console.log(action);
  switch (action.type) {
    case "storeOverall":
      const allData = action.dataFetch.filter((ctry) => ctry.country === "All");
      const top3Data = action.dataFetch
        .filter(
          (ctry) =>
            ctry.country !== "All" &&
            ctry.country !== "Europe" &&
            ctry.country !== "Asia" &&
            ctry.country !== "North-America" &&
            ctry.country !== "South-America" &&
            ctry.country !== "Africa"
        )
        .slice(0, 3);
      return {
        ...state,
        lastUpdate: allData[0].time,
        overallData: {
          ...state.overallData,
          totalCase: allData[0].cases.total,
          recovered: allData[0].cases.active,
          deaths: allData[0].deaths.total,
          newCase: allData[0].cases.new,
          newDeaths: allData[0].deaths.new,
        },
        top3Country: top3Data,
      };
    default:
      return state;
  }
};

export default reducer;
