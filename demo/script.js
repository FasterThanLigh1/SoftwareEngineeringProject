console.log("?");
const sidemenu = document.getElementById("side");
const purchaseButton = document.getElementById("purchase");
const section = document.getElementById("section");

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