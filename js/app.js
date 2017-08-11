//$(document).ready(function () {
    $.ajax({
        url: "http://date.jsontest.com",
        data: {},
        type: "GET",
        dataType: "json"
    }).done(function(result) {
        console.log(result.date);
    });
//});