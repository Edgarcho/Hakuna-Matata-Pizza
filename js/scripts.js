function Pizza(size, garnish){
  this.size = size;
  this.garnish = garnish;
  this.total = 0;
}

Pizza.prototype.garnishCost = function(){
  for (var i = 0; i <= this.garnish.length; i++) {
    var itemCount = [i]
    var totalGarnish = itemCount * 2.50
  }
  this.total = totalGarnish
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
    $(".grandtotal").text(" " + newPizza.total);
  });
});
