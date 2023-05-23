import html from "html-literal";
export default state => html`
  <table id="hotels">
    <tr>
      <th>Country</th>
      <th>City</th>
      <th>State</th>
    </tr>
    ${state.pizzas
      .map(sleep => {
        return `<tr><td>${sleep.country}</td><td>${sleep.state}</td><td>${sleep.city}`;
      })
      .join("")}
  </table>
`;
