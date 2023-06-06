import html from "html-literal";

export default state => html`
  <section id="flights">
  <div class="text-box1">
      <h1>F E E S</h1>
    </div>
  <div class="selections">
  <label for="choices">Choose a Airline:</label>
<select name="choices" id="choices">
  <option value="Southwest">Southwest</option>
  <option value="Spirit">Spirit</option>
  <option value="American">American</option>
  <option value="Delta">Delta</option>
</select>
</div>
<div class="info1">
<form action="/action_page.php">
  <label for="depart">Depart</label><br>
  <input type="text" id="depart" name="depart" value="From"><br>
  <label for="arrive">Arrive</label><br>
  <input type="text" id="arrive" name="arrive" value="To"><br><br>
  <input type="button" value="Search">
</form>
<form>
</form>
</div>
  </section>
  <h3>
    The weather in ${state.weather.city} is ${state.weather.description}.
    Temperature is ${state.weather.temp}F, and it feels like
    ${state.weather.feelsLike}F.
  </h3>
  <section class="reviews">
    <h1>Customer Reviews</h1>
    <!-- <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> -->

    <div class="row1">
        <div class="reviews-color">
          <h3>Southwest Airlines</h3>
          <p> ipsum dolor sit amet, consectetur adipiscing elit. Nam eu sagittis nulla. Etiam semper mauris a quam tempus, non feugiat massa posuere. Morbi vitae nisi aliquam, semper diam id, molestie leo. In hac habitasse platea dictumst. Nulla et enim vel elit dictum viverra.</p>
    </div>
    <div class="row2">
        <div class="reviews-color">
          <h3>Spirit Airlines</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu sagittis nulla. Etiam semper mauris a quam tempus, non feugiat massa posuere. Morbi vitae nisi aliquam, semper diam id, molestie leo. In hac habitasse platea dictumst. Nulla et enim vel elit dictum viverra.</p>
    </div>
    <div class="row3">
        <div class="reviews-color">
          <h3>American Airlines</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu sagittis nulla. Etiam semper mauris a quam tempus, non feugiat massa posuere. Morbi vitae nisi aliquam, semper diam id, molestie leo. In hac habitasse platea dictumst. Nulla et enim vel elit dictum viverra.</p>
    </div>
    <div class="row4">
        <div class="reviews-color">
          <h3>Delta Airlines</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu sagittis nulla. Etiam semper mauris a quam tempus, non feugiat massa posuere. Morbi vitae nisi aliquam, semper diam id, molestie leo. In hac habitasse platea dictumst. Nulla et enim vel elit dictum viverra.</p>
    </div>
  </section>
`;
