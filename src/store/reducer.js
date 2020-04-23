import * as actionTypes from "../store/actions/actionTypes";

const initialState = {
  lastUpdate: null,
  defaultFetchNewsNumber: 7,
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
    worldNewsCount: 3,
    top3Country: [],
    worldChartData: {
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
    selectedNewsCount: 3,
  },
};

const reducer = (state = initialState, action) => {
  const currentWorldNewsCount = state.overall.worldNewsCount;
  const currentSelectedNewsCount = state.selected.selectedNewsCount;
  // console.log(action);
  switch (action.type) {
    case actionTypes.STORE_STATISTICS:
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
        overall: {
          ...state.overall,
          overallData: allData[0],
          top3Country: top3Data,
          sortedData: action.dataFetch,
        },
      };

    case actionTypes.STORE_WORLD_NEWS:
      console.log(action.newsFetch);
      return {
        ...state,
        overall: {
          ...state.overall,
          worldHotNews: action.newsFetch,
        },
      };

    case actionTypes.STORE_HISTORY:
      const dateArr = Object.keys(action.historyFetch)
        .map((date) => date.slice(6))
        .slice(0, 30)
        .reverse();

      const dataArr = Object.values(action.historyFetch)
        .map((data) => data.total_cases)
        .slice(0, 30)
        .reverse();
      return {
        ...state,
        overall: {
          ...state.overall,
          worldChartData: {
            ...state.overall.worldChartData,
            labels: dateArr,
            datasets: [
              ...state.overall.worldChartData.datasets.filter(
                (item) => item.label !== "Cases"
              ),
              { label: "Cases", data: dataArr },
            ],
          },
        },
      };

    case actionTypes.STORE_COUNTRY_NAME:
      return {
        ...state,
        overall: {
          ...state.overall,
          countryNames: action.namesFetch,
        },
      };

    case actionTypes.STORE_COUNTRY_NEWS:
      const defaultData = {
        cases: { new: 0, total: 0, recovered: 0 },
        deaths: { total: 0, new: 0 },
      };
      const selectedCountryData = state.overall.sortedData.filter(
        (ctry) => ctry.country === action.countryName
      );
      return {
        ...state,
        selected: {
          ...state.selected,
          selectedData:
            selectedCountryData[0] !== undefined
              ? selectedCountryData[0]
              : defaultData,
          selectedHotNews: action.countryNews,
          selectedCountry: action.countryName,
          selectedNewsCount: 3,
        },
      };

    case actionTypes.MORE_NEWS:
      return {
        ...state,
        overall: {
          ...state.overall,
          worldNewsCount:
            action.location === "world"
              ? currentWorldNewsCount + 2
              : currentWorldNewsCount,
        },
        selected: {
          ...state.selected,
          selectedNewsCount:
            action.location === "selected"
              ? currentSelectedNewsCount + 2
              : currentSelectedNewsCount,
        },
      };

    case actionTypes.HIDE_NEWS:
      return {
        ...state,
        overall: {
          ...state.overall,
          worldNewsCount:
            action.location === "world" ? 3 : currentWorldNewsCount,
        },
        selected: {
          ...state.selected,
          selectedNewsCount:
            action.location === "selected" ? 3 : currentSelectedNewsCount,
        },
      };
    default:
      return state;
  }
};

export default reducer;
