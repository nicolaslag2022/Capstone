import html from "html-literal";
import cow from "../../assets/images/cow.jpg";
import pig from "../../assets/images/pig.jpg";
import chicken from "../../assets/images/chicken.jpg";
export default () => html`
  <section>
    <h2 class="flavorheading">Flavor Pairing</h2>
    <p class="flavorpara">This easy to use guide takes the guess work out of pairing wood flavors with your favorite meats! Mesquite, hickory, and pecan <br>
    are certainly the most popular wood flavors used today. Take a look and make sure you pick the right pairings ahead of your next BBQ outing!
    </p>
    <div class="box">
      <table class="table" style="width:100%">
        <tr>
          <td>Meat Type</td>
          <th scope="col">Mesquite</th>
          <th scope="col">Hickory</th>
          <th scope="col">Pecan</th>
        </tr>
        <tr>
          <td><img src=${cow} /></td>
          <th scope="row">&#10004</th>
          <th scope="row">&#10004</th>
          <th scope="row">&#10004</th>
        </tr>
        <tr>
          <td><img src=${pig} /></td>
          <th scope="row"></th>
          <th scope="row">&#10004</th>
          <th scope="row">&#10004</th>
        </tr>
        <tr>
          <td><img src=${chicken} /></td>
          <th scope="row">&#10004</th>
          <th scope="row">&#10004</th>
          <th scope="row">&#10004</th>
        </tr>
      </table>
    </div>
  </section>
`;
