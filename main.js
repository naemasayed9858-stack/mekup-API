
let result=document.getElementById("products");
console.log(result);
let btns=document.querySelectorAll("button")
console.log(btns);

let products;
async function getData(){

let data= await fetch('https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline')
     products= await data.json()
    products.length=15;
    console.log(products);
    display(products)
    
}
getData()
function display(products){
    console.log(products);
    result.innerHTML=""
products.forEach((item) => {
let card=document.createElement("div")
card.innerHTML=
`
<div class="card">
<div class="over"></div>
<img src="${item.image_link}" alt="photo"> 
<h3>${item.name}</h3>
<p>Price: ${item.price}$</p>
<button class="add">Add to card</button>  
</div>
`;
result.appendChild(card)
})

}


// filter
btns.forEach((e)=>{
e.addEventListener('click', function(){
btns.forEach((el)=>{
 el.classList.remove("active")   
})
this.classList.add("active")

let category= this.dataset.category;
console.log(category);
if (category==="all"){
    display(products)
}
else {
let filtering = products.filter((item) => {
return item.product_type===category
})
display(filtering)
}
})
})  
// filter input 
let inputSearch=document.getElementById("search")
inputSearch.addEventListener("input",function(){
let value=inputSearch.value.toLowerCase()
let filtered=products.filter((item)=>{
    return item.name.toLowerCase().includes(value)
})
display(filtered)

 })













