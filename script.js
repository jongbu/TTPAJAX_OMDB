$(document).ready(function(){
  $("#search").on("submit",function(e){
    e.preventDefault();
    document.getElementById("images").innerHTML="<div class=\"panel panel-primary\" style=\"border-color: black\" align=\"center\">"+
    "<div class=\"panel-heading\" style=\"background-color: #222222; border-color: black\">Results</div>";
    var formData = {
      's': $('input[name=s]').val(),
      'type': $("input:radio[name='type']:checked").val()
    };
    $.ajax({   
      url: "http://www.omdbapi.com/?",   
      data: formData,   
      dataType: "json",   
      success: function(response) { 

      for(i=0;i<response.Search.length;i++){
        imdb = "http://www.imdb.com/title/"+response.Search[i].imdbID+"/";
        title = response.Search[i].Title;
        year = response.Search[i].Year;
          rating = response.Search[i].imdbRating;
        released = response.Search[i].Released;
        poster = response.Search[i].Poster;
            document.getElementById("images").innerHTML+=
            "<div class=\"panel-body\" id=\"images\" align=\"center\">"+
            "<div class=\"alert alert-success\"><strong>"+title+
            "</strong><br><strong>Year: "+year
            +"</strong><br><strong>Imdb Rating: "+rating
            +"</strong><br><strong>Released: "+released+"</strong><br>" +
              "<label onclick='openMore(imdb)' style='cursor:pointer'>SEE MORE</label><br><img src=\""
            +response.Search[i].Poster+"\" class=\"img-rounded\" alt=\"Cinque Terre\"></div></div>";
      }
      } 

    });
  });
});

function showSuggestions(){
  document.getElementById("suggestions").innerHTML="";
    var formData = {
      's': $('input[name=s]').val(),
      'type': $("input:radio[name='type']:checked").val()
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

function openMore(imdb) {
  open(imdb);
}
function selectText(currID){
  document.getElementById("s").value=document.getElementById(currID).innerHTML;
      document.getElementById("images").innerHTML="<div class=\"panel panel-primary\" align=\"center\">"+
    "<div class=\"panel-heading\">Results</div>";
    var formData = {
      's': $('input[name=s]').val(),
      'type': $("input:radio[name='type']:checked").val()
    };
    $.ajax({   
      url: "http://www.omdbapi.com/?",   
      data: formData,   
      dataType: "json",   
      success: function(response) { 

      for(i=0;i<response.Search.length;i++){
          imdb_id=response.Search[i].imdbID;
          imdb = "http://www.imdb.com/title/"+imdb_id+"/";
            document.getElementById("images").innerHTML+=
            "<div class=\"panel-body\" id=\"images\" align=\"center\">"+
            "<div class=\"alert alert-success\"><strong>"+response.Search[i].Title+
            "</strong><br><strong>Year: "+response.Search[i].Year
            +"</strong><br><strong>Imdb Rating: "+response.Search[i].imdbRating
            +"</strong><br><strong>Released: "+response.Search[i].Released+"</strong><br>" +
              "<label onclick='openMore(imdb)' style='cursor:pointer'>SEE MORE</label><br><img src=\""
            +response.Search[i].Poster+"\" class=\"img-rounded\" alt=\"Cinque Terre\"></div></div>";
      }
      } 

    });

    var myid="#"+currID;
    $(myid).dialog({ autoOpen: false }); // Initialize dialog plugin
    $(myid).dialog("open"); // Open popup
}
function clear(){
  document.getElementById("images").innerHTML="";
}


