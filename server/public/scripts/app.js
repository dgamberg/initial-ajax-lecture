$(document).ready(function(){
    $('.container').hide();

    $('#mainButton').on('click', function(){
        $('.container').slideToggle();
    });

    $.ajax({
        type: "GET",
        url: "/data",
        success: function(data){
            appendDom(data);

        }
    });
    $('.container').on('click', '.deleteButton', function(){
        $(this).parent().remove();
    });

});

function appendDom(data){
    for(var i = 0; i < data.people.length; i++){
        console.log(data.people[i].name);
        $(".container").append("<div class='person well'></div>");
        var $el = $(".container").children().last();

        $el.append("<p class='name'><span class='itemLabel'>Name: </span><br>" + data.people[i].name + "</p>");
        $el.append("<p class='position'><span class='itemLabel'>Position: </span> <br> " + data.people[i].position + "</p>");

        $el.append("<p class='location'><span class='itemLabel'>Location: </span><br>" + data.people[i].location + "</p>");
        $el.append("<img class='image' src='" + data.people[i].imageURL + "'>");
        $el.append("<div class='deleteButton btn btn-danger'>Delete</div>");
    }
}