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
    <div>
    <h1 class="bioheader">Bio</h1>
    <p class="bioheading">
    My love of BBQ started a few years ago when I purchased my first Traeger Grill. It was love at first smoke! The ease of use and the ability to walk away and know your grill would still be at <br>
    at the correct temp made it a perfect fit for the casual BBQ enthusiast. The smoker also gave me an opportunity to invite friends and family over for tailgating and summertime events. It was a great way <br>
    way to bring the entire family together! This is a hobby that requires some early mornings but is absolutely something that everyone enjoys. I hope this site inspires others to start cooking! <br>
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
