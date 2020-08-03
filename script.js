let name = document.querySelector(".user_name");
let phoneNumber = document.querySelector(".user_number");
let email = document.querySelector(".user_email");
let message = document.querySelector(".user_message");
let nameContainer = document.querySelector('.name_container');
let numberContainer = document.querySelector('.number_container');
let emailContainer = document.querySelector('.email_container');
let messageContainer = document.querySelector('.message_container');
let submitButton = document.querySelector(".submit_button");

function clickSubmit(event)
{
    event.preventDefault();
    if (name.value == "" || phoneNumber.value == "" || email.value == "" || message.value == "")
    {
        alert('You missed a field!!!');
    }
    else
    {
        formContainer.style.display = 'none';
        nameContainer.appendChild(name);
        numberContainer.appendChild(phoneNumber);
        emailContainer.appendChild(email);
        messageContainer.appendChild(message);
    }
}

submitButton.addEventListener('click', clickSubmit);