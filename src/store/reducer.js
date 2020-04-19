const initialState = {
  lastUpdate: null,
  currentPage: null,
  overall: {
    sortedData: [
      {
        country: "Loading",
        cases: { new: 0, total: 0, recovered: 0 },
        deaths: { total: 0, new: 0 },
      },
    ],
    countryNames: ["Loading"],
    overallData: {
      cases: { new: 0, total: 0, recovered: 0 },
      deaths: { total: 0, new: 0 },
    },
    worldHotNews: [
      { source: { name: "Loading" } },
      { source: { name: "Loading" } },
      { source: { name: "Loading" } },
    ],
    top3Country: [],
    WorldChartData: {
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
  },

  selected: {
    selectedCountry: "Afghanistan",
    selectedData: {
      cases: { new: 0, total: 0, recovered: 0 },
      deaths: { total: 0, new: 0 },
    },
    selectedHotNews: [
      { source: { name: "Loading" } },
      { source: { name: "Loading" } },
      { source: { name: "Loading" } },
    ],
  },
};

const reducer = (state = initialState, action) => {
  // console.log(action);
  switch (action.type) {
    case "storeOverall":
      console.log(action.dataFetch);
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
      const defaultSelectedCountryData = action.dataFetch.filter(
        (ctry) => ctry.country === state.selected.selectedCountry
      );
      console.log(defaultSelectedCountryData);
      return {
        ...state,
        lastUpdate: allData[0].time,
        overall: {
          ...state.overall,
          overallData: allData[0],
          top3Country: top3Data,
          worldHotNews: action.newsFetch,
          countryNames: action.namesFetch,
          sortedData: action.dataFetch,
        },
        selected: {
          ...state.selected,
          selectedData: defaultSelectedCountryData[0],
        },
      };
    case "userSelectCountry":
      const defaultData = {
        cases: { new: 0, total: 0, recovered: 0 },
        deaths: { total: 0, new: 0 },
      };
      const selectedCountryData = state.overall.sortedData.filter(
        (ctry) => ctry.country === action.countryName
      );
      console.log(action.countryNews);
      return {
        ...state,
        selected: {
          ...state.selected,
          selectedData:
            selectedCountryData[0] !== undefined
              ? selectedCountryData[0]
              : defaultData,
          selectedHotNews: action.countryNews,
        },
      };
    default:
      return state;
  }
};

export default reducer;
