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
                    <span id="packsize">
                    Pack Size :
                    </span>
                    <select name="PackSize" id="PackSize_` +
        i +
        `">
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
                    <span id="quantityofsweetpacks">
                    Quantity :
                    </span>
                    <select name="quantityselected" id="quantityselected_` +
        i +
        `">
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
                    <p class="calculated-price">
                    <span id="pricelabelofsweetpacks">
                    Price :
                    </span>
                    <span id="priceofsweetpacks` +
        i +
        `">
                    ₹ ` +
        menu[i].pricing["250 gm"] +
        `
                    </span>
                    </p>
                    <button id="placeorder_` +
        i +
        `" type="button" class="btn btn-primary">Place Order</button>
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
window.addEventListener("change", (event) => {
  console.log("Something Changed");
  console.log(event.target.id);
  let myArray = event.target.id.split("_");

  console.log(myArray[1]);
  let qtySelected = "quantityselected_" + myArray[1];
  let packSelected = "PackSize_" + myArray[1];
  console.log(
    "qtySelected : " + qtySelected + " packSelected : " + packSelected
  );
  let newqty = document.getElementById(qtySelected).value;
  let newqpack = document.getElementById(packSelected).value;
  console.log("newqty : " + newqty + " newqpack : " + newqpack);
  let newPrice = newqty * menu[myArray[1]].pricing[newqpack];
  document.getElementById("priceofsweetpacks" + myArray[1]).textContent =
    "₹" + newPrice;

  console.log(menu[myArray[1]].pricing["250 gm"]);
});
window.addEventListener("click", (event) => {
  console.log("Something got clicked");
  console.log(event.target.id);
  let myArray = event.target.id.split("_");
  let qtySelected = "quantityselected_" + myArray[1];
  let packSelected = "PackSize_" + myArray[1];
  console.log(myArray[1]);
  let newqty = document.getElementById(qtySelected).value;
  let newqpack = document.getElementById(packSelected).value;
  console.log("newqty : " + newqty + " newqpack : " + newqpack);
  let newPrice = newqty * menu[myArray[1]].pricing[newqpack];
  console.log("Item Name : " + menu[myArray[1]].name + " Price : " + newPrice);
});
