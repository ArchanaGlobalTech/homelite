`use strict`;
import menu from "../data/menu.json" assert { type: "json" };
window.addEventListener(
  "DOMContentLoaded",
  (event) => {
    console.log(menu[0] + " and number of items in menu is " + menu.length);
    for (let i = 0; i < menu.length; i++) {
      document.getElementById("dmenu").innerHTML +=
        `<div class="menu-item-tile col-md-6">
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
                        src="` +
        menu[i].image +
        `"
                        alt="Item"
                        />
                    </div>
                    <div class="menu-item-price">₹110</div>
                    </div>
                    <div class="menu-item-description col-sm-7">
                    <h3 class="menu-item-title">` +
        menu[i].name +
        `</h3>
                    <p class="menu-item-details">
                    ` +
        menu[i].description +
        `
                    </p>
                    <p class="menu-item-pricing">
                    
                    Pack Size :
                    <select name="PackSize" id="PackSize">
                    <option value="` +
        Object.keys(menu[i].pricing)[0] +
        `">` +
        Object.keys(menu[i].pricing)[0] +
        `</option>
                    <option value="` +
        Object.keys(menu[i].pricing)[1] +
        `">` +
        Object.keys(menu[i].pricing)[1] +
        `</option>
                    <option value="` +
        Object.keys(menu[i].pricing)[2] +
        `">` +
        Object.keys(menu[i].pricing)[2] +
        `</option>
                    
                  </select>
    </p>
    <p class="menu-item-pricing">
                    
                    Quantity :
                    <select name="PackSize" id="PackSize">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="12">12</option>
                    <option value="24">24</option>
                    <option value="100">100</option>
                  </select>
    </p>
  
</div>
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
