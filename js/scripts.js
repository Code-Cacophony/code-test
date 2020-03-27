$(document).ready(function () {
    $("form#user-info").submit(function (event) {
        event.preventDefault();
        var animal = parseInt($("#favorite-animal").val());
        var band = parseInt($("#favorite-band").val());
        var food = parseInt($("#favorite-food").val());

        if (animal === 4 && band === 7 && food === 10) {
            $("#ruby").show();
        } else if (animal === 5 && band === 8 && food === 11) {
            $("#python").show();
        } else {
            $("#javascript").show();
        }

    });
});