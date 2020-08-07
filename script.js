$(document).ready(function(){
    $("#go").click(function(event){
        event.preventDefault();
        var movie = $("#moviething").val().trim()
        var queryURL = "https://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=trilogy";
        $.ajax({
            url: queryURL,
            method: 'GET'
        }).then(function(response){
            console.log(response)
            $(".mvtitle").text(response.Title)
            // $(".mvtitle").addClass(response.Title)
            $(".mvsummary").text(response.Plot)
            $(".mvactors").text(response.Actors)
            $(".mvdirector").text(response.Director)
            $(".mvrating").text(response.Rated)
            $(".mvposter").attr('src', response.Poster)
        })
    
    })


})
