const header = document.querySelector("header button");

const p = document.querySelector("p");

const draw = document.querySelector(".draw");

const deckID = "c8io9vqe4fd5";

const reset = document.querySelector(".reset");

const startGame = document.querySelector(".start-game");

const shuffle = document.getElementById("shuffle");

let player = document.querySelector(".player");
// console.log(player);

let tableCards = document.querySelectorAll("#table-cards");

let computerCards = document.querySelectorAll("#computer-cards");

let playersCards = document.querySelectorAll("#player-cards");

const piletwo = document.querySelector(".pile-two");

startGame.addEventListener("click", (event) => {
  //   body.rest();
  const api_url = `https://deckofcardsapi.com/api/deck/${deckID}/return/`;
  fetch(api_url)
    .then((response) => response.json())
    .then((json) => {
      //   console.log(json);
    });
});

reset.addEventListener("click", (event) => {
  event.preventDefault();

  const api_url = `https://deckofcardsapi.com/api/deck/${deckID}/return/`;

  fetch(api_url)
    .then((response) => response.json())
    .then((json) => {
      //   console.log(json);
    });

  const api_url_pile = `https://deckofcardsapi.com/api/deck/${deckID}/pile/pile/return/`;

  fetch(api_url_pile)
    .then((response) => response.json())
    .then((json) => {
      //   console.log(json);
    });

  const api_url_pile2 = `https://deckofcardsapi.com/api/deck/${deckID}/pile/piletwo/return/`;

  fetch(api_url_pile2)
    .then((response) => response.json())
    .then((json) => {
      //   console.log(json);
    });

  const api_url_player = `https://deckofcardsapi.com/api/deck/${deckID}/pile/player/return/`;

  fetch(api_url_player)
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
    });
});

shuffle.addEventListener("click", (event) => {
  event.preventDefault();

  const api_url = `https://deckofcardsapi.com/api/deck/${deckID}/shuffle/?remaining=true`;

  fetch(api_url)
    .then((response) => response.json())
    .then((json) => {
      //   console.log(json);
    });
});

draw.addEventListener("click", (event) => {
  event.preventDefault();
  const api_url = `https://deckofcardsapi.com/api/deck/${deckID}/draw/?count=12`;

  fetch(api_url)
    .then((response) => response.json())

    .then((json) => {
      //   console.log(json);

      let drawn1 = document.querySelector("#first");
      let drawn2 = document.querySelector("#second");
      let drawn3 = document.querySelector("#third");
      let drawn4 = document.querySelector("#fourth");
      let drawn5 = document.querySelector("#fifth");
      let drawn6 = document.querySelector("#sixth");
      let drawn7 = document.querySelector("#seventh");
      let drawn8 = document.querySelector("#eighth");
      let drawn9 = document.querySelector("#ninth");
      let drawn10 = document.querySelector("#tenth");
      let drawn11 = document.querySelector("#eleventh");
      let drawn12 = document.querySelector("#twelfth");

      //   console.log(json.cards[0]);
      document.querySelector(
        ".drawn-1"
      ).innerHTML = `<img id=${json.cards[0].code} src=${json.cards[0].image} height="100px" alt="${json.cards[0].value}">`;

      document.querySelector(
        ".drawn-2"
      ).innerHTML = `<img id=${json.cards[1].code} src=${json.cards[1].image} height="100px"  alt="${json.cards[1].value}">`;

      document.querySelector(
        ".drawn-3"
      ).innerHTML = `<img id=${json.cards[2].code} src=${json.cards[2].image} height="100px"  alt="${json.cards[2].value}">`;

      document.querySelector(
        ".drawn-4"
      ).innerHTML = `<img id=${json.cards[3].code} src=${json.cards[3].image} height="100px"  alt="${json.cards[3].value}">`;

      document.querySelector(
        ".drawn-5"
      ).innerHTML = `<img id=${json.cards[4].code} src=${json.cards[4].image} height="100px"  alt="${json.cards[4].value}">`;

      document.querySelector(
        ".drawn-6"
      ).innerHTML = `<img id=${json.cards[5].code} src=${json.cards[5].image} height="100px"  alt="${json.cards[5].value}">`;

      document.querySelector(
        ".drawn-7"
      ).innerHTML = `<img id=${json.cards[6].code} src=${json.cards[6].image} height="100px"  alt="${json.cards[6].value}">`;

      document.querySelector(
        ".drawn-8"
      ).innerHTML = `<img id=${json.cards[7].code} src=${json.cards[7].image} height="100px"  alt="${json.cards[7].value}">`;

      document.querySelector(
        ".drawn-9"
      ).innerHTML = `<img id=${json.cards[8].code} src="./Assets/back-of-card.png" height="100px"  alt="${json.cards[8].value}">`;

      document.querySelector(
        ".drawn-10"
      ).innerHTML = `<img id=${json.cards[9].code} src="./Assets/back-of-card.png" height="100px"  alt="${json.cards[9].value}">`;

      document.querySelector(
        ".drawn-11"
      ).innerHTML = `<img id=${json.cards[10].code}" src="./Assets/back-of-card.png" height="100px"  alt="${json.cards[10].value}">`;

      document.querySelector(
        ".drawn-12"
      ).innerHTML = `<img id=${json.cards[11].code} src="./Assets/back-of-card.png" height="100px"  alt="${json.cards[11].value}">`;
    });
});

// gamePlay(playersCards);
// gamePlay(computerCards);

// gamePlay(playersCards);

// let result =
// playersTurn(playersCards);
// console.log(result);

// gamePlay(tablesTurnSuit());
// playersTurnSuit();

function playersTurnSuit(table) {
  table = playersCards;
  //   let tableinfo;
  let suit;
  //   let value;
  for (let card of table) {
    card.addEventListener("click", () => {
      suit = card.querySelector("img").id;
      //   value = card.querySelector("img").alt;

      //   tableinfo = {
      //     ["suit"]: `${suit}`,
      //     ["value"]: `${value}`,
      //   };

      //   console.log(tableInfo);
      //   console.log(tableinfo);
      //   return tableinfo;
      //   console.log(suit);
      return suit;
    });
    // console.log(suit);
    // console.log(tableInfo); => undefined
  }
  //   return suit;
}

// tablesTurn();
// let result = tablesTurn();
// console.log(result);

function tablesTurnSuit(table) {
  table = tableCards;
  //   let tableinfo;
  let suit;
  //   let value;
  for (let card of table) {
    card.addEventListener("click", () => {
      suit = card.querySelector("img").id;
      //   value = card.querySelector("img").alt;

      //   tableinfo = {
      //     ["suit"]: `${suit}`,
      //     ["value"]: `${value}`,
      //   };

      //   console.log(tableInfo);
      //   console.log(tableinfo);
      //   return tableinfo;
      //   console.log(suit);
      return suit;
    });
    // console.log(suit);
    // console.log(tableInfo); => undefined
  }
  //   return suit;
}

function testing() {
  for (let card of table) {
    card.addEventListener("click", () => {
      suit = card.querySelector("img").id;
      value = card.querySelector("img").alt;

      return suit;
    });
  }
}

// gamePlay();

// testing()

// function testing() {

// }

// function tablesTurnValue(table = tableCards) {
//   let tableInfo;
//   for (let card of table) {
//     card.addEventListener("click", () => {
//       let suit = card.querySelector("img").id;
//       let value = card.querySelector("img").alt;

//       tableInfo = {
//         ["suit"]: `${suit}`,
//         ["value"]: `${value}`,
//       };

//       //   console.log(tableInfo);
//       return tableInfo;
//     });
//     // console.log(tableInfo); => undefined
//   }
// }

// currently dont know where to put it just figuring out the logistics
// ADD THIS TO THE PLAYERS AND/OR COMPUTER THIS WILL ALLOW YOU TO PUT IN EVERY INDIVUAL CARD
function playersPile(card1, card2) {
  const api_url_pile = `https://deckofcardsapi.com/api/deck/${deckID}/pile/player/add/?cards=${
    (card1, card2)
  }`;
  fetch(api_url_pile)
    .then((response) => response.json())
    .then((json) => {
      //   console.log(json.piles);

      document.getElementById(
        "pile-two-count"
      ).innerHTML = `Count: ${json.piles.player.remaining}`;
    });

  const api_url_listing = `https://deckofcardsapi.com/api/deck/${deckID}/pile/player/list/`;

  fetch(api_url_listing)
    .then((response) => response.json())
    .then((json) => {
      console.log(json);

      document.getElementById(
        "pile-two-cards"
      ).innerHTML = `<img src="./Assets/back-of-card.png" height="100px"></img>`;
    });
}

function computersPile() {
  {
    const api_url_pile = `https://deckofcardsapi.com/api/deck/${deckID}/pile/computer/add/?cards=${card}`;
    fetch(api_url_pile)
      .then((response) => response.json())
      .then((json) => {
        //   console.log(json.piles);

        document.getElementById(
          "pile-one-count"
        ).innerHTML = `Count: ${json.piles.computer.remaining}`;
      });

    const api_url_listing = `https://deckofcardsapi.com/api/deck/${deckID}/pile/computer/list/`;

    fetch(api_url_listing)
      .then((response) => response.json())
      .then((json) => {
        console.log(json);

        document.getElementById(
          "pile-one-card"
        ).innerHTML = `<img src="./Assets/back-of-card.png" height="100px" alt=${json}></img>`;
      });
  }
}

// card.addEventListener("click", () => {
// gamePlay(playersCards);

// hand = playersTurn(playersCards);

function gamePlay(table, hand) {
  table = tablesTurnSuit();
  hand = playersTurnSuit();

  console.log("hello");
  //   let tableInfo = tablesTurn();
  //   let handInfo = playersTurn(hand);
  //   console.log(hand);
  //   console.log(table);
  if (hand === table) {
    // playersPile(table);
    console.log("hello");
  } else {
    console.log("no");
  }
}
// });

//   for (let card of tableCards) {
//     card.addEventListener("click", () => {
//       let suit = card.querySelector("img").id;
//       let value = card.querySelector("img").alt;

//       let tableInfo = {
//         suit: `${suit}`,
//         value: `${value}`,
//       };

//       console.log(tableInfo);
//       return tableInfo;
//     });
//     return tableInfo;
//   }

//   for (let card of hand) {
//     card.addEventListener("click", () => {
//       let suit = card.querySelector("img").id;
//       let value = card.querySelector("img").alt;

//       let handInfo = {
//         suit: `${suit}`,
//         value: `${value}`,
//       };

//       console.log(handInfo);
//       return handInfo;
//     });
//   }

// THIS FUNCTION RETURNS THE CARDS VALUE

//  DEAD CODE

// async function getData() {
//   const url = "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1";

//   const response = await fetch(url);

//   const data = await response.json();
// }

// function playersTurn(hand) {
//   let suit;
//   //   this is the suit
//   let value;
//   //   this is its number
//   let handInfo = {
//     ["suit"]: `${suit}`,
//     ["value"]: `${value}`,
//   };
//   //   this is the object that holds both information

//   for (let card of hand) {
//     // iterating through the hand which is => playersCards
//     card.addEventListener("click", () => {
//       // it iterates through all of the cards until it reaches the one that was clicked
//       suit = card.querySelector("img").id;
//       //   this is how i access the suit
//       value = card.querySelector("img").alt;
//       //   this is how i access the number
//       //   return suit;
//       return handInfo;
//       // console.log(handInfo);
//     });
//     // console.log(handInfo);
//   }
//   //   this is how i am accessing each indivual card that is clicked on
// }
