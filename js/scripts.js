var total = 0;

function Pizza(size, garnish){
  this.size = size;
  this.garnish = garnish;
}

Pizza.prototype.cost = function(){
  for (var i = 0; i <= this.garnish.length-1; i++) {
    debugger
    totalGarnish += garnish[i] * 2
  }
  debugger
  total = totalGarnish
}





//User Interface Logic
$(document).ready(function(){
  $("form#order-option").submit(function(event){
    event.preventDefault();
    var size = $("#size").val();
    var garnish = [];
    $("input:checkbox[name=toppings]:checked").each(function(){
      garnish.push($(this).val());
    });
    newPizza = new Pizza(size,garnish);
    newPizza.cost();
    //$(".size-result").text(size);
    //$(".topping-result").text(garnish);
    $(".grandtotal").text(8.00);
  });
});
