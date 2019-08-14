$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();

    var person1Input = $("input#person1").val();

    $(".person1").text(person1Input);


    $("#story").show();
    // $("#name").show();
  });
});
