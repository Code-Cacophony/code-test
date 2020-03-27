$(document).ready(function () {
    $("form#user-input").submit(function (event) {
        event.preventDefault();
        var age = parseInt($("#age").val());
        var gender = parseInt($("#gender").val());
    })
})