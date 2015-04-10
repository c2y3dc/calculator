$(document).ready(function(){
    $('.key').click(function(){
        var output = $('.screen').text();
        output += $(this).text();
        $('.screen').text(output);
    });

    $(".del").click(function(){
        $('.screen').text("");
    })

    var $search = $('.search');

    $search.keypress(function(event) {
        if(event.which === 13) {
            event.preventDefault();
            alert($search.val());
            var value = JSON.stringify($search.val());
            $search.val("");
            $.ajax({
                method: "POST",
                url: "some.text",
                data: value
            }).done(function(e){
                console.log("sent!");
            })
        }
    });

    $(".form2").submit(function(e){
        e.preventDefault();
        var name = $(".name").val();
        var text = $(".comment").val();
        var output = JSON.stringify({name: text});

        alert(name +text);
        $.ajax({
            method: "POST",
            url: "www.google.com",
            data: output
        }).done(function(e){
            console.log("sent form2")
        });
    });

    $(".s").click(function(){
        var color = $(this).css("background-color");
        var r = Math.floor(Math.random()*256);
        var g = Math.floor(Math.random()*256);
        var b = Math.floor(Math.random()*256);
        var now = "rgb("+r+", "+g+", "+b+")";
        $(this).css("background-color", now);
        $(".sContainer span").html("That div was <br><span style='background-color:"+color+";'>"+color+"</span>.<br>"+"<span>and is now:<br></span><span style='background-color:"+now+";'>"+now+"</span>.");

        // setTimeout(function(){
        //     $(this).css("background-color", original);
        // }, 1000).bind(this);
    });

});