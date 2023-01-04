import { Header, Nav, Main, Footer } from "./components";
import * as store from "./store";
import Navigo from "navigo";
import { capitalize } from "lodash";
import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const router = new Navigo("/");

function render(state = store.Home) {
  //console.table(state);
  document.querySelector("#root").innerHTML = `
  ${Header(state)}
  ${Nav(store.Links)}
  ${Main(state)}
  ${Footer()}
  `;
  afterRender(state);
  router.updatePageLinks();
}

function afterRender(state) {
  // add menu toggle to bars icon in nav bar
  document.querySelector(".fa-bars").addEventListener("click", () => {
    document.querySelector("nav > ul").classList.toggle("hidden--mobile");
  });
  if (state.view === "Bio") {
    const slideGallery = document.querySelector(".slides");
    const slides = slideGallery.querySelectorAll("div");
    const thumbnailContainer = document.querySelector(".thumbnails");
    const slideCount = slides.length;
    const slideWidth = 540;

    const highlightThumbnail = () => {
      thumbnailContainer
        .querySelectorAll("div.highlighted")
        .forEach(el => el.classList.remove("highlighted"));
      const index = Math.floor(slideGallery.scrollLeft / slideWidth);
      thumbnailContainer
        .querySelector(`div[data-id="${index}"]`)
        .classList.add("highlighted");
    };

    const scrollToElement = el => {
      const index = parseInt(el.dataset.id, 10);
      slideGallery.scrollTo(index * slideWidth, 0);
    };

    thumbnailContainer.innerHTML += [...slides]
      .map((slide, i) => `<div data-id="${i}"></div>`)
      .join("");

    thumbnailContainer.querySelectorAll("div").forEach(el => {
      el.addEventListener("click", () => scrollToElement(el));
    });

    slideGallery.addEventListener("scroll", e => highlightThumbnail());

    highlightThumbnail();
  }
  if (state.view === "Bbbrew") {
    document.querySelector("form").addEventListener("submit", event => {
      event.preventDefault();

      const inputList = event.target.elements;
      console.log("Input Element List", inputList);

      const brewPairings = [];
      for (let input of inputList.pair) {
        // If the value of the checked attribute is true then add the value to the toppings array
        if (input.checked) {
          brewPairings.push(input.value);
        }
      }
      console.log(brewPairings);
      const requestData = {
        userchoice: inputList.other.value,
        pairing: brewPairings
      };
      console.log("request Body", requestData);

      axios
        .post(`${process.env.Brew_Pairing_API_URL}/bbbrew`, requestData)
        //.post(`${process.env.Brew_Pairing_API_TEST}/bbbrew`, requestData)
        .then(response => {
          // Push the new pizza onto the Pizza state pizzas attribute, so it can be displayed in the pizza list
          //store.Bbbrew.brewPairings.push(response.data);
          //router.navigate("/bbbrew");
          console.log(response.data);
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
        : "Home"; // Add a switch case statement to handle multiple routes
    switch (view) {
      case "Home":
        axios
          .get(
            `https://api.openweathermap.org/data/2.5/weather?q=bowling%20green&appid=${process.env.OPEN_WEATHER_MAP_API_KEY}`
          )
          .then(response => {
            const kelvinToFahrenheit = kelvinTemp =>
              Math.round((kelvinTemp - 273.15) * (9 / 5) + 32);

            store.Home.weather = {};
            store.Home.weather.city = response.data.name;
            store.Home.weather.temp = kelvinToFahrenheit(
              response.data.main.temp
            );
            store.Home.weather.feelsLike = kelvinToFahrenheit(
              response.data.main.feels_like
            );
            store.Home.weather.description = response.data.weather[0].main;
            done();
          })
          .catch(err => console.log(err));
        break;
      default:
        done();
    }
  }
});

router
  .on({
    "/": () => render(),
    ":view": params => {
      let view = capitalize(params.data.view);
      render(store[view]);
    }
  })
  .resolve();
