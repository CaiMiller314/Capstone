import html from "html-literal";
export default state => html`
  <table id="reviews">
    <tr>
      <th>Country</th>
      <th>City</th>
      <th>State</th>
    </tr>
    ${state.hotels
      .map(sleep => {
        return `<tr><td>${sleep.country}</td><td>${sleep.state}</td><td>${sleep.city}`;
      })
      .join("")}
  </table>
`;
