console.log("?");
const sidemenu = document.getElementById("side");
const purchaseButton = document.getElementById("purchase");
const section = document.getElementById("section");

var node = document.createElement("LI");
//node.className="sidebar" ;          // Create a <li> node
var textnode = document.createTextNode("Water");         // Create a text node
node.appendChild(textnode);                              // Append the text to <li>
document.getElementById("list").appendChild(node);

var x = window.innerWidth
if( window.innerWidth < 1000)
{
    console.log("stop");
}

purchaseButton.addEventListener("click", () => {
    print();
})

function print()
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