$(document).ready(function(){
  $("#search").on("submit",function(e){
    e.preventDefault();
    clear();
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
        released = response.Search[i].Released;
        poster = response.Search[i].Poster;
          document.getElementById("images").innerHTML+=
          "<div class=\"alert alert-success\"><strong>"+title+
          "</strong><br><strong>Year: "+year
          +"</strong><br><strong>Released: "+released+"</strong><br>" +
            "<label onclick='openMore(imdb)' style='cursor:pointer'>SEE MORE</label><br><img src=\""
          +poster+"\" class=\"img-rounded\" alt=\"Cinque Terre\"></div>";
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
}
function clear(){
  document.getElementById("images").innerHTML="";
}
