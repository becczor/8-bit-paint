$( document ).ready(function() {

    // Set ID to the chosen color in palette
    $(".color").click(function(event) {
        $("#chosen").removeAttr('id');
        this.id = 'chosen';
    });

    // Update color class in div that should be filled
//  $(staticAncestors).on(eventName, dynamicChild, function() {});
    $("#canvas").on("click", ".cell", function() {
        colorClass = $(this).attr("class").split(" ").pop();
        chosenClass = $("#chosen").attr("class").split(" ").pop();
        $(this).removeClass(colorClass).addClass(chosenClass);

        var preDelimiter = $("#pre-delimiter").val();
        var subDelimiter = $("#sub-delimiter").val();
        if (subDelimiter === "") {
            subDelimiter = ", ";
        }
        $(this).text( preDelimiter + chosenClass.split("_").pop() + subDelimiter);
    });

});

// Generates code from colorClasses, with delimiters from user
var setCode = function(html) {
    var preDelimiter = $("#pre-delimiter").val();
    var subDelimiter = $("#sub-delimiter").val();
    if (subDelimiter === "") {
        subDelimiter = ", ";
    }
    var cells = document.getElementsByClassName('cell');
    //console.log(cells[0]);
    var code = _.reduce(cells, function(memo, cell) {
        return memo + preDelimiter + cell.className.split(" ").pop().split("_").pop() + subDelimiter
    }
    , "");
    //console.log(code);
    document.getElementById("code").innerHTML = code;
};

var generateDivs = function(html) {
    event.preventDefault();
    var rows = $("#inputRows").val();
    var cols = $("#inputCols").val();
    var preDelimiter = $("#pre-delimiter").val();
    var subDelimiter = $("#sub-delimiter").val();
    //console.log(rows + " x " + cols)

    if (rows === "") {
        rows = 8;
    } 
    if (cols === "") {
        cols = 8;
    }
    if (subDelimiter === "") {
        subDelimiter = ", ";
    }

    var htmlString = "";
    for (i = 0; i < rows; i++) {
        htmlString += "<div class=\"canvasRow\">";
        for (j = 0; j < cols; j++) {
            htmlString += "<div class=\"cell x_FF\" id=\"d" + i + j + "\">" + preDelimiter + "FF" + subDelimiter + "</div>";
        }
        htmlString += "</div>";
    }
    //console.log(htmlString);

    document.getElementById("canvas").innerHTML = htmlString;
}
