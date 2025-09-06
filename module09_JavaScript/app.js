
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



function calculateAge() {
      let dob = document.getElementById("dob").value;

      if (!dob) {
        document.getElementById("result").innerText = "⚠️ Please select your date of birth!";
        return;
      }

      let dobDate = new Date(dob);
      let today = new Date();

      let age = today.getFullYear() - dobDate.getFullYear();
      let month = today.getMonth() - dobDate.getMonth();
      let day = today.getDate() - dobDate.getDate();

      // মাস বা দিনের কারণে বয়স adjust করা
      // if (month < 0 || (month === 0 && day < 0)) {
      //   age--;
      // }

      document.getElementById("result").innerText = `🎂 Your Age is: ${age} years ${month} months and ${day} days.`;
    }


