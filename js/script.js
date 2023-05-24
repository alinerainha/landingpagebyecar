const motorcycle_Card = [
    {
        img: "./img/img-card-1.png",
        heading: "Scooter Elétrica Voltz EV1",
        price: "R$ 619,90",
    },
    {
        img: "./img/img-card-2.png",
        heading: "Honda CB 500X",
        price: "R$ 890,90",
    }
];

let liEls = document.querySelectorAll(".carousel-cards li");
let modalEl = document.querySelector("#modal");
let index = 0;

function show(increase) {
    index = index + increase;
    index = Math.min(Math.max(index, 0), liEls.length - 1);
    liEls[index].scrollIntoView({behavior: "smooth"});
}

setInterval(() => {
    if (index === liEls.length - 1) {
      show(index - 2);
    } else {
      show(index + 1);
    }
  }, 5000);
  
  function showModal(index) {
    modalEl.innerHTML = "";
    modalEl.innerHTML = ` 
    <div class="modal-card">
      <button onclick="closeModal()">
        <img src="./img/close-btn.png" alt="close-button" />
      </button>
      <img src="${motorcycle_Card[index].img}" alt="" />
      <p>
      ${motorcycle_Card[index].heading}
      </p>
      <span>${motorcycle_Card[index].price}</span>
      <button ">Quero Assinar!</button>
    </div>
    `;
    modalEl.style.visibility = "visible";
  }
  
  function closeModal() {
    modalEl.style.visibility = "hidden";
  }