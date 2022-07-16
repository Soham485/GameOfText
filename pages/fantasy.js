const textElement = document.getElementById("text");
const optionButtonsElement = document.getElementById("option-buttons");

let state = {};

function startGame() {
  state = {};
  showTextNode(1);
}

function showTextNode(textNodeIndex) {
  const textNode = textNodes.find((textNode) => textNode.id === textNodeIndex);
  textElement.innerHTML = textNode.text;

  while (optionButtonsElement.firstChild) {
    optionButtonsElement.removeChild(optionButtonsElement.firstChild);
  }

  textNode.options.forEach((option) => {
    if (showOption(option)) {
      const button = document.createElement("button");
      button.innerText = option.text;
      button.classList.add("btn");
      button.addEventListener("click", () => selectOption(option));
      optionButtonsElement.appendChild(button);
    }
  });
}

function showOption(option) {
  return option.requiredState == null || option.requiredState(state);
}

function selectOption(option) {
  const nextTextNodeId = option.nextText;
  if (nextTextNodeId <= 0) {
    startGame();
  }
  state = Object.assign(state, option.setState);
  showTextNode(nextTextNodeId);
}

const textNodes = [
  {
    id: 1,
    text: "You see a sword beside you...",
    options: [
      { text: "Take it", setState: { sword: true }, nextText: 2 },
      { text: "Leave it", nextText: 2 },
    ],
  },
  {
    id: 2,
    text: "You open a strange door and find yourself in a world, which is weirdly beautiful.",
    options: [
      {
        text: "You ask people where you are",
        setState: { friends: true },
        nextText: 3,
      },
      {
        text: "You explore the world",
        setState: { knowledge: true },
        nextText: 4,
      },
    ],
  },
  {
    id: 3,
    text: "You learn that you're in a world where almost anything is possible, where magic is common, and spells are used normally",
    options: [
      {
        text: "You explore the world since you're fascinated and very curious about this fantasy world",
        setState: { caution: true },
        nextText: 4,
      },
      { text: "You go to a school to start studying about magic", nextText: 5 },
    ],
  },
  {
    id: 4,
    text: "You learn that this world... is going to be in attack with another world from a different realm...",
    options: [
      {
        text: "You get ready to fight since you want to be a hero",
        requiredState: (currentState) => currentState.sword,
        nextText: 6,
      },
      { text: "You hide", nextText: 7 },
    ],
  },
  {
    id: 5,
    text: "There is an emergency announcement at the school...",
    options: [{ text: "...", nextText: 4 }],
  },
  {
    id: 6,
    text: "You WIN the fight and become a HERO!",
    options: [{ text: "Play again", nextText: 0 }],
  },
  {
    id: 7,
    text: "The monsters from the other world win and kill everyone including you",
    options: [{ text: "Restart", nextText: 0 }],
  },
];

startGame();
