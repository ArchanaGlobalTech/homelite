window.addEventListener(
  "DOMContentLoaded",
  (event) => {
    console.log("DOM fully loaded and parsed");
    for (let i = 0; i < 9; i++) {
      document.getElementById(
        "dmenu"
      ).innerHTML += `<div class="menu-item-tile col-md-6">
                <div class="row">
                    <div class="col-sm-5">
                    <div class="menu-item-photo">
                        <a href="cart.html">

                        <div>
                            <span class="glyphicon glyphicon-shopping-cart"></span></div
                        ></a>
                        <img
                        class="img-responsive"
                        width="250"
                        height="150"
                        src="img/menu/B/A.jpg"
                        alt="Item"
                        />
                    </div>
                    <div class="menu-item-price">₹110</div>
                    </div>
                    <div class="menu-item-description col-sm-7">
                    <h3 class="menu-item-title">Spicy Idly</h3>
                    <p class="menu-item-details">
                        The tasty masala topping is made from onion, capsicum and tomatoes
                        with flavor of pav bhaji masala. Add flavor to the bread.
                    </p>
                    </div>
                </div>
                <hr class="visible-xs" />
                </div>`;
      if (i % 2 === 1 && i > 0) {
        document.getElementById(
          "dmenu"
        ).innerHTML += `<div class="clearfix visible-lg-block visible-md-block"></div>`;
      }
    }
  },
  { once: true }
);
