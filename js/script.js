$(function(){
  //this code runs when page is ready

  //basic logic needed for our page
  //create an empty array
  var groceryList = [];

  //this creates eventlisterner for the addItem button
  $('#addItem').click(function(event){
    event.preventDefault(); //this stops the form from submitting

    //this needs append the input text to the array
    groceryList.push($("#textField").val());
    //clear the textField value

    $("#textField").val("");

    console.log(groceryList);
  });



  //this creates an event listerner for the submit button
  $('#submit').click(function(event){
    event.preventDefault(); //this stops the form from submitting

    //hide the form
    $("#form").hide();
    //another way to hide an HTML item
    // $("#form").addClass("hidden");

    //loop through the array
    groceryList.forEach(function(item){
      //in each loop, append a line item in results
      $("#results").append("<li>" + item + "</li>");
    });



    //display full list of items
    console.log("hidden");
  });

});
