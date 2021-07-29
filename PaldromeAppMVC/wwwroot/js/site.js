"use strict"

//gets the element ID
const $ =(id)=> {
    return document.getElementById(id);
}

//check for palindrome
const checkForPalindrome =()=> {

    //regex to check if the user enters only numbers
    var onlyNumbers = /^[0-9]+$/;

    //get the user input
    let userString = $("userString").value;

    if(userString.match(onlyNumbers) || userString == "") {
        $("msg").classList.add("alert-danger");
        $("msg").innerHTML = "Please use a combinations of letters, numbers and symbols.";
    } else {
        //converts the string to lower case
        userString = userString.toLowerCase();

        //regex to remove spaces, symbols
        userString = userString.replace(/[^a-zA-Z]/g, '');

        //the array will hold the string reversed
        let revString = [];

        //reverse the string 
        for(let i = userString.length - 1; i >= 0; i-- ) {
            revString += userString[i];
        }

        if(revString == userString) {
            $("msg").innerHTML = `${userString} is a <strong>Palindrome</strong>.`;
            $("msg").classList.add("alert-success");
            if($("msg").classList.contains("alert-danger")) {
                $("msg").classList.remove("alert-danger");
                $("msg").classList.add("alert-success");
            }
        } else {
            $("msg").innerHTML = `${userString} is not a <strong>Palindrome</strong>.`;
            $("msg").classList.add("alert-danger");
            if($("msg").classList.contains("alert-success")) {
                $("msg").classList.remove("alert-success");
                $("msg").classList.add("alert-danger");
            }
        }
    }
}

window.onload = function() {
    $("check").onclick = function() {
        $("msg").innerHTML = "";

        checkForPalindrome();
        $("userString").value = "";

    }
}