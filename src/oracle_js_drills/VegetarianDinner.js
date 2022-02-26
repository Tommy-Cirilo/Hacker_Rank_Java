// You are planning the menu for an italian dinner, but some of your guests are vegetarian and you need to create a list of vegetarian menu items.
// Given an array of italian dishes, create an unordered list of all vegetarian dinner options. 
// Each menu item is an object containing the dish name and a boolean variable that indicates whether the dish is vegetarian. 
// You should dynamically generate the list items in the DOM from the array of vegetarian items


const menuItems = [ 
    {
    name:"Spaghetti",
    vegetarian: true
    },
    {
    name:"Linguini",
    vegetarian: true
    },
    {
    name:"Lasagna",
    vegetarian: true
    },
    {
    name:"Pizza",
    vegetarian: true
    },
      ];



// First Solution
function vegetarianMenu(menuItems) {

    const menuNode = document.querySelector('#menu');

    const vegetarianOptions = menuItems.filter(
        (option) => option.isVegetarian === true
    );
    vegetarianOptions.forEach(option => {
        let dish = document.createElement('li');
        dish.textContent = option.name;
        menuNode.appendChild(dish);
    });
}









// optional, didn't clear it
class MenuItem {
    constructor(name, vegetarian) {
        this.name = name;
        this.vegetarian = vegetarian;
    }

    isVegetarian(vegetarian){
        if(MenuItem.vegetarian = true) {
            menuItems.filter
        }
    }
}