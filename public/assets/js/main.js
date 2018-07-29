$(document).ready(function () {
    $("#submit-btn").on("click", function () {
        var newBurger = {
            burgerName: $("#newBurger").val().trim()
        }

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                location.reload();
            }
        )
    })

    $(".myBurgers #burgerBtn").on("click", function () {

        var holdId = {
            id: $(this).attr("data-id")
        }

        $.ajax("/api/burgers", {
            type: "PUT",
            data: holdId,
        }).then(function () {
            location.reload();
        })
    })
});


