var submit=document.querySelector("form")
submit.addEventListener("submit",function(){
    event.preventDefault();
    alert("Your order is accepted");
    setTimeout(function(){
        alert("Your order is being Prepared");
        y1();
    },3000);

   function y1(){
    setTimeout(function(){
        alert("Your order is being packed ");
        y2();
    },8000);
    }
    function y2(){
        setTimeout(function(){
            alert("Your order is out for delivery");
            y3();
        },10000);
    }
    function y3(){
        setTimeout(function(){
            alert("Your order is out for delivery");
        },12000);
    }

})
