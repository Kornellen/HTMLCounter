const btnNextElem = document.querySelector("#next");
const btnPrevElem = document.querySelector("#prev");
const numberShowElem = document.getElementById("number");

const increaseNumber = () => {
  numberParElem = +numberShowElem.innerText;
  numberParElem++;
  numberShowElem.textContent = `${numberParElem}`;
};

const reduceNumber = () => {
  numberParElem = +numberShowElem.innerText;
  numberParElem--;
  if (numberParElem < 0) {
    numberParElem += 1;
    return numberParElem;
  }
  numberShowElem.textContent = `${numberParElem}`;
};

btnNextElem.addEventListener("click", increaseNumber);
btnPrevElem.addEventListener("click", reduceNumber);
