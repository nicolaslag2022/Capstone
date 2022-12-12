import html from "html-literal";
import gallery from "../../assets/images/gallery1.jpg";
import gallery1 from "../../assets/images/gallery2.jpg";
import gallery2 from "../../assets/images/gallery3.jpg";
import gallery3 from "../../assets/images/gallery4.jpg";
import gallery4 from "../../assets/images/gallery5.jpg";
import gallery5 from "../../assets/images/gallery6.jpg";
import gallery6 from "../../assets/images/gallery7.jpg";
import gallery7 from "../../assets/images/gallery8.jpg";
import gallery8 from "../../assets/images/gallery9.jpg";
import gallery9 from "../../assets/images/gallery10.jpg";
import gallery10b from "../../assets/images/gallery10b.jpg";
import gallery11 from "../../assets/images/gallery12.jpg";
export default () => html`
  <section>
    <h2>Flavor Pairing</h2>
    <div>
      <div class="gallery-container">
      <div class="thumbnails"></div>
      <div class="slides">
        <div><img src=${gallery} /></div>
        <div><img src=${gallery1} /></div>
        <div><img src=${gallery2} /></div>
        <div><img src=${gallery3} /></div>
        <div><img src=${gallery4} /></div>
        <div><img src=${gallery5} /></div>
        <div><img src=${gallery6} /></div>
        <div><img src=${gallery7} /></div>
        <div><img src=${gallery8} /></div>
        <div><img src=${gallery9} /></div>
        <div><img src=${gallery10b} /></div>
        <div><img src=${gallery11} /></div>
      </div>
    </div>
  </section>
`;
