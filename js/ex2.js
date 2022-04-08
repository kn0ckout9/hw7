// Country list
const countryList = [
    "Afghanistan",
    "Albania",
    "Algeria",
    "Andorra",
    "Angola",
    "Anguilla",
    "Antarctica",
    "Antigua-and-Barbuda",
    "Argentina",
    "Armenia",
    "Aruba",
    "Australia",
    "Autria",
    "Azerbaïjan"
  ];

const country = "Afghanistan";
// Grab the input element
const countryElement = document.getElementById("country");

// Grab the existing div
const suggestionsElement = document.getElementById("suggestions");
// console.log(suggestionsElement)
const stuff = document.createElement("div");

countryElement.addEventListener("keydown", e => {
    //countryElement.appendChild(suggestionsElement);
    //document.getElementById("suggestions").textContent = "Enter a unique username!";
    //document.getElementById("suggestions").textContent = countryList;
    
    const inputvalue = e.target.value;
    stuff.textContent = "";

    for(let i=0;i<countryList.length;i++) {
      
      if (countryList[i].startsWith(inputvalue)) {
        stuff.textContent = countryList[i]
        document.getElementById("suggestions").append(stuff)
      }

    }
});
