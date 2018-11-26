// CSD 122 Ajax Example - Nat Ballou
$(document).ready(function(){
  $("#button1").click(function(){
    $("#section1").load("demo_test.txt", function(responseTxt, statusTxt, xhr){
      if(statusTxt == "success")
        alert("External content loaded successfully!");
      else alert("Error: " + xhr.status + ": " + xhr.statusText);

      console.log(responseTxt);
      console.log(statusTxt);
      console.log(xhr);
    });
  });

  $("#getButton").click(function() {
    $.get("https://natba.github.io/AjaxExample/demo_test.asp", 
          function(data, status){
            $("#section2").html(data);
	  });
    });

    $("#postButton").click(function(){
      $.post("https://natba.github.io/AjaxExample/demo_test_post.asp", 
             {
              name: "Donald Duck",
              city: "Duckburg"
             }, 
	     function(data, status){
               alert("Data: " + data + "\nStatus: " + status);
             });
    });
});
