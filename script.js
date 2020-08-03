let name = document.getElementsByClassName("user_name")[0];
let phoneNumber = document.getElementsByClassName("user_number")[0];
let email = document.getElementsByClassName("user_email")[0];
let message = document.getElementsByClassName("user_message")[0];
let nameContainer = document.getElementsByClassName('name_container')[0];
let numberContainer = document.getElementsByClassName('number_container')[0];
let emailContainer = document.getElementsByClassName('email_container')[0];
let messageContainer = document.getElementsByClassName('message_container')[0];
let submitButton = document.querySelector(".submit_button");
let inputContainer = document.querySelector("input");

function onClick(event)
{
    event.preventDefault();
    if (name.value == "" || phoneNumber.value == "" || email.value == "" || message.value == "")
    {
        alert('You missed a field!!!');
    }
    else
    {
        nameContainer.append(name.value);
        numberContainer.append(phoneNumber.value);
        emailContainer.append(email.value);
        messageContainer.append(message.value);
        inputContainer.value = "";
    }
}

submitButton.addEventListener('click', onClick);

/*Uncaught TypeError: nameContainer.appendChild is not a function
    at HTMLButtonElement.clickSubmit (script.js:22)*/