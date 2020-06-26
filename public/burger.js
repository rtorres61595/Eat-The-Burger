console.log("start file");
$(".eat-burger").on("click", function(event){
    
  const id = $(this).data("id");

  const devoured = {
    id:id,
    devoured: true
  };

  // Send the PUT request.
  $.ajax("/api/burgers", {
    type: "PUT",
    data: devoured,
  }).then(() => {
    // Reload the page to get the updated list
    location.reload();
  });
});

$("#post-burger").on("submit", (event) => {
  // Make sure to preventDefault on a submit event.
  event.preventDefault();
  if(!$("#add-burger").val().trim()) return;

  const burger = {
    burgers_name: $("#add-burger").val().trim(),
  };

  // Send the POST request.
  $.ajax("/api/burgers", {
    type: "POST",
    data: burger,
  }).then(() => {
    console.log("created new burger");
    // Reload the page to get the updated list
    location.reload();
  });
});

$(".delete-burger").on("click", function(event){
  var id = $(this).data("id");

  // Send the DELETE request.
  $.ajax("/api/burgers/" + id, {
    type: "DELETE",
  }).then(() => {
    console.log("deleted burger", id);
    // Reload the page to get the updated list
    location.reload();
  });
});
