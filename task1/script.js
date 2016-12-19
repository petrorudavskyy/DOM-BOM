
createForm();
//createform with elements
function createForm() {
    var form = document.createElement("form");
    form.setAttribute("name", "login");
    form.setAttribute("action", "google.com");
    form.setAttribute("onsubmit", "return validateForm()");
    document.body.appendChild(form);
    //description of elements with names and placeholders
    var elements = {
        age: {
            type: 'text',
            name: 'age',
            placeholder: 18 
        },
        username: {
            type: 'text',
            name: 'username',
            placeholder: 'user_name'
        },
        date: {
            type: 'text',
            name: 'date',
            placeholder: '18/12/2016(current date)'
        },
        submit: {
            type: 'submit',
            name: 'validate',
            value: 'Validate Me'
        }
    };
    inputFormElem(form, elements);
}

// input form elements
function inputFormElem(form, formElements) {
    for (var element in formElements) {
        var inputEl = document.createElement('input');
        var elementObject = formElements[element];
        for (var property in elementObject) {
            inputEl.setAttribute(property, elementObject[property]);
        }
        form.appendChild(inputEl);
    }
}

// Validate function
function validateForm() {
    var valid = true;
    var inputElements = document.forms[0].childNodes;
    // validate age
    var age = inputElements[0].value;
    //var pattern = /([0-9])/g;

    //if -> alert
    if (isNaN(age) || age < 1) {
        valid = false;
        alert('Sorry, you enter incorrect age! Please try again.');      
    }
    // validate user name
    var rightName = 'user_';
    var userName = inputElements[1].value;
    //if -> alert
    if (userName.indexOf(rightName) !== 0) {
        alert('Sorry, you enter incorrect username, it has begin with "user_"');
        valid = false;
    }
    // validate current date
    var currentDate = moment().format('DD/MM/YYYY');
    var formDate = inputElements[2].value;
    //if -> alert
    if (formDate !== currentDate) {
        alert('Sorry, you enter incorrect data! Please try again.');
        valid = false;
    }
    return valid;
}