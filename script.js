$(document).ready(function(){
  $("#search").on("submit",function(e){
    e.preventDefault();
    document.getElementById("images").innerHTML="";
    var formData = {
      's': $('input[name=s]').val(),
      'type': 'movie'
    };
    $.ajax({   
      url: "http://www.omdbapi.com/?",   
      data: formData,   
      dataType: "json",   
      success: function(response) { 

      for(i=0;i<response.Search.length;i++){
            document.getElementById("images").innerHTML+=
            "<div class=\"alert alert-success\"><strong>"+response.Search[i].Title+
            "</strong><br><strong>Year: "+response.Search[i].Year
            +"</strong><br><strong>Imdb Id: "+response.Search[i].imdbID
            +"</strong><br><strong>Imdb Rating: "+response.Search[i].imdbRating
            +"</strong><br><strong>Released: "+response.Search[i].Released+"</strong><br><img src=\""
            +response.Search[i].Poster+"\" class=\"img-rounded\" alt=\"Cinque Terre\"></div>";
        console.log(response.Search[i]); 
      }
      } 
    
    });
  });
});

function searchMovie(){
  document.getElementById("suggestions").innerHTML="";
    var formData = {
      's': $('input[name=s]').val(),
      'type': 'movie'
    };
    $.ajax({   
      url: "http://www.omdbapi.com/?",   
      data: formData,   
      dataType: "json",   
      success: function(response) { 
      for(i=0;i<response.Search.length;i++){
            document.getElementById("suggestions").innerHTML+=
            "<button type=\"button\" class=\"btn btn-default\" id=\""+response.Search[i].imdbID+"\" onClick=\"selectText(this.id)\">"+response.Search[i].Title+"</button>";
      }
      } 
    
    });
}

function selectText(currID){
  document.getElementById("s").value=document.getElementById(currID).innerHTML;
}