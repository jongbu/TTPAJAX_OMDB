$(document).ready(function(){
  $("#search").on("submit",function(e){
    e.preventDefault();
    var formData = {
      't': $('input[name=t]').val()
    };
    $.ajax({   
      url: "http://www.omdbapi.com/?",   
      data: formData,   
      dataType: "json",   
      success: function(response) { 
      var artistArray= response.Poster;
            document.getElementById("images").innerHTML=
            "<div class=\"alert alert-success\"><strong>"+response.Title+
            "</strong><br><strong>Director: "+response.Director
            +"</strong><br><strong>Genre: "+response.Genre
            +"</strong><br><strong>Released: "+response.Released+"</strong><br><img src=\""
            +response.Poster+"\" class=\"img-rounded\" alt=\"Cinque Terre\"></div>";
        console.log(response);   
      } 
    
    });
  });
});

function searchMovie(){
  var x = document.getElementById("t");
    var formData = {
      't': $('input[name=t]').val()
    };
    $.ajax({   
      url: "http://www.omdbapi.com/?",   
      data: formData,   
      dataType: "json",   
      success: function(response) { 
      var artistArray= response.Poster; 
            document.getElementById("suggestions").innerHTML="";
            if(response.Poster)
              document.getElementById("suggestions").innerHTML+="<p>"+response.Title+"</p>";
      } 
    
    });
}
