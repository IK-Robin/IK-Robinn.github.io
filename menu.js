
// select all mentu items and all things 

const menu = [
{
    id:1,
    title:'Buttermilk panCaks',
    category:"Breakfast",
    price:15.99,
    Desc:`I am bab  woke milkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold -pressed` ,
    img:'Images/Breakfast.jpg',
},
{
    id:2,
    title:'Nice Cake',
    category:"Lunch",
    price:15.99,
    Desc:`I am bab  woke milkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold -pressed` ,
    img:'Images/Lunch.jpg',
},
{
    id:3,
    title:'Dinner Duble',
    category:"Shakes",
    price:15.99,
    Desc:`I am bab  woke milkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold -pressed` ,
    img:'Images/dinner.jpg',
},
{
    id:4,
    title:'Buttermilk panCaks',
    category:"Afternoon",
    price:15.99,
    Desc:`I am bab  woke milkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold -pressed` ,
    img:'Images/afterNoon.jpg',
},
{
    id:5,
    title:'Buttermilk panCaks',
    category:"Lunch",
    price:15.99,
    Desc:`I am bab  woke milkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold -pressed` ,
    img:'Images/Breakfast.jpg',
},
{
    id:6,
    title:'Buttermilk panCaks',
    category:"Breakfast",
    price:15.99,
    Desc:`I am bab  woke milkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold -pressed` ,
    img:'Images/Breakfast.jpg',
},
{
    id:7,
    title:'Buttermilk panCaks',
    category:"Breakfast",
    price:15.99,
    Desc:`I am bab  woke milkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold -pressed` ,
    img:'Images/Breakfast.jpg',
},
{
    id:8,
    title:'Buttermilk panCaks',
    category:"Breakfast",
    price:15.99,
    Desc:`I am bab  woke milkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold -pressed` ,
    img:'Images/Breakfast.jpg',
},
{
    id:9,
    title:'Buttermilk panCaks',
    category:"Breakfast",
    price:15.99,
    Desc:`I am bab  woke milkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold -pressed` ,
    img:'Images/Breakfast.jpg',
},
{
    id:10,
    title:'Buttermilk panCaks',
    category:"Breakfast",
    price:15.99,
    Desc:`I am bab  woke milkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold -pressed` ,
    img:'Images/Breakfast.jpg',
},
{
    id:11,
    title:'Buttermilk panCaks',
    category:"Breakfast",
    price:15.99,
    Desc:`I am bab  woke milkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold -pressed` ,
    img:'Images/Breakfast.jpg',
},
{
    id:12,
    title:'Buttermilk panCaks',
    category:"Breakfast",
    price:15.99,
    Desc:`I am bab  woke milkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold -pressed` ,
    img:'Images/Breakfast.jpg',
},

];

const singleProductDiv = document.querySelector('.singleProductDiv');
const contanerBtn = document.querySelector('.buttons');




// load items
window.addEventListener('DOMContentLoaded', function() {
    diplayMenuItem(menu);
    
    displayBtn();


});


// filter button 

function displayBtn () {
    const categories = menu.reduce(function(values,item) {
   
        if( !values.includes(item.category)){
            values.push(item.category);
        }
        return values;
    
    },['all']);
        const categorieyBtn = categories.map(function (category) {
            return ` <button type="button " class="allBtn "data-id=${category}>${category}</button>`;
        }).join('');
    
        contanerBtn.innerHTML =categorieyBtn;
        const filterBtn = document.querySelectorAll('.allBtn');
        filterBtn.forEach(function(btn){
            btn.addEventListener('click', function(e){
                const category = e.currentTarget.dataset.id;
                const menuCategory = menu.filter(function (menuItem) {
                    
                    if (menuItem.category === category) {
                        return menuItem;
                    }
                   
                });
                if (category ==='all') {
                    diplayMenuItem(menu);
                }else {
                    diplayMenuItem(menuCategory);
                }
             
            });
            
        });
}


function diplayMenuItem (menuItems) {
    
    let displayMenu = menuItems.map(function (item) {
        // console.log(item);
    
        return `  <div class="singleproduct">
        <img src=${item.img} alt=${item.title} class="Images">
        <div class="detail">
        <header>
            <h2>${item.title} </h2>
            <span class="price">$${item.price} </span>
           
        </header>
        <p class="productTitle">${item.Desc} </p>
       </div>
    </div> `;
    });
    displayMenu = displayMenu.join('');
    singleProductDiv.innerHTML = displayMenu;

    
} 