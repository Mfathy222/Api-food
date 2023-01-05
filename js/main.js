document.querySelector("input").addEventListener("keyup",function(e){
var userInput = e.target.value;
getinput(userInput);

});
var allFood =[];

function getinput(term){
    var req = new XMLHttpRequest();

req.open("GET",`https://forkify-api.herokuapp.com/api/search?q=${term}`);
req.send();

req.addEventListener("loadend", function(){

  if ( req.status == 200) {
    console.log(JSON.parse(req.response).recipes );  


    allFood= JSON.parse(req.response).recipes  ; 
   display();
  }
})
};

 function display(){
var cartona = '';
for (var i=0 ;i<allFood.length; i++){
cartona += `<div class="col-md-4">
<div class="item">
<img class=" w-100 " src="${allFood[i].image_url == null ?"images/images1.jpg":allFood[i].image_url }">
<h3>${allFood[i].title }</h3>
<p>${allFood[i]. publisher } </p>
</div></div>`
}
document.querySelector(".row").innerHTML= cartona ;

 };

