const auth = "MFdCH7ZORiRbhucD5T1sleJYWrtGbKbg6J9BnBIV";

const imageCard = document.querySelector(".picture-card");
const moreBtn = document.querySelector(".more-btn");


moreBtn.addEventListener('click', fetchAPI);

async function fetchAPI() {
    const link = `https://api.nasa.gov/planetary/apod?api_key=${auth}&count=10`;
    const response = await fetch(link);
    const data = await response.json();
    console.log(data);
    addPicture(data);
}

function addPicture(data) {
  for (let i = 0; i < data.length; i++) {

    const Img = document.createElement("div");
    Img.classList.add("img-sec");
    Img.innerHTML = `<img src = ${data[i].hdurl}></img>
                <div class="img-info">
                <div class="img-head">
                <div class="img-title">${data[i].title}</div>
                <div class="img-date">${data[i].date}</div>
                </div>
                <p class="img-desc">${data[i].explanation}</p>
                </div>`;
    imageCard.appendChild(Img);
  }
}

fetchAPI();
