$(document).ready(function () {
    $("form#user-input").submit(function (event) {
        event.preventDefault();
        var age = parseInt($("#age").val());
        var gender = parseInt($("#gender").val());
        var animal = parseInt($("#favorite-animal").val());
        var band = parseInt($("#favorite-band").val());
        var food = parseInt($("#favorite-food").val());

        if (age <= 18 || gender === 1 || animal === 4 && band === 7) {
            $("#ruby").show();
        } else if (age >= 18 && gender === 1 || animal === 5 && band === 8) {
            $("#python").show();
        }

    });
});