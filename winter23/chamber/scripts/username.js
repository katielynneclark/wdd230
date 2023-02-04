const un1 = document.querySelector("username1");
const un2 = document.querySelector("username2");

const message = document.querySelector("formmessage");

un2.addEventListener("focus out", checkSame);

function checkSame() {
    if (un1.value !== un2.value) {
        message.textContent = "Usernames do not match!";
        message.style.display = "block";

        un2.style.backgroundColor = "#aa3333";
        un2.style.color = '#fff';
        un2.focus ();
        un2.value = "";
    } else {
        message.style.display = "none";
        un2.style.backgroundColor = "#fff";
        un2.style.color = "#000";
    }
}