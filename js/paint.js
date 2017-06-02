$( "portfolio" ).ready(function() {

    console.log( "portfolio ready" );

    $( "a" ).click(function( event ) {

        alert( "As you can see, the link no longer took you to jquery.com" );

        event.preventDefault();

    });

});

/*function genDivs(v){ 

    var e = ""; // whatever you want to append the rows to: 

    for(var i = 0; i < v; i++) { 
        var row = document.createElement("div"); 
        row.className = "row"; 
        for(var x = 1; x <= v; x++) { 
            var cell = document.createElement("div"); 
            cell.className = "gridsquare"; 
            cell.innerText = (i * v) + x;
            row.appendChild(cell); 
        } 
        e.appendChild(row); 
    } 
    document.getElementById("code").innerText = e.innerHTML;

}


function genDivs(v){ 

    var n=4;//take grid column value as you want
    var j=1;

    for(var i = 1; i < n; i++) {
        document.body.innerHTML+='<div class="row">';

        for(k = 0; k < n; k++) {
            document.body.innerHTML+='<div class="gridsquare">' + (j++) + '</div>';
        }

        document.body.innerHTML+='</div>';
    }

}

*/
