function Random() {
  let rnds = Math.floor(Math.random() * 10) + 1;
  return rnds;
}

function randomValue() {
  let qselect = document.querySelectorAll(".test");
  for (let i = 0; i < qselect.length; i++) {
    qselect[i].style.display = "flex";
  }
  let url = "https://swapi.dev/api/people/" + Random();
  fetch(url)
    .then((Response) => Response.json())
    .then((data) => {
      console.log(data);
      displayUser(data);
    });
}

function displayUser(data) {
  const name = document.getElementById("name");
  const height = document.getElementById("height");
  const mass = document.getElementById("mass");
  const hair_color = document.getElementById("hair_color");
  const eye_color = document.getElementById("eye_color");
  const birth_year = document.getElementById("birth_year");
  const gender = document.getElementById("gender");
  const skin_color = document.getElementById("skin_color");

  name.innerText = `${data.name}`;
  height.innerText = `${data.height}`;
  mass.innerText = `${data.mass}`;
  hair_color.innerText = `${data.hair_color}`;
  eye_color.innerText = `${data.eye_color}`;
  birth_year.innerText = `${data.birth_year}`;
  skin_color.innerText = `${data.skin_color}`;
  gender.innerText = `${data.gender}`;
}
