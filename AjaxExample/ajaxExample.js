$(document).ready(function(){
  $("#button1").click(function(){
    $("#section1").load("demo_test.txt", function(responseTxt, statusTxt, xhr){
      if(statusTxt == "success")
        alert("External content loaded successfully!");

        if(statusTxt == "error")
         alert("Error: " + xhr.status + ": " + xhr.statusText);
    });
  });

  $("#getButton").click(function() {
    $.get("https://natba.github.io/AjaxExample/demo_test.asp", 
          function(data, status){
            $("#section2").html(data);
	  });
    });

    $("#postButton").click(function(){
      console.log("button2 clicked");
      $.post("demo_test_post.asp", 
             {name: "Donald Duck",
              city: "Duckburg"}, 
	     function(data, status){
               alert("Data: " + data + "\nStatus: " + status);
             });
    });
});
