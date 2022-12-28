import html from "html-literal";

export default () => html`
  <section>
    <div class="drink">
      <h1>Brew Pairings</h1>
      <p>
        What goes better with BBQ then an ice cold beverage? Let us know <br />
        so we can create more content with your favorite pairings!
      </p>
      <form>
        <fieldset>
          <legend>Choose your favorite BBQ and Brew Pairing:</legend>

          <div>
            <input type="checkbox" id="chick" name="chicken" />
            <label for="chicken">Chicken & Lager</label>
          </div>

          <div>
            <input type="checkbox" id="beef" name="cow" />
            <label for="cow">Beef & American Pale Ale</label>
          </div>

          <div>
            <input type="checkbox" id="pork" name="pig" />
            <label for="pig">Pork & German Lager</label>
          </div>
          <div>
            <input type="checkbox" id="fish" name="ocean" />
            <label for="ocean">Fish & Pilsner</label>
          </div>
          <div>
            <input type="label" id="blank" name="user" min="1" max="20" />
            <label for="user">Other</label>
          </div>
          <div>
            <input type="submit" value="Submit" />
          </div>
        </fieldset>
      </form>
    </div>
  </section>
`;
