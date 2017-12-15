function Pizza(size, garnish){
  this.size = size;
  this.garnish = garnish;
  this.total = 0;
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
    $(".size-result").text(size);
    $(".topping-result").text(garnish);
    $(".grandtotal").text(8.00);
  });
});
