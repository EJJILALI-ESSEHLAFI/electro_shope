function SearchCard(){

    let inptsrch = document.querySelector("#searchInput").value.toLowerCase();
    let srchcard = document.querySelectorAll(".card");


    srchcard.forEach(function(car){
        var cardtyp = car.getAttribute("value").toLowerCase();
        var productName = car.querySelector("h4").innerText.toLocaleLowerCase();
        if (inptsrch === cardtyp ||productName.includes(inptsrch)) {
            car.style.display = 'block';
        } else {
            car.style.display = 'none';
        }

    })
    
    

    
    

   
   

  




}
let hedt = document.querySelectorAll('.header-two a');
hedt.forEach(function(link){
    link.addEventListener("click",function(event){
        event.preventDefault();

        var seltype = link.id.toLowerCase();
        document.getElementById("searchInput").value = seltype;
        SearchCard();
    })
});

// let abbtn = document.getElementById("about");
// abbtn.addEventListener("click",function(event){
//     event.preventDefault();
    
// })




