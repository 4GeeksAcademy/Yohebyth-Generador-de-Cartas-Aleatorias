/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  const cardValue = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
  const cardSuit = [
    { symbol: "♥", name: "hearts" },
    { symbol: "♦", name: "diamonds" },
    { symbol: "♣", name: "clubs" },
    { symbol: "♠", name: "spades" }
  ];
  const ramdomFuntion = lengthParam => {
    return Math.floor(Math.random() * lengthParam);
  };

  function randomCard() {
    let randomCardValue = cardValue[ramdomFuntion(cardValue.length)];
    let randomCardSuit = cardSuit[ramdomFuntion(cardSuit.length)];
    let cardValueJs = document.getElementById("cardValue");
    cardValueJs.innerText = randomCardValue;
    let topSuitJs = document.getElementById("topSuit");
    topSuitJs.innerText = randomCardSuit.symbol;
    let bottomSuitJs = document.getElementById("bottomSuit");
    bottomSuitJs.innerText = randomCardSuit.symbol;
    if (
      randomCardSuit.name === "hearts" ||
      randomCardSuit.name === "diamonds"
    ) {
      topSuitJs.style.color = "red";
      bottomSuitJs.style.color = "red";
    }
  }
  randomCard();
};
