import html from "html-literal";
import gallery1 from "../../assets/images/gallery1.jpg";
import gallery2 from "../../assets/images/gallery2.jpg";
import gallery3 from "../../assets/images/gallery3.jpg";
import gallery4 from "../../assets/images/gallery4.jpg";
import gallery5 from "../../assets/images/gallery5.jpg";
import gallery6 from "../../assets/images/gallery6.jpg";
import gallery7 from "../../assets/images/gallery7.jpg";
import gallery8 from "../../assets/images/gallery8.jpg";
export default () => html`
  <section>
    <div class="bioheading">
    <h1>Bio</h1>
    <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
    </div>
    <div>
      <div class="gallery-container">
      <div class="thumbnails"></div>
      <div class="slides">
        <div><img src=${gallery1} /></div>
        <div><img src=${gallery2} /></div>
        <div><img src=${gallery3} /></div>
        <div><img src=${gallery4} /></div>
        <div><img src=${gallery5} /></div>
        <div><img src=${gallery6} /></div>
        <div><img src=${gallery7} /></div>
        <div><img src=${gallery8} /></div>
      </div>
    </div>
  </section>
`;
