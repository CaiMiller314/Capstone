import html from "html-literal";

export default state => html`
  <section class="header">
    <!-- <nav>
      <a href="Week4Homework.html"><img src="https://image.pngaaa.com/685/10685-middle.png"></a>
      <div class="nav">
        <ul>
          <li><a href="">HOME</a></li>
          <li><a href="">FLIGHTS</a></li>
          <li><a href="">EATS</a></li>
          <li><a href="">ENTERTAINMENT</a></li>
          <li><a href="">SLEEP</a></li>
        </ul>
      </div>
    </nav> -->

    <div class="text-box">
      <h1>Flight Eat Entertainment Sleep</h1>
      <p>All of your traveling needs in one place! There has never been a better place to satisfy your trip's vision.</p>
      <a href="" class="button">GET STARTED</a>
    </div>
  </section>
  <section class="reviews">
    <h1>Customer Reviews</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

    <div class="row">
        <div class="reviews-color">
          <h3>Flights</h3>
          <p> ipsum dolor sit amet, consectetur adipiscing elit. Nam eu sagittis nulla. Etiam semper mauris a quam tempus, non feugiat massa posuere. Morbi vitae nisi aliquam, semper diam id, molestie leo. In hac habitasse platea dictumst. Nulla et enim vel elit dictum viverra.</p>
    </div>
    <div class="row">
        <div class="reviews-color">
          <h3>Eats</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu sagittis nulla. Etiam semper mauris a quam tempus, non feugiat massa posuere. Morbi vitae nisi aliquam, semper diam id, molestie leo. In hac habitasse platea dictumst. Nulla et enim vel elit dictum viverra.</p>
    </div>
    <div class="row">
        <div class="reviews-color">
          <h3>Entertainment</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu sagittis nulla. Etiam semper mauris a quam tempus, non feugiat massa posuere. Morbi vitae nisi aliquam, semper diam id, molestie leo. In hac habitasse platea dictumst. Nulla et enim vel elit dictum viverra.</p>
    </div>
    <div class="row">
        <div class="reviews-color">
          <h3>Sleep</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu sagittis nulla. Etiam semper mauris a quam tempus, non feugiat massa posuere. Morbi vitae nisi aliquam, semper diam id, molestie leo. In hac habitasse platea dictumst. Nulla et enim vel elit dictum viverra.</p>
    </div>
  </section>
`;
