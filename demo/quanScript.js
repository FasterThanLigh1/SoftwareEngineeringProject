import { order } from "./savedInfo.js";

console.log(order[0]);

class Food {
  constructor(price, name) {
    this.price = price;
    this.name = name;
  }
}

let sumArr = new Array();
let res = 0;
const sidemenu = document.getElementById("side");
const purchaseButton = document.getElementById("purchase");
const savePayment = document.getElementById("savePayment");
const purchaseMobile = document.getElementById("mobileDropdown");
const myImg = document.getElementById("myImg");
const section = document.getElementById("section");
const total = document.getElementById("total");
var arr = Array.prototype.slice.call(document.getElementById("list").children);
console.log(arr.indexOf("Do st"));

//number of quantity
var q0 = {
  a: 0,
};
var q1 = {
  a: 0,
};
var q2 = {
  a: 0,
};
var q3 = {
  a: 0,
};
var q4 = {
  a: 0,
};
var q5 = {
  a: 0,
};
var q6 = {
  a: 0,
};
var q7 = {
  a: 0,
};

//Create food
const frenchFries = new Food("32.000", "Big French Fries");
const chickenBurger = new Food("40.000", "Chicken Burger");
const smallFrenchFries = new Food("29.000", "Small French Fries");
const superXL = new Food("50.000", "Super XL Burger");
const fishBurger = new Food("40.000", "Fish Burger");
const yellowFrenchFries = new Food("30.000", "Yellow French Fries");
const pepsi = new Food("20.000", "Pepsi");
const sprite = new Food("20.000", "Sprite");

addNumberAndText("ff01", q0, "quantity0", 32000, frenchFries, "min0", "add0");
addNumberAndText("ff02", q1, "quantity1", 40000, chickenBurger, "min1", "add1");
addNumberAndText(
  "ff03",
  q2,
  "quantity2",
  29000,
  smallFrenchFries,
  "min2",
  "add2"
);
addNumberAndText("ff04", q3, "quantity3", 50000, superXL, "min3", "add3");
addNumberAndText("ff05", q4, "quantity4", 40000, fishBurger, "min4", "add4");
addNumberAndText(
  "ff06",
  q5,
  "quantity5",
  30000,
  yellowFrenchFries,
  "min5",
  "add5"
);
addNumberAndText("ff07", q6, "quantity6", 20000, pepsi, "min6", "add6");
addNumberAndText("ff08", q7, "quantity7", 20000, sprite, "min7", "add7");

//assign fuction to button
function addNumberAndText(id, obj, quantityId, price, food, minId, addId) {
  const minButton = document.getElementById(minId);
  const addButton = document.getElementById(addId);
  const quantity = document.getElementById(quantityId);
  minButton.addEventListener("click", () => {
    for(var i = 0; i < order.length; i++) {
      if(order[i].name == food.name) {
        console.log("found it " + i);
        order.splice(i, 1);
        console.log(order)
        break;
      }
    }
    removeWord(id, obj, quantity, price);
  });
  addButton.addEventListener("click", () => {
    order.push(food);
    console.log(order);
    addWord(food.name + ": " + food.price, id, obj, quantity, price);
  });
}

//Purchase button
purchaseButton.addEventListener("click", () => {
  Menu();
});
purchaseMobile.addEventListener("click", () => {
  MobileMenu();
});
savePayment.addEventListener("click", () => {
  //export list of item and total price of them
  localStorage.setItem("array", JSON.stringify(order));
  let totalRes = 0;
  for (var i = 0; i < sumArr.length; i++) {
    totalRes += sumArr[i];
  }
  localStorage.setItem("total", JSON.stringify(totalRes));
  const res = JSON.parse(localStorage.getItem("array"));
});

function Menu() {
  if (sidemenu.style.right === "0px") {
    sidemenu.style.right = "-250px";
    section.style.marginRight = "0px";
  } else {
    sidemenu.style.right = 0;
    section.style.marginRight = "250px";
  }
}

function MobileMenu() {
  if (sidemenu.style.right === "0px") {
    sidemenu.style.right = "-250px";
  } else {
    sidemenu.style.right = 0;
  }
}

function addWord(string, id, obj, quantityId, price) {
  var node = document.createElement("LI"); // Create a <li> node
  node.id = id;
  obj.a += 1;
  quantityId.innerText = obj.a;
  var textnode = document.createTextNode(string); // Create a text node
  node.appendChild(textnode); // Append the text to <li>
  document.getElementById("list").appendChild(node);
  sumArr.push(price);
  calcSum();
}

function removeWord(id, obj, quantityId, price) {
  if (obj.a > 0) {
    obj.a -= 1;
  }
  quantityId.innerText = obj.a;
  var myobj = document.getElementById(id);
  if (myobj != null) {
    myobj.remove();
  }

  for (var i = 0; i < order.length; i++) {
    if (order[i].price == price) {
      console.log("did")
      sumArr.splice(i, 1);
      break;
    }
  }

  for (var i = 0; i < sumArr.length; i++) {
    if (sumArr[i] == price) {
      sumArr.splice(i, 1);
      break;
    }
  }
  calcSum();
}

function calcSum() {
  let res = 0;
  for (var i = 0; i < sumArr.length; i++) {
    res += sumArr[i];
  }
  total.innerText = "cost: " + res;
}
