import { Header, Nav, Main, Footer } from "./components";
import * as store from "./store";
import Navigo from "navigo";
import { capitalize } from "lodash";
import axios from "axios";

const router = new Navigo("/");

function render(state = store.Home) {
  document.querySelector("#root").innerHTML = `
  ${Header(state)}
  ${Nav(store.Links)}
  ${Main(state)}
  ${Footer()}
  `;

  afterRender(state);
  router.updatePageLinks();
}
// render(store.Bio);
// add menu toggle to bars icon in nav bar
function afterRender(state) {
  document.querySelector(".fa-bars").addEventListener("click", () => {
    document.querySelector("nav > ul").classList.toggle("hidden--mobile");
  });

  if (state.view === "Experience") {
    document.querySelector("form").addEventListener("submit", event => {
      event.preventDefault();

      const inputList = event.target.elements;
      console.log("Input Element List", inputList);

      const airline = [];
      // Interate over the airline input group elements
      for (let input of inputList.airline) {
        // If the value of the checked attribute is true then add the value to the airline array
        if (input.checked) {
          airline.push(input.value);
        }
      }

      const requestData = {
        airline: inputList.airline.value,
        reviews: inputList.reviews.value
      };
      console.log("request Body", requestData);

      axios
        .post(`${process.env.EXPERIENCE_API_URL}/experiences`, requestData)
        .then(response => {
          // Push the new pizza onto the Pizza state pizzas attribute, so it can be displayed in the pizza list
          store.Experience.experiences.push(response.data);
          router.navigate("/Experience");
        })
        .catch(error => {
          console.log("It puked", error);
        });
    });
  }
}

router.hooks({
  before: (done, params) => {
    const view =
      params && params.data && params.data.view
        ? capitalize(params.data.view)
        : "Home";
    // Add a switch case statement to handle multiple routes
    switch (view) {
      case "Home":
        axios
          // Get request to retrieve the current weather data using the API key and providing a city name
          .get(
            `https://api.openweathermap.org/data/2.5/weather?appid=${process.env.OPEN_WEATHER_MAP_API_KEY}&q=st%20louis`
          )
          .then(response => {
            // Convert Kelvin to Fahrenheit since OpenWeatherMap does provide otherwise
            const kelvinToFahrenheit = kelvinTemp =>
              Math.round((kelvinTemp - 273.15) * (9 / 5) + 32);
            // Create an object to be stored in the Home state from the response
            store.Home.weather = {
              city: response.data.name,
              temp: kelvinToFahrenheit(response.data.main.temp),
              feelsLike: kelvinToFahrenheit(response.data.main.feels_like),
              description: response.data.weather[0].main
            };
            // An alternate method would be to store the values independently
            /*
            store.Home.weather.city = response.data.name;
            store.Home.weather.temp = kelvinToFahrenheit(response.data.main.temp);
            store.Home.weather.feelsLike = kelvinToFahrenheit(response.data.main.feels_like);
            store.Home.weather.description = response.data.weather[0].main;
            */
            done();
          })
          .catch(err => {
            console.log(err);
            done();
          });
        break;
      // case "Sleep":
      //   // New Axios get request utilizing already made environment variable
      //   axios
      //     .get(`https://capstoneflyapiofficial.onrender.com/sleeps`)
      //     .then(response => {
      //       // We need to store the response to the state, in the next step but in the meantime let's see what it looks like so that we know what to store from the response.
      //       console.log("response", response.data);
      //       store.Sleep.hotels = response.data;
      //       done();
      //     })
      //     .catch(error => {
      //       console.log("It puked", error);
      //       done();
      //     });
      //   break;
      case "Experience":
        // New Axios get request utilizing already made environment variable
        axios
          .get(`https://capstoneflyapi2.onrender.com/experiences`)
          .then(response => {
            // We need to store the response to the state, in the next step but in the meantime let's see what it looks like so that we know what to store from the response.
            console.log("response", response.data);
            store.Experience.airline.csx = response.data;
            done();
          })
          .catch(error => {
            console.log("It puked", error);
            done();
          });
        break;
      default:
        done();
    }
  },
  already: params => {
    const view = params && params.data && params.data.view
        ? capitalize(params.data.view)
        : "Home";

    render(store[view]);
  }
});

router
  .on({
    "/": () => render(),
    ":view": params => {
      let view = capitalize(params.data.view);
      if (store.hasOwnProperty(view)) {
        render(store[view]);
      } else {
        console.log(`View ${view} not defined`);
      }
    }
  })
  .resolve();
