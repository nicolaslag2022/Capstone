import html from "html-literal";

export default () => html`
  <div id="wrapper">
    <header>
      <img src="shdlogo.jpg" class="image1" />
      <h1 class="story">About Me</h1>
    </header>
    <ul class="main_menu">
      <li><a href="index.html">Home</a></li>
      <li><a href="Aboutme.html">About Me</a></li>
      <li><a href="Shop.html">Shop</a></li>
    </ul>
    <p style="color:white">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </p>
    <img src="aboutmepic.jpg" class="image3" />
  </div>
`;
