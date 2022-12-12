import html from "html-literal";

export default () => html`
  <footer style="background:#FF7700; padding:10px 20px; border-radius: 20px">
    <form action="https://formspree.io/f/xknedjln" method="POST">
      <label>
        <h3>Subscribe to our Weekly Newsletter:</h3>
        Enter email:
        <input type="email" name="email" />
      </label>
      <!-- your other form fields go here -->
      <button type="submit">Send</button>
    </form>
    <style></style>
  </footer>
`;
