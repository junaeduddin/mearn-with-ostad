
  function showFullName() {
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    
    if (firstName === "" || lastName === "") {
  document.getElementById("firstName").style.border = "2px solid red";
  document.getElementById("lastName").style.border = "2px solid red";
  return;
} else {
  document.getElementById("firstName").style.border = "";
  document.getElementById("lastName").style.border = "";
}
    
    let fullName = `${firstName}  ${lastName}`;
    
   
    
   
    let li = document.createElement("li");
      li.innerText = fullName;
      document.getElementById("nameList").appendChild(li);
    
    // Clear input fields after submission
    
    document.getElementById("firstName").value = "";
    document.getElementById("lastName").value = "";
    document.getElementById("firstName").focus();
    
    
} 
