$(document).ready(function(){
  $("#search").on("submit",function(e){
    e.preventDefault();
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
  });
});

function searchMovie(){
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
