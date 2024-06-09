const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLink = document.querySelectorAll(".nav-link");

hamburger.addEventListener("click", mobileMenu);
navLink.forEach(n => n.addEventListener("click", closeMenu));

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}


let slider = document.querySelector('.hbox2 .list');
let items = document.querySelectorAll('.hbox2 .list .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let dots = document.querySelectorAll('.hcontainer .dots li');

let lengthItems = items.length - 1;
let active = 0;
next.onclick = function(){
    active = active + 1 <= lengthItems ? active + 1 : 0;
    reloadSlider();
}
prev.onclick = function(){
    active = active - 1 >= 0 ? active - 1 : lengthItems;
    reloadSlider();
}
let refreshInterval = setInterval(()=> {next.click()}, 3000);
function reloadSlider(){
    slider.style.left = -items[active].offsetLeft + 'px';
    // 
    let last_active_dot = document.querySelector('.hcontainer .dots li.active');
    last_active_dot.classList.remove('active');
    dots[active].classList.add('active');

    clearInterval(refreshInterval);
    refreshInterval = setInterval(()=> {next.click()}, 3000);

    
}

dots.forEach((li, key) => {
    li.addEventListener('click', ()=>{
         active = key;
         reloadSlider();
    })
})
window.onresize = function(event) {
    reloadSlider();
};


// let iconCart = document.querySelector('#cart')
// let closeCart = document.querySelector('.close')
// let showCart = document.querySelector('.showCart')
// let listProductHTML = document.querySelector('.listProduct');
// // let listCartHtml = document.querySelector('.listCart')
// let close = document.querySelector('.closepopup')
// let listProducts = [];
// let carts = [];

// let listProducts2 = [];

// let listProductHTML2 = document.querySelector('.listProduct2');

// iconCart.addEventListener('click',()=>{
//   showCart.classList.toggle('showCart')
// })

// closeCart.addEventListener('click',()=>{
//   showCart.classList.toggle('showCart')
// })




//   const addDataToHTML = () => {
//     // remove datas default from HTML
//     listProductHTML.innerHTML=''
//         // add new datas
//         if(listProducts.length > 0) // if has data
//         {
//             listProducts.forEach(product => {
//                 let newProduct = document.createElement('div');
//                 newProduct.dataset.id = product.id;
//                 newProduct.classList.add('pitem');
//                 newProduct.innerHTML = 
//                 `<img src="${product.image}">
//                 <h2>${product.name}</h2>
//                 <h3>${product.type}</h3>
//                 <div class="price">$${product.price}</div>
//                 <button class="addCart">Add To Cart</button>`;
//                 listProductHTML.appendChild(newProduct);
//             });
//         }
//     }


 

//     const addDataToHTML2 = () => {
//       // remove datas default from HTML
//       listProductHTML2.innerHTML=''
//           // add new datas
//           if(listProducts2.length > 0) // if has data
//           {
//               listProducts2.forEach(product => {
//                   let newProduct2 = document.createElement('div');
//                   newProduct2.dataset.id = product.id;
//                   newProduct2.classList.add('pitem');
//                   newProduct2.innerHTML = 
//                   `<img src="${product.image}" alt="">
//                   <h2>${product.name}</h2>
//                   <h3>${product.type}</h3>
//                   <h2>${product.rating}</h2>`;
//                   listProductHTML2.appendChild(newProduct2);
//               });
//           }
//       }



    // listProductHTML.addEventListener('click',(event)=>{
    //   let positionClick = event.target;
    //   if(positionClick.classList.contains('addCart')){
    //     let product_id = positionClick.parentElement.dataset.id;
    //     swal({
    //       title: "Item Added to Cart!",
    //       icon: "success",
    //       buttons: false,
    //       timer: 1800,
    //       closeOnClickOutside: false,
    //     });
    //     addToCart(product_id)
    //   }
    // })




//   const addToCart = (product_id) => {
//     let positionThisProductInCart = carts.findIndex((value) => value.product_id == product_id);
//     if(carts.length <= 0){
//         carts = [{
//             product_id: product_id,
//             quantity: 1
//         }];
//     }else if(positionThisProductInCart < 0){
//         carts.push({
//             product_id: product_id,
//             quantity: 1
//         });
//     }else{
//         carts[positionThisProductInCart].quantity = carts[positionThisProductInCart].quantity + 1;
//     }
//     addCartToHTML();
//     addCartToMemory()
// }

// const addCartToMemory = () => {
//   localStorage.setItem('cart', JSON.stringify(carts));
// }

// const addCartToHTML = () =>{
//   listCartHtml.innerHTML = '';
//   if(carts.length>0){
//     carts.forEach(cart => {
//       let newCart = document.createElement('div')
//       newCart.classList.add('cartItem')
//       newCart.dataset.id = cart.product_id
//       let positionProduct = listProducts.findIndex((value)=> value.id == cart.product_id)
//       let info = listProducts[positionProduct]
//       newCart.innerHTML = `  
//       <div class="cartImage">
//           <img src="${info.image}">
//       </div>
//       <div class="name">
//           ${info.name}
//       </div>
//       <div class="totalPrice">
//           $${info.price * cart.quantity}
//       </div>
//       <div class="quantity">
//           <span class="minus">-</span>
//           <span>${cart.quantity}</span>
//           <span class="plus">+</span>
//       </div>
//   </div>
//   `;
//   listCartHtml.appendChild(newCart)
//     }) 
//   }
// }

// listCartHtml.addEventListener('click', (event)=>{
//   let positionClick = event.target;
//   if(positionClick.classList.contains('minus') || positionClick.classList.contains('plus')){
//     let product_id = positionClick.parentElement.parentElement.dataset.id
//     let type = 'minus'
//     if(positionClick.classList.contains('plus')){
//       type = 'plus'
//     }
//     changeQuantity(product_id,type)
//   }
// })


// const changeQuantity = (product_id,type)=>{
//   let positionItemInCart = carts.findIndex((value) => value.product_id == product_id)
//   if(positionItemInCart >= 0){
//     switch(type){
//       case 'plus':
//         carts[positionItemInCart].quantity = carts[positionItemInCart].quantity+1;
//         break;
      
//       default:
//         let valueChange = carts[positionItemInCart].quantity-1;
//         if(valueChange > 0){
//           carts[positionItemInCart].quantity = valueChange;
//         }
//         else{
//           carts.splice(positionItemInCart,1)
//         }
//         break;
//     }
//   }
//   addCartToMemory();
//   addCartToHTML();
// }

  // const initApp = () => {
  //     // get data product
  //     fetch('products.json')
  //     .then(response => response.json())
  //     .then(data => {
  //         listProducts = data;
  //         addDataToHTML();
  //         if(localStorage.getItem('cart')){
  //           carts = JSON.parse(localStorage.getItem('cart'));
  //           addCartToHTML();
  //       }
  //     })
  // }
  // initApp(); 

  // const initApp2 = () => {
  //   // get data product
  //   fetch('bestselling.json')
  //   .then(response => response.json())
  //   .then(data => {
  //       listProducts2 = data;
  //       addDataToHTML2();
  //       if(localStorage.getItem('cart')){
  //         carts = JSON.parse(localStorage.getItem('cart'));
  //         addCartToHTML();
  //     }
  //   })
  // }
  
  // initApp2(); 


  let iconCart = document.querySelector('#headercart');
  let cart = document.querySelector('.cart');
  let container = document.querySelector('.container');
  let close = document.querySelector('.close');
  
  iconCart.addEventListener('click', function(){
      if(cart.style.right == '-100%'){
          cart.style.right = '0';
          container.style.transform = 'translateX(-400px)';
      }else{
          cart.style.right = '-100%';
          container.style.transform = 'translateX(0)';
      }
  })
  close.addEventListener('click', function (){
      cart.style.right = '-100%';
      container.style.transform = 'translateX(0)';
  })
  
  
  let products = null;
  // get data from file json
  fetch('products.json')
      .then(response => response.json())
      .then(data => {
          products = data;
          addDataToHTML();
  })
  
  //show datas product in list 
  function addDataToHTML(){
      // remove datas default from HTML
      let listProductHTML = document.querySelector('.listProduct');
      listProductHTML.innerHTML = '';
  
      // add new datas
      if(products != null) // if has data
      {
          products.forEach(product => {
              let newProduct = document.createElement('div');
              newProduct.classList.add('item');
              newProduct.innerHTML = 
              `<img src="${product.image}" alt="">
              <h2>${product.name}</h2>
              <h3>${product.type}</h3>
              <div class="price">$${product.price}</div>
              <button onclick="addCart(${product.id})">Add To Cart</button>`;
            
              listProductHTML.appendChild(newProduct);
  
          });
          
      }
      
  }


let listProducts2 = [];
let listProductHTML2 = document.querySelector('.listProduct2');

    const addDataToHTML2 = () => {
      // remove datas default from HTML
      listProductHTML2.innerHTML=''
          // add new datas
          if(listProducts2.length > 0) // if has data
          {
              listProducts2.forEach(product => {
                  let newProduct2 = document.createElement('div');
                  newProduct2.dataset.id = product.id;
                  newProduct2.classList.add('pitem');
                  newProduct2.innerHTML = 
                  `<img src="${product.image}" alt="">
                  <h2>${product.name}</h2>
                  <h3>${product.type}</h3>
                  <h2>${product.rating}</h2>`;
                  listProductHTML2.appendChild(newProduct2);
              });
          }
      }
      
  const initApp2 = () => {
    // get data product
    fetch('bestselling.json')
    .then(response => response.json())
    .then(data => {
        listProducts2 = data;
        addDataToHTML2();
        if(localStorage.getItem('cart')){
          carts = JSON.parse(localStorage.getItem('cart'));
          addCartToHTML();
      }
    })
  }
  
  initApp2(); 

  //use cookie so the cart doesn't get lost on refresh page
  
  
  let listCart = [];
  function checkCart(){
      var cookieValue = document.cookie
      .split('; ')
      .find(row => row.startsWith('listCart='));
      if(cookieValue){
          listCart = JSON.parse(cookieValue.split('=')[1]);
      }else{
          listCart = [];
      }
  }
  checkCart();
  function addCart($idProduct){
      let productsCopy = JSON.parse(JSON.stringify(products));
      //// If this product is not in the cart
      if(!listCart[$idProduct]) 
      {
          listCart[$idProduct] = productsCopy.filter(product => product.id == $idProduct)[0];
          listCart[$idProduct].quantity = 1;
      }else{
          //If this product is already in the cart.
          //I just increased the quantity
          listCart[$idProduct].quantity++;
      }
      document.cookie = "listCart=" + JSON.stringify(listCart) + "; expires=Thu, 31 Dec 2025 23:59:59 UTC; path=/;";
      swal({
        title: "Item Added to Cart!",
        icon: "success",
        buttons: false,
        timer: 1800,
        closeOnClickOutside: false,
      });
  
      addCartToHTML();
  }
  addCartToHTML();
  function addCartToHTML(){
      // clear data default
      let listCartHTML = document.querySelector('.listCart');
      listCartHTML.innerHTML = '';
  
      let totalHTML = document.querySelector('.totalQuantity');
      let totalQuantity = 0;
      // if has product in Cart
      if(listCart){
          listCart.forEach(product => {
              if(product){
                  let newCart = document.createElement('div');
                  newCart.classList.add('item');
                  newCart.innerHTML = 
                      `<img src="${product.image}">
                      <div class="content">
                          <div class="name">${product.name}</div>
                          <div class="price">$${product.price} / 1 product</div>
                      </div>
                      <div class="quantity">
                          <span onclick="changeQuantity(${product.id}, '-')"><</span>
                          <span class="value">${product.quantity}</span>
                          <span onclick="changeQuantity(${product.id}, '+')">></span>
                      </div>`;
                  listCartHTML.appendChild(newCart);
                  totalQuantity = totalQuantity + product.quantity;
              }
          })
      }
      totalHTML.innerText = totalQuantity;
  }
  function changeQuantity($idProduct, $type){
      switch ($type) {
          case '+':
              listCart[$idProduct].quantity++;
              break;
          case '-':
              listCart[$idProduct].quantity--;
  
              // if quantity <= 0 then remove product in cart
              if(listCart[$idProduct].quantity <= 0){
                  delete listCart[$idProduct];
              }
              break;
      
          default:
              break;
      }
      // save new data in cookie
      document.cookie = "listCart=" + JSON.stringify(listCart) + "; expires=Thu, 31 Dec 2025 23:59:59 UTC; path=/;";
      // reload html view cart
      addCartToHTML();
  }

