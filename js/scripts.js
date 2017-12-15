function Pizza(size, garnish){
  this.size = size;
  this.garnish = garnish;
  this.total = 0;
}

Pizza.prototype.cost = function(){
  for (var i = 0; i <= this.garnish.length; i++) {
    var itemCount = [i]
    var totalGarnish = itemCount * 2.50
  }
  this.total = totalGarnish
  if(this.size === "Family"){
    this.total += 25;
  }else if(this.size === "Large"){
    this.total += 20;
  }else if(this.size === "Medium"){
    this.total += 15;
  }else{
    this.total += 10;
  }
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
    $(".grandtotal").text("$" + " " + newPizza.total);
    $("#order-result").show();
  });
});
