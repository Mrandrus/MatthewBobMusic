const divElements = () => {
  const getDiv = document.getElementById("createMultiple");

  const peen = document.createElement("div");
  peen.id = "peenOne";
  getDiv.appendChild(peen);

  const peeen = document.createElement("div");
  peeen.id = "peenTwo";
  peen.appendChild(peeen);
  const lilPeen = document.createElement("p");
  lilPeen.innerText = "Look man I'm just testing something.";
  peeen.appendChild(lilPeen);

  console.log("You got me");

  // const checkText = document.createElement("p");
  // checkText.innerHTML = "Get wrecked bro!"
  // document.getElementById("check").appendChild(checkText);

  // // Create element:
  // const para = document.createElement("p");
  // para.innerHTML = "This is a paragraph.";

  // // Append to another element:
  // document.getElementById("myDIV").appendChild(para);
};

const stuff = [0,1,4,8,4,6,89,54,34,56,23,15,33];

const sortItems = (x) => {
    const lol = document.getElementById("check")
    const lolCheck = x.sort((a, b) => a - b)

    const lolText = document.createElement("p")
    lolText.innerText = lolCheck

    lol.appendChild(lolText)
}

sortItems(stuff)
