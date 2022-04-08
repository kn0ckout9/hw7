const houses = [
  {
    code: "ST",
    name: "Stark"
  },
  {
    code: "LA",
    name: "Lannister"
  },
  {
    code: "BA",
    name: "Baratheon"
  },
  {
    code: "TA",
    name: "Targaryen"
  }
];

// Return an array of characters belonging to a house
const getCharacters = houseCode => {
  switch (houseCode) {
    case "ST":
      return ["Eddard", "Catelyn", "Robb", "Sansa", "Arya", "Jon Snow"];
    case "LA":
      return ["Tywin", "Cersei", "Jaime", "Tyrion"];
    case "BA":
      return ["Robert", "Stannis", "Renly"];
    case "TA":
      return ["Aerys", "Daenerys", "Viserys"];
    default:
      return []; // Empty array
  }
};

const houseElement = document.getElementById("house");

// Function to create the unordered list from an array unput
const myUL = (array) => {
  // Create the list element:
  const myList = document.createElement('ul');

  for(let i=0; i<array.length; i++){
    // create list item
    const item = document.createElement('li');
    // set list item content
    item.appendChild(document.createTextNode(array[i]));

    // add list item to the list
    myList.appendChild(item);
  }
  // return the list
  return myList;

}


// Show the selected 
document.getElementById("house").addEventListener("change", e => {
  console.log("Chosen house: " + e.target.value);
  let selectedArray = getCharacters(e.target.value)
  document.body.append(myUL(selectedArray))
});

// Test creating a 1 item unordered list
// const olElement = document.createElement("ul");
// const liElement1 = document.createElement("li");
// const text = document.createTextNode(horsecode);
// liElement1.appendChild(text);
// olElement.appendChild(liElement1)

// document.body.append(olElement)

