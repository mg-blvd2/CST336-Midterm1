function getBookInfo(){
  $.ajax({
    method:"GET",
    url:"https://openlibrary.org/api/books",
    data:{
      "bibkeys" : "ISBN:" + $("#isbnNumber").val(),
      "format" : "json",
      "jscmd" : "data"
    },
    success : function(data){
      addInfo(data[`ISBN:${$("#isbnNumber").val()}`]);
    },
    error: function(error){
      console.log(error);
    }
  })
}

function addInfo(data){
  console.log(data);
  $("#bookInfo").html(`<img class="col-sm-3" src="${data["cover"]["medium"]}">`);
  $("#bookInfo").append('<div class="col-sm-6 infoText">');
  $(".infoText").html(`<p>Title: ${data.title}</p>`);
  $(".infoText").append(`<p>Author: ${data.authors[0].name}</p>`);
  $(".infoText").append(`<p>Publish Year: ${data.publish_data}</p>`);
  $(".infoText").append(`<p>Publisher: ${data.publishers[0].name}</p>`);
  $(".infoText").append(`<p>ISBN: ${$("#isbnNumber").val()}</p>`);
  $(".infoText").append(`<p>Pages: ${data.number_of_pages}</p>`);
  $(".infoText").append("</div>")
}
