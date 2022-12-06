import html from "html-literal";
import homepagepic from "../../assets/images/homepagepic.jpg";
export default () => html`
  <div id="homepic">
    <nav>
      <img src=${homepagepic} width="1500" height="800" />
    </nav>
  </div>
`;
