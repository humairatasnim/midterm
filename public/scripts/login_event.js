$(document).ready(function() {

  $(".rounded-button").click(function(event) {
    event.preventDefault();
    if ($(".rounded-button").data("attribute") === "true") {
      const idVal = $(".form-control").val()
      console.log(idVal);

      $.post("/login", { idVal })
        .then((id) => {
          if (id === 2) {
            window.location.href='http://localhost:8080/restaurant';
          }
          if (id === 1) {
            window.location.href = 'http://localhost:8080/menu';
          }

        })

      return;
    }

    console.log("clicked once");
    $(".id").slideDown();
    $(".rounded-button").data("attribute", "true");
    $(".rounded-button").prop("type", "submit");
  });

});



