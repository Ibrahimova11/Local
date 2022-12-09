let index = 1
let Products = []
const NameInput = document.getElementById('NameInput')
const CategoryInput = document.getElementById('CategoryInput')
const BrandInput = document.getElementById('BrandInput')
const PriceInput = document.getElementById('PriceInput')
const addProduct = document.getElementById('addProduct')
const prodPrice = document.getElementById('prodPrice')
const prodCategory = document.getElementById('prodCategory')
const prodName = document.getElementById('prodName')
const prodBrand = document.getElementById('prodBrand')



if (!localStorage.getItem("Products")){
    localStorage.setItem("Products",JSON.stringify(Products));    
} else {
    Products=JSON.parse(localStorage.getItem("Products"))
    if(Products.length>1){
        index=Products.length+1;
    }else{
        index=1
    }
    
}

class Product {
  constructor(Name,Category ,Brand, Price) {
    ;(this.id = index),
      (this.Name = Name),
      (this.Category = Category),
      (this.Brand = Brand),
      (this.Price = Price)
  }
}


function AddProduct(Name,Category ,Brand, Price) {
    let product = new Product(Name,Category ,Brand, Price)
    Products.push(product)
    index++
    renderList(Products)
    
  }


  
  function customFind(array, id) {
    for (let i = 0; i < array.length; i++) {
      if (id == array[i].id) {
        return array[i]
      }
    }
    return 'not found'
  }
  
  addProduct.addEventListener('click', () => {
    AddProduct(NameInput.value, CategoryInput.value, BrandInput.value,  PriceInput.value)
    console.log(Products)
  })
  
  function renderList(arr) {
    let innerHTML = ''
    for (let i = 0; i < arr.length; i++) {
      innerHTML += `<div class="col-3 mb-5">
              <div class="card" style="width: 18rem">
              <img
                  src="https://img.freepik.com/free-photo/aesthetic-dark-wallpaper-background-neon-light_53876-128291.jpg?w=2000"
                  class="card-img-top"
                  alt="..." />
              <div class="card-body">
                  <h5 class="card-title" id="prodName">${arr[i].Name}</h5>
                  <h2 id="prodPrice">$ ${arr[i].Price}</h2>
                  <p class="card-text" id="prodCategory"> ${arr[i].Category}</p>
                  <p class="card-text" id="prodBrand"> ${arr[i].Brand}</p>                                
              </div>
              </div>
          </div>`
    }
}
