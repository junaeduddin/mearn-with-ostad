
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
    
    // Age Calculation
    let dob = document.getElementById("dob").value;

      if (!dob) {
        document.getElementById("result").innerText = "⚠️ Please select your date of birth!";
        return;
      }

     

let dobDate = new Date(dob);
let today = new Date();

let ageYears = today.getFullYear() - dobDate.getFullYear();
let ageMonths = today.getMonth() - dobDate.getMonth();
let ageDays = today.getDate() - dobDate.getDate();

// === Days adjust ===
if (ageDays < 0) {
  // আগের মাসের মোট দিন বের করবো
  let prevMonthDays = new Date(today.getFullYear(), today.getMonth(), 0).getDate();
  ageDays += prevMonthDays;
  ageMonths--; // এক মাস কমে যাবে
}

// === Months adjust ===
if (ageMonths < 0) {
  ageMonths += 12;
  ageYears--; // এক বছর কমে যাবে
}

let fullAge = `${ageYears}Years, ${ageMonths}Months, ${ageDays}Days.`;

      document.getElementById("result").innerText = `Hi ${firstName} 🎂 Your Age is: ${fullAge}`;
   
    
   
    let li = document.createElement("li");
      li.innerText = `${fullName} - Age: ${fullAge}`;
      document.getElementById("nameList").appendChild(li);
    
    // Clear input fields after submission
    
    document.getElementById("firstName").value = "";
    document.getElementById("lastName").value = "";
    document.getElementById("firstName").focus();
    document.getElementById("dob").value = "";
    
} 


