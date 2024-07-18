  
document.getElementById('generateBtn').addEventListener("click", 
function() {
//Make AJAX call to generate random quote
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "https://zenquotes.io/api/quotes/", true);
  xhr.onreadystatechange = function(){
    if(xhr.readyState == 4 && xhr.status == 200)
    {

      var jsonResponse = JSON.parse(xhr.responseText);

      // Access the "content" property
      var contentValue = jsonResponse.content;
      var authorValue = jsonResponse.author;
      document.getElementById("fortune").innerText =contentValue; 
      document.getElementById("fortune").innerText +="\r"+authorValue; 
    }
    
  };
  xhr.send();
});
