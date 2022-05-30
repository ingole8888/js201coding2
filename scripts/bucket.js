// On clicking remove button the item should be removed from DOM as well as localstorage.
let Ecomm = JSON.parse(localStorage.getItem("coffee"))
console.log(Ecomm)
let x=Ecomm.reduce(function(sum,el){
    return sum+(el.price)
},0)
console.log(x)
let len=Ecomm.length;
document.getElementById("total_amount").innerHTML=`Total price: ${x}`
let box=document.getElementById("bucket")
Ecomm.map(function(el,index){
    let div=document.createElement("div")
    div.setAttribute("id","box")
    let image=document.createElement("img")
    image.src=el.image
    let type=document.createElement("h2")
    type.innerText=el.title
    let price=document.createElement("h2")
    price.innerText=el.price
    let remove_coffee=document.createElement("button")
    remove_coffee.innerText="Remove"
    remove_coffee.setAttribute("id","remove_coffee")
    remove_coffee.addEventListener("click",function(){
        RemoveItems(el,index)
    })
    div.append(image,type,price,remove_coffee)
    box.append(div)
})
function RemoveItems(el,index){
    Ecomm.splice(index,1)
    localStorage.setItem("coffee",JSON.stringify(Ecomm))
    window.location.reload()
}