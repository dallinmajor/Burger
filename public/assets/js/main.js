$(document).ready(function() {
    $("#submit-btn").on("click", function() {
        var newBurger = {
            burgerName: $("#newBurger").val().trim()
        }

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function() {
                location.reload();
            }
        )
    })

    $("#burgerBtn").on("click", function() {
        var id = $(this).attr("data-id");

        var burgerId = {
            id: id
        }
        $.ajax("/api/burgers", {
            type: "PUT",
            data: burgerId
        }).then(function() {
            location.reload();
        })
    })
});


