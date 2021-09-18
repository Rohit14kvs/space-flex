const auth = "MFdCH7ZORiRbhucD5T1sleJYWrtGbKbg6J9BnBIV";
const imageCard = document.querySelector(".picture-card");
const moreBtn = document.querySelector(".more-btn");

moreBtn.addEventListener("click", fetchAPI);

async function fetchAPI() {
  const link = `https://api.nasa.gov/planetary/apod?api_key=${auth}&count=12`;
  const response = await fetch(link);
  const data = await response.json();
//   console.log(data);
  addPicture(data);

  const like = document.querySelectorAll(".fa-heart");
  const like_array = [...like];
  const readMore = document.querySelectorAll(".read");
  const readMore_array = [...readMore];
  const content = document.querySelectorAll(".img-sec");
  const content_array = [...content];
  const imgDesc = document.querySelectorAll(".img-desc");
  const imgDesc_array = [...imgDesc];

  for (let i = 0; i < like_array.length; i++) {
    like_array[i].addEventListener("click", () => {
      like_array[i].classList.toggle("heart-over");
      console.log(like_array[i]);
    });
  }

  for (let i = 0; i < readMore_array.length; i++) {
    readMore_array[i].addEventListener("click", () => {
      readMore_array[i].classList.add("read-more-hover");
      content_array[i].style.overflow = "scroll";
    });
  }

  for (let i = 0; i < imgDesc_array.length; i++) {
    imgDesc[i].addEventListener("mouseenter", () => {
      readMore_array[i].classList.add("read-more");
    });
    readMore_array[i].addEventListener("mouseenter", () => {
      readMore_array[i].classList.add("read-more");
    });
    readMore_array[i].addEventListener("mouseleave", () => {
      readMore_array[i].classList.remove("read-more");
    });
    imgDesc[i].addEventListener("mouseleave", () => {
      readMore_array[i].classList.toggle("read-more");
    });
  }
}

function copyToClipboard(href) {
    const elem = document.createElement('textarea');
    elem.value = href;
    document.body.appendChild(elem);
    elem.select();
    document.execCommand('copy');
    document.body.removeChild(elem);
    alert("Copied To Clipboard");
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
                <div class="img-btns">
                <div class="heart" id="hrt"><i class="fas fa-heart"></i></div>
                <div class="share"><a id="share-url" onclick="copyToClipboard('${data[i].url}')">Share <i class="fas fa-location-arrow"></i></a></div>
                </div>
                <p class="img-desc">${data[i].explanation}</p>
                <div class="read">Read More</div>
                </div>`;
    imageCard.appendChild(Img);
  }
}

fetchAPI();