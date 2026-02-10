const form = document.getElementById("form"); // form submit

form.addEventListener("submit", function (event) {
  event.preventDefault(); //prevent the page frpm refreshing
  const firstName = document.getElementById("firstname").value;
  const lastName = document.getElementById("lastname").value;
  const age = document.getElementById("age").value;
  const result = document.getElementById("result");
  if (firstName.length > 5) {
    result.style.color = "green";
  } else {
    result.style.color = "red";
  }
  switch (profession) {
    case "it":
      result.style.backgroundColor = "purple";
      break;
    case "hospitality":
      result.style.backgroundColor = "yellow";
      break;
    default:
      result.style.backgroundColor = "lime";
      break;
  }

  result.innerHTML = `
   <p>First Name: ${firstName} </p>
   <p>Last Name = ${lastName}</p>
   <p> Age : $ {age}  </p>`;
});
