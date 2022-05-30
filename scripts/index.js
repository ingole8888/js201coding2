// Add the coffee to local storage with key "coffee"
let url="https://masai-mock-api.herokuapp.com/coffee/menu";
fetch(url)
.then(function(res){
    return res.json();
})
.then(function(res){
    //console.log(res)
    const takeData=res.menu.data;
    append(takeData)
    console.log(takeData);
})
.catch(function(err){
    console.log(err);
})
let arr=JSON.parse(localStorage.getItem("coffee")) || [];
let x=arr.length;
document.getElementById("coffee_count").innerText=`Coffee Added:${x}`

function append(data){
    data.map(function(el,index){
        // document.getElementById("menu")
        let div=document.createElement("div")
        div.setAttribute("id","box")
        let image=document.createElement("img")
        image.src=el.image
        let type=document.createElement("h2")
        type.innerText=el.title
        let price=document.createElement("h2")
        price.innerText=el.price
        let add_bucket=document.createElement("button")
        add_bucket.innerText="Add to Bucket"
        add_bucket.setAttribute("id","add_to_bucket")
        add_bucket.addEventListener("click",function(){
            coffeeAdd(el,index)
        })
        div.append(image,type,price,add_bucket)
        document.querySelector("#menu").append(div)
    })
}

function coffeeAdd(el,index){
    arr.push(el)
    console.log(arr)
    localStorage.setItem("coffee",JSON.stringify(arr))
}
