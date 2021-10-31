class Food {
    constructor(price, name)
    {
        this.price = price;
        this.name = name;
    }
}

let sumArr = new Array();
const sidemenu = document.getElementById("side");
const purchaseButton = document.getElementById("purchase");
const section = document.getElementById("section");
const total = document.getElementById("total");
var arr = Array.prototype.slice.call( document.getElementById('list').children );
console.log(arr.indexOf("Do st"));

//Create add food button
const minButton0 = document.getElementById("min0");
const addButton0 = document.getElementById("add0");
const minButton1 = document.getElementById("min1");
const addButton1 = document.getElementById("add1");
const minButton2 = document.getElementById("min2");
const addButton2 = document.getElementById("add2");
const minButton3 = document.getElementById("min3");
const addButton3 = document.getElementById("add3");
const minButton4 = document.getElementById("min4");
const addButton4 = document.getElementById("add4");
const minButton5 = document.getElementById("min5");
const addButton5 = document.getElementById("add5");

//number of quantity
var q0 = {
    a: 0
};
var q1 = {
    a: 0
};
var q2 = {
    a: 0
};
var q3 = {
    a: 0
};
var q4 = {
    a: 0
};
var q5 = {
    a: 0
};

//Get quantity
const quantity0 = document.getElementById("quantity0");
const quantity1 = document.getElementById("quantity1");
const quantity2 = document.getElementById("quantity2");
const quantity3 = document.getElementById("quantity3");
const quantity4 = document.getElementById("quantity4");
const quantity5 = document.getElementById("quantity5");

//Create food
const frenchFries = new Food("32.000", "Big French Fries");
const chickenBurger = new Food("40.000", "Chicken Burger");
const smallFrenchFries = new Food("29.000", "Small French Fries");
const superXL = new Food("50.000", "Super XL Burger");
const fishBurger = new Food("40.000", "Fish Burger");
const yellowFrenchFries = new Food("30.000", "Yellow French Fries");

//assign fuction to button

//Section1
minButton0.addEventListener("click", () => {
    removeWord("ff01", q0, quantity0, 32000);
})
addButton0.addEventListener("click", () => {
    addWord(frenchFries.name + ": " + frenchFries.price, "ff01", q0, quantity0, 32000);
})

//Section2
minButton1.addEventListener("click", () => {
    removeWord("ff02", q1, quantity1, 40000);
})
addButton1.addEventListener("click", () => {
    addWord(chickenBurger.name + ": " + chickenBurger.price, "ff02", q1, quantity1, 40000);
})

//Section3
minButton2.addEventListener("click", () => {
    removeWord("ff03", q2, quantity2, 29000);
})
addButton2.addEventListener("click", () => {
    addWord(smallFrenchFries.name + ": " + smallFrenchFries.price, "ff03", q2, quantity2, 29000);
})

//Section4
minButton3.addEventListener("click", () => {
    removeWord("ff04", q3, quantity3, 50000);
})
addButton3.addEventListener("click", () => {
    addWord(superXL.name + ": " + superXL.price, "ff04", q3, quantity3, 50000);
})

//Section5
minButton4.addEventListener("click", () => {
    removeWord("ff05", q4, quantity4, 40000);
})
addButton4.addEventListener("click", () => {
    addWord(fishBurger.name + ": " + fishBurger.price, "ff05", q4, quantity4, 40000);
})

//Section6
minButton5.addEventListener("click", () => {
    removeWord("ff06", q5, quantity5, 30000);
})
addButton5.addEventListener("click", () => {
    addWord(yellowFrenchFries.name + ": " + yellowFrenchFries.price, "ff06", q5, quantity5, 30000);
})

//Purchase button
purchaseButton.addEventListener("click", () => {
    Menu();
})

function Menu()
{
    if(sidemenu.style.right === '0px')
    {
        sidemenu.style.right = '-250px';
        section.style.marginRight = '0px';
        console.log("equal");
    }else
    {
        sidemenu.style.right = 0;
        section.style.marginRight = '250px';
        console.log("not equal");
    }
}

function addWord(string, id, obj, quantityId, price) {
    var node = document.createElement("LI");// Create a <li> node
    node.id = id;
    obj.a += 1;
    quantityId.innerText = obj.a;
    var textnode = document.createTextNode(string);// Create a text node
    node.appendChild(textnode);// Append the text to <li>
    document.getElementById("list").appendChild(node);
    sumArr.push(price);
    calcSum();
}

function removeWord(id, obj, quantityId, price)
{
    if(obj.a > 0){
        obj.a -= 1;
    }
    quantityId.innerText = obj.a;
    var myobj = document.getElementById(id);
    if(myobj != null){
        myobj.remove();
    }
    for(var i = 0; i < sumArr.length; i++)
    {
        if(sumArr[i] == price)
        {
            sumArr.splice(i, 1);
            break;
        }
    }
    calcSum();
}

function calcSum()
{
    let res = 0;
    for(var i = 0; i < sumArr.length; i++)
    {
        res += sumArr[i];
    }
    total.innerText = "cost: " + res;
}