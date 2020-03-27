$(document).ready(function () {
    $("form#user-info").submit(function (event) {
        event.preventDefault();
        var animal = parseInt($("#favorite-animal").val());
        var band = parseInt($("#favorite-band").val());
        var food = parseInt($("#favorite-food").val());

        if (animal === 1 && band === 4 && food === 7) {
            $("#ruby").show();
        } else if (animal === 2 && band === 5 && food === 8) {
            $("#python").show();
        } else if (animal === 0 || band === 0 || food === 0) {
            $("#error").show();
        } else {
            $("#javascript").show();
        }

    });
});