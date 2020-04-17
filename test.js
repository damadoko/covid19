const axios = require("axios");

axios({
  method: "GET",
  url: "https://covid-19-statistics.p.rapidapi.com/reports",
  headers: {
    "content-type": "application/octet-stream",
    "x-rapidapi-host": "covid-19-statistics.p.rapidapi.com",
    "x-rapidapi-key": "0feb686e78mshebefdcd7b5fe8abp127a2cjsnabf42285f2bd",
  },
  params: {
    region_province: "Beijing",
    iso: "CHN",
    region_name: "China",
    date: "2020-03-14",
    q: "China Beijing",
  },
})
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
