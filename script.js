let nameContainer = document.querySelector('.name_container');
let numberContainer = document.querySelector('.number_container');
let emailContainer = document.querySelector('.email_container');
let messageContainer = document.querySelector('.message_container');
let cont1 = document.querySelector('.user_name');
let cont2 = document.querySelector('.user_number');
let cont3 = document.querySelector('.user_email');
let cont4 = document.querySelector('.user_message');
let p = document.createElement('p');
const subButton = document.querySelector(".submit_button");


subButton.addEventListener('click', submitButtonClicked);

function submitButtonClicked()
{
    
}

const database = firebase.database().ref();

database.on('child_added', onClick);


function onClick(data)
{
    {
        let value = data.val();
            
        let name = value.name;
        let pNumber = value.number;
        let email = value.email;
        let message = value.message;
        let namelinebreak = document.createElement("br");
        let numberlinebreak = document.createElement("br");
        let emaillinebreak = document.createElement("br");
        let messagelinebreak = document.createElement("br");

        nameContainer.append(value.name);
        nameContainer.appendChild(namelinebreak);

        numberContainer.append(value.number);
        numberContainer.appendChild(numberlinebreak);

        emailContainer.append(value.email);
        emailContainer.appendChild(emaillinebreak);

        messageContainer.append(value.message);
        messageContainer.appendChild(messagelinebreak);
    }
}

/*function addMessage(data)
{
    let value = data.val();
    let name = value.name;
    let message = value.message;

    let h3 = document.createElement('h3');
    h3.innerText = name;
    nameVar.appendChild(h3);

    let p = document.createElement('p');
    p.innerText = message;
    messageVar.appendChild(p);
}*/