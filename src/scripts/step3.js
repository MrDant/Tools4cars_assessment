function addClickEvent() {
  $("#cars-content").on("click", ".car-item", function () {
    const carId = $(this).data("id");
    loadCarDetails(carId);
  });
}

function loadCarDetails(carId) {
  $.get("/edit.php", { carId }, function (data) {
    $(".dynamic-div").html(data);
  });
}
