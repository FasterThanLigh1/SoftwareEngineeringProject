import { order } from "./savedInfo.js";

const res = JSON.parse(localStorage.getItem("array"));
const purchaseButton = document.getElementById("purchase");
const sidemenu = document.getElementById("side");
const purchaseMobile = document.getElementById("mobileDropdown");

console.log(res)

purchaseButton.addEventListener("click", () => {
    Menu();
  });
  purchaseMobile.addEventListener("click", () => {
    MobileMenu();
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