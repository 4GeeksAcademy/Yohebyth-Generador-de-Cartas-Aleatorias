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
    let randomCardValue = values[ramdomFuntion(cardValue.length)];
    let randomCardSuit = suits[ramdomFuntion(cardSuit.length)];

    document.getElementById("cardValue").innerText = randomCardValue;
    document.getElementById("topSuit").innerText = randomCardSuit.symbol;
    document.getElementById("bottomSuit").innerText = randomCardSuit.symbol;

    document.getElementById(
      "topSuit"
    ).className = `suit suit-top ${randomCardSuit.name}`;
    document.getElementById(
      "bottomSuit"
    ).className = `suit suit-bottom ${randomCardSuit.name}`;
    document.getElementById(
      "cardValue"
    ).className = `value ${randomCardSuit.name}`;
  }
  randomCard();
};
