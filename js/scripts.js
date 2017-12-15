//User Interface Logic
$(document).ready(function(){
  $("form#order-option").submit(function(event){
    event.preventDefault();
    var size = $("#size").val();
    $(".size-result").text(size);
  });
});
