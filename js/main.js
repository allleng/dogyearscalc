function calculateDogYears() {
    let ageInput = document.getElementById("ageInput").value;
    let dogYears = ageInput * 7;
    document.getElementById("dogYears").innerHTML = dogYears;

    fetch("https://api.thedogapi.com/v1/images/search")
    .then(response => response.json())
    .then(data => {
        let img = document.createElement("img");
        img.src = data[0].url;
        document.getElementById("dog-image").innerHTML = "";
        document.getElementById("dog-image").appendChild(img);
    });
 
  }

  function toggleDarkMode() {
    let body = document.body;
    body.classList.toggle("dark-mode");
  }

