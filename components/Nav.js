import html from "html-literal";

export default links => html`
  <nav>
    <i class="fas fa-bars"></i>
    <!-- <div class="nav">
      <ul>
        <li><a href="">HOME</a></li>
        <li><a href="">FLIGHTS</a></li>
        <li><a href="">EATS</a></li>
        <li><a href="">ENTERTAINMENT</a></li>
        <li><a href="">SLEEP</a></li>
      </ul>
    </div> -->
    <ul class="hidden--mobile nav-links">
      ${links
        .map(
          link =>
            `<li><a href="/${link.title}" title="${link.title}" data-navigo>${link.text}</a></li>`
        )
        .join("")}
    </ul>
  </nav>
`;
