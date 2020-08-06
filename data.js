const nameElement = document.querySelector(".user_name");
const phoneNumberElement = document.querySelector(".user_number");
const emailElement = document.querySelector(".user_email");
const messageElement = document.querySelector(".user_message");
const submitButton = document.querySelector(".submit_button");
submitButton.addEventListener("click",updateDB);


function updateDB(event){

    if (cont1.value == "" || cont2.value == "" || cont3.value == "" || cont4.value == "")
        {
            alert("Fill out all requirements!!!");
        }
        else
        {
            const userName = nameElement.value;
            const userNumber = phoneNumberElement.value;
            const userEmail = emailElement.value;
            const userMessage = messageElement.value;
     
            nameElement.value = "";
            phoneNumberElement.value  = "";
            emailElement.value = "";
            messageElement.value = "";

            //Update database here
            let value = 
        {
            name: userName,
            number: userNumber,
            email: userEmail,
            message: userMessage
        }
            database.push(value);
        }
}