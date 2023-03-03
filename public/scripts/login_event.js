$(document).ready(function() {

  $(".rounded-button").click(function(event) {
    event.preventDefault();
    if ($(".rounded-button").data("attribute") === "true") {
      const emailVal = $(".form-control").val()
      console.log(emailVal);

      $.post("/login", { emailVal })
        .then((id) => {
          if (id === 2) {
            window.location.href='http://localhost:8080/restaurant';
           }
          window.location.href = 'http://localhost:8080/menu';
        })

      return;
    }

    console.log("clicked once");
    $(".email").slideDown();
    $(".rounded-button").data("attribute", "true");
    $(".rounded-button").prop("type", "submit");
  });

});



