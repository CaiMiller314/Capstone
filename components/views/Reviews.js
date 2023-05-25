import html from "html-literal";

export default () => html`
  <form id="review" method="POST" action="">
    <h2>Browse Reviews!</h2>
    <div>
      <label for="country">Country:</label>
      <select id="country" name="country">
        <option value="">Select a Country</option>
        <option value="united states">United States</option>
        <option value="japan">Japan</option>
        <option value="canada">Canada</option>
        <option value="france">France</option>
        <option value="mexico">Mexico</option>
      </select>
    </div>
    <div>
      <label for="state">State:</label>
      <input
        type="state"
        name="state"
        id="state"
        placeholder="Enter State"
        required
      />
    </div>
    <div>
      <label for="city">City:</label>
      <input
        type="text"
        name="city"
        id="city"
        placeholder="Enter City"
        required
      />
    </div>
    <!-- <div>
      <label for="toppings">Toppings:</label>
      <input
        type="checkbox"
        id="id_of_checkbox1"
        class="items1"
        name="toppings"
        value="Chicken"
      />
      <label for="top1">Chicken</label>
      <input
        type="checkbox"
        id="id_of_checkbox2"
        class="items1"
        name="toppings"
        value="Onion"
      />
      <label for="top2">Onion</label>
      <input
        type="checkbox"
        id="id_of_checkbox3"
        class="items1"
        name="toppings"
        value="Spinach"
      />
      <label for="top3">Spinach</label>
      <input
        type="checkbox"
        id="id_of_checkbox4"
        class="items1"
        name="toppings"
        value="Extra cheese"
      />
      <label for="top4">Extra Cheese</label>
      <input
        type="checkbox"
        id="id_of_checkbox5"
        class="items1"
        name="toppings"
        value="Red Pepper"
      />
      <label for="top5">Red Pepper</label>
    </div> -->
    <input type="hidden" name="customer" id="customer" value="<Your Name>" />
    <input type="submit" name="submit" value="Submit Review Request" />
  </form>
`;
