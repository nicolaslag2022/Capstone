import html from "html-literal";

export default () => html`
  <section>
    <div class="drink">
      <h1 class="brewheading">Brew Pairings</h1>
      <p>
        What goes better with BBQ then an ice cold beverage? Let us know <br />
        so we can create more content with your favorite pairings! <br />
      </p>
      <form method="POST" action="">
        <label for="pair">Choose your favorite BBQ and Brew Pairing:</label>
        <br />
        <br />
        <label for="choice1">Chicken & Lager</label>
        <input
          type="checkbox"
          id="chickenlager"
          name="pair"
          value="Chicken & Lager"
        />
        <br />
        <br />
        <label for="choice2">Beef & American Pale Ale </label>
        <input
          type="checkbox"
          id="beefapa"
          name="pair"
          value="Beef & American Pale Ale"
        />
        <br />
        <br />

        <label for="choice3">Pork & German Lager</label>
        <input
          type="checkbox"
          id="porkgerlager"
          name="pair"
          value="Pork & German Lager"
        />
        <br />
        <br />

        <label for="choice4">Fish & Pilsner</label>
        <input
          type="checkbox"
          id="fishpilsner"
          name="pair"
          value="Fish & Pilsner"
        />
        <br />
        <br />
        <div>
          <label for="user">Other:</label>
          <input type="text" id="blank" name="other" min="1" max="20" />
        </div>
        <br />
        <br />
        <input type="submit" value="Submit" />
        <br />
        <br />
      </form>
    </div>
  </section>
`;
