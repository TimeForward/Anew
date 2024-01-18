document.getElementById("generateBtn").addEventListener("click", function(){
  // Make an AJAX request to the server to generate a random quote via PHP script
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "generate_fortune.php", true);
  xhr.onreadystatechange = function(){
    if(xhr.readyState == 4 && xhr.status == 200){
      // Update the quote element with the new quote
      document.getElementById("fortune").innerText = xhr.responseText;
    }
  };
  xhr.send();
});