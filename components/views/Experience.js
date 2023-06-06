import html from "html-literal";

export default () => html`
  <section id="csxex">
    <div class="text-box1">
      <h1>F E E S</h1>
    </div>
    <form id="review" method="POST" action="">
      <h2>Browse Reviews!</h2>
      <div>
        <label for="airline">Airline:</label>
        <select id="airline" name="airline">
          <option value="">Select an Airline</option>
          <option value="american">American</option>
          <option value="delta">Delta</option>
          <option value="southwest">Southwest</option>
          <option value="spirit">Spirit</option>
        </select>
      </div>
      <div>
        <label for="review1">Review:</label>
        <input
          type="text"
          name="reviews"
          id="reviews"
          placeholder="Leave a Review"
          required
        />
      </div>
      <input type="submit" id="newSubmit" value="Submit Review"/>
    </form>
  </section>
`;
