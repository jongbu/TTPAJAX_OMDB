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
          imdb_id=response.Search[i].imdbID;
          imdb = "http://www.imdb.com/title/"+imdb_id+"/";
          console.log(imdb);
            document.getElementById("images").innerHTML+=
            "<div class=\"alert alert-success\"><strong>"+response.Search[i].Title+
            "</strong><br><strong>Year: "+response.Search[i].Year
            +"</strong><br><strong>Released: "+response.Search[i].Released+"</strong><br>" +
              "<label onclick='imdb' style='cursor:pointer'>SEE TRAILER</label><br><img src=\""
            +response.Search[i].Poster+"\" class=\"img-rounded\" alt=\"Cinque Terre\"></div>";
        console.log(response.Search[i]);   
      }
      } 

    });
  });
});

function searchMovie(){
  var x = document.getElementById("s");
    var formData = {
      's': $('input[name=s]').val()
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

function openTrailer() {
  alert("Trailer");
}
