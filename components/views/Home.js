import html from "html-literal";
import shdlogo from "../../assets/images/shdlogo.jpg";
import homepagepic from "../../assets/images/homepagepic.jpg";

export default () => html`
  <header>
      <img src=${shdlogo} class="image1" />
      <h1>Welcome to Smokin Hot Dad BBQ</h1>
      <h2>Your Home for great BBQ recipes!</h2>
    </header>
    <nav>
      <ul class="main_menu">
        <li><a href="index.html">Home</a></li>
        <li><a href="Aboutme.html">Bio</a></li>
        <li><a href="Flavorpairing.html">Flavor Pairing</a></li>
      </ul>
      <img src=${homepagepic} width="1500" height="800"/>
    </nav>
  </div>
`;
