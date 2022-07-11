function hasWhiteSpace(s) {
  return s.indexOf(" ") >= 0;
}

function spouseVisibility() {
  let maritalStatus = document.form.maritalStatus.value;

  if (maritalStatus === "married") {
    document.getElementById("spouseName").disabled = false;
  } else {
    document.getElementById("spouseName").disabled = true;
  }
}

function validateForm() {
  let firstName = document.form.firstName.value;
  let lastName = document.form.lastName.value;
  let gender = document.form.gender.value;
  let maritalStatus = document.form.maritalStatus.value;
  let spouseName = document.form.spouseName.value;
  let otherDetails = document.form.otherDetails.value;
  let terms = document.getElementById("terms").checked;

  const emptyFields = [];
  const whiteSpaces = [];

  if (firstName.length == 0) emptyFields.push("First Name");
  if (lastName.length == 0) emptyFields.push("Last Name");
  if (gender.length == 0) emptyFields.push("Gender");
  if (maritalStatus.length == 0) emptyFields.push("Marital Status");
  if (otherDetails.length == 0) emptyFields.push("Other Details");

  if (hasWhiteSpace(firstName)) whiteSpaces.push("First Name");
  if (hasWhiteSpace(lastName)) whiteSpaces.push("Last Name");
  if (hasWhiteSpace(spouseName)) whiteSpaces.push("Spouse Name");

  if (emptyFields.length > 0 || whiteSpaces.length > 0 || terms === false) {
    let errorMessage = "";

    if (emptyFields.length > 0) {
      for (let i = 0; i < emptyFields.length; i++) {
        if (i !== emptyFields.length - 1) {
          errorMessage += emptyFields[i] + ", ";
        } else {
          errorMessage += emptyFields[i] + " ";
        }
      }
      errorMessage += "should not be empty. ";
    }

    if (whiteSpaces.length > 0) {
      for (let i = 0; i < whiteSpaces.length; i++) {
        if (i !== whiteSpaces.length - 1) {
          errorMessage += whiteSpaces[i] + ", ";
        } else {
          errorMessage += whiteSpaces[i] + " ";
        }
      }
      errorMessage += "should be entered properly. ";
    }

    if (terms === false) {
      errorMessage += "Read and Accept terms and conditions.";
    }

    alert(errorMessage);
    return;
  }

  document.getElementById("form").style.display = "none";
  document.getElementById("finalMessage").style.display = "block";
}
