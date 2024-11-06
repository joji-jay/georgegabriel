function signUp() {
 const section = document.getElementById("alert");
 const name = document.getElementById("sign-in-name").value;
 const email = document.getElementById("email").value;
 const address = document.getElementById("address").value;

 section.innerText = name + " "+ email + " "+ address + " "+ "Registration successful.";
}
function checkList() {
  const vog = document.querySelectorAll("li");
  
  console.log(vog[0].innerText + "\n" + vog[1].innerText + "\n" + vog[2].innerText + "\n" + vog[3].innerText + "\n" + vog[4].innerText);
}
const element = document.getElementById("message").innerHTML;
console.log(element);
element = "No message"
