import "./App.css";
import { createTheme, ThemeProvider } from "@mui/material";

// Hook
import { useEffect, useState } from "react";

/// mateiral-ul react container and Typography
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

import CloudIcon from "@mui/icons-material/Cloud";

/// button
import Button from "@mui/material/Button";

//// axios
import axios from "axios";
/// 
// import { useTranslation } from "react-i18next";


/// improt
import data from "./data.json";

import { useTranslation } from "react-i18next";

/// weather 
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import moment from "moment/moment";
import "moment/min/locales"




///https://www.youtube.com/shorts/qP2B9sNrhBYv


const theme = createTheme({
  typography: {
    fontFamily: ["A"],
  },
});


// console.log(data.coord.lat)
// console.log(data.coord.lon)


const tempReel = Math.round(data.main.temp - 272.15); 
const tempMin = Math.round(data.main.temp_min - 272.15); 
const tempMax = Math.round(data.main.temp_max - 272.15); 
const description = data.weather[0].description
const iconWeather =
  `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;


// console.log(description)

let dateNow = new Date();
let time =
dateNow.getHours() + ":" 
+ dateNow.getMinutes() 
+ ":" + dateNow.getSeconds();

let cancelAxios = null;
function App() {
  const [cha, setcha] = useState(false);

  const { t, i18n } = useTranslation();
  ///
  moment.locale(!cha ? "en" : "ar"); /// or "en"

  const [weather, seWeather] = useState(null);


  useEffect(() => {

    if (data.weather[0].main === "Rain") {
      seWeather(false);
      // console.log("rain")
    } else if (data.weather[0].main === "cloud") {
      seWeather(true);
      // console.log("cloud")
    }
  }, []);
  // console.log(data.weather[0].main);
  const [axiData, setAxiData] = useState({
    temp: null,
    tempMin: null,
    tempMax: null,
    tempDescription: null,
    icons: null,
  });

  // console.log(moment().format("LTS"))
  // const tempHour = moment().format("LTS");
  const tempHour = moment().format("MMMM Do YYYY, h:mm:ss a");

  /// change Language
  function handleChangeLanguage() {
    console.log("this is onclick function handle Change language");
    if (!cha) {
      i18n.changeLanguage("ar");
      setcha(true);
    } else {
      i18n.changeLanguage("en");
      setcha(false);
    }
  }

  /// end change Language

  useEffect(() => {
    axios
      .get("./data.json", {
        cancelToken: new axios.CancelToken((value) => {
          cancelAxios = value;
        }),
      })
      // .patch("./data1.json",)
      .then(function (response) {
        // handle success
        const tempReel2 = Math.round(response.main.temp - 272.15);
        const tempMin2 = Math.round(response.main.temp_min - 272.15);
        const tempMax2 = Math.round(response.main.temp_max - 272.15);
        const description2 = response.weather[0].description;
        setAxiData({
          temp: tempReel2,
          tempMin: tempMin2,
          tempMax: tempMax2,
          description2: description2,
          icons: iconWeather,
        });
        // console.log(axiData)
        // console.log(response);
        // console.log("hello then")
      })
      .catch(function (error) {
        // console.log("hello is catch")
        // handle error
        // console.log(error);
      });
    return () => {
      // console.log("hell")
      cancelAxios();
    };
    // .finally(function () {
    //   // console.log("hello is finally")
    //   // always executed
    // });
  }, []);

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Container maxWidth="sm">
          {/* content Gard Document */}
          <div
            style={{
              width: "100%",
              height: "100vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "aliceblue",
              flexDirection: "column",
            }}
          >
            {/* == end content Gard Document */}
            {/* Gard */}
            <div
              style={{
                padding: "20px",
                backgroundColor: "#0277bd",
                borderRadius: "15px",
                boxShadow: "0px 10px 13px black",
                width: "100%",
              }}
            >
              {/* content */}
              <div>
                {/* City and Time */}
                <div
                  style={{
                    display: "flex",
                    direction: !cha ? "ltr" : "rtl",
                    alignItems: "end",
                    justifyContent: "start",
                  }}
                >
                  <Typography
                    variant="h3"
                    style={{ marginRight: "20px", fontWeight: "600" }}
                  >
                    {/* الدار البيضاء */}
                    {t("Casa")}
                  </Typography>
                  <Typography
                    variant="p"
                    style={{
                      marginRight: "20px",
                      direction: !cha ? "ltr" : "rtl",
                    }}
                  >
                    {tempHour}
                  </Typography>
                </div>

                {/* hr  */}
                <hr />
                {/* end  hr  */}

                <div
                  style={{
                    display: "flex",
                    direction: !cha ? "ltr" : "rtl",
                    justifyContent: "space-around",
                  }}
                >
                  {/* Degree and Description */}
                  <div>
                    <h2> {t("today")} </h2>
                    {/* Temp */}
                    <div style={{ display: "flex" }}>
                      <Typography
                        variant="h1"
                        style={{
                          textAlign: "right",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        {tempReel}
                        <img src={iconWeather} alt="" />
                      </Typography>

                      {/* Todo: Temp Image */}
                    </div>
                    {/* == end == Temp */}
                    <Typography variant="h6"> {t(description)} </Typography>

                    {/* min and max */}
                    <div
                      style={{
                        textAlign: "right",
                        display: "flex",
                        justifyItems: "center",
                      }}
                    >
                      <h5>
                        {t("min")}: {tempMin}
                      </h5>
                      <hr style={{ margin: "0px 5px" }} />
                      <h5>
                        {t("max")}: {tempMax}
                      </h5>
                    </div>
                  </div>
                  {/* end  Degree and Description */}

                  {weather ? (
                    <CloudIcon
                      style={{ fontSize: "200px", marginRight: cha? "auto" : "30px"}}
                    />
                  ) : (
                    <ThunderstormIcon
                      style={{ fontSize: "200px", marginRight: cha? "auto" : "30px"}}
                    />
                  )}
                </div>

                {/* end == City and Time */}
              </div>
              {/* end === content */}
            </div>
            {/* end ===  Gard */}
            {/* button langu */}
            <div
              style={{
                display: "flex",
                justifyContent: "end",
                width: "100%",
                direction: !cha ? "ltr" : "rtl",
                marginTop: "15px",
              }}
            >
              <Button
                style={{ color: "white" }}
                onClick={handleChangeLanguage}
                variant="text"
              >
                {t("العربية")}
              </Button>
            </div>
            {/* button languge */}
          </div>
        </Container>
      </ThemeProvider>
    </div>
  );
}

export default App;
