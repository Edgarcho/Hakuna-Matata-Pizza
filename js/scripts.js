//User Interface Logic
$(document).ready(function(){
  $("form#order-option").submit(function(event){
    event.preventDefault();
    var size = $("#size").val();
    $("input:checkbox[name=toppings]:checked").each(function(){
      debugger
      var garnish = $(this).val();
      $(".topping-result").append(garnish + "<br>");
    });
    $(".size-result").text(size);
    $(".grandtotal").text(8.00);
  });
});
