$(document).ready(function () {

    function handleTitleClick(element) {
        $("div.info").hide();
        var bookRow = $(this).closest("tr");
        var infoDiv = bookRow.find("div.info");

        $.ajax({
            url: "http://127.0.0.1:8000/book/" + bookRow.attr("id"),
            data: {},
            type: "GET",
            dataType: "json"
        }).done(function (result) {
            var bookParmas = [];
            for (atr in result){
                bookParmas.push("<p class='desc'>" + atr + " : " + result[atr] + "</p>");
            }
            infoDiv.html(bookParmas.join(''));
            infoDiv.show();



        });
    }





    $.ajax({
        url: "http://127.0.0.1:8000/book/",
        data: {},
        type: "GET",
        dataType: "json"
    }).done(function (result) {

        //dziala, wyswietla liste ksiazek
        /*$.each(result, function(index, element) {
            $('body').append($('<div>', {
                text: element.title
            }));
        }); */

        //tez działa, wyswietla liste ksiazek
        $("body").append('<table id="books">');
        result.forEach(function (el) {
            var book = $("<tr>");
            book.attr("id", el.id);
            book.append($("<td>").html("<span>" + el.title + "</span>"));
            //book.append($("<td>").html("<a href=''>" + el.title + "</a>")); //zrobi z tytulow linki
            book.append($('<div class = "info hidden">'));
            $("#books").append(book);


            //na klikniecie rozwijamy info
            book.on('click', 'td span', handleTitleClick)
        });
    });

});