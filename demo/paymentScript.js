const res = JSON.parse(localStorage.getItem("array"));
const totalText = JSON.parse(localStorage.getItem("total"));
const purchaseButton = document.getElementById("purchase");
const sidemenu = document.getElementById("side");
const purchaseMobile = document.getElementById("mobileDropdown");
const total = document.getElementById("total");
const payText = document.getElementById("totalCostToPay");

console.log(res[2])
console.log(totalText);
console.log(res.length);
for(let i = 0; i < res.length; i++) {
  AddListItem(res[i]);
}

purchaseButton.addEventListener("click", () => {
    Menu();
  });
  purchaseMobile.addEventListener("click", () => {
    MobileMenu();
  });

payText.innerText = (totalText/1000) + ".000";
total.innerText = "cost: " + totalText;

function AddListItem(obj) {
  console.log("did it")
  var node = document.createElement("li");
  var string = obj.name + ": " + obj.price;
  var textNode = document.createTextNode(string);
  node.appendChild(textNode);
  document.getElementById("list").appendChild(node);
}

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