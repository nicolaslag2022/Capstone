import html from "html-literal";
import homepagepic from "../../assets/images/homepagepic.jpg";
export default () => html`
  <div id="homepic">
    <nav>
      <img src=${homepagepic} width="1500" height="800" />
    </nav>
    <h3>
      The weather in ${state.weather.city} is ${state.weather.description}.
      Temperature is ${state.weather.temp}F, and it feels like
      ${state.weather.feelsLike}F.
    </h3>
  </div>
`;
