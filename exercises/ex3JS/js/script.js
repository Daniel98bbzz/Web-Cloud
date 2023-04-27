class Box {
  constructor(op, width, height) {
    this.width = width;
    this.height = height;
    this.opacity = op;
    this.letter = this.generateRandomLetter();
    this.isRevealed = false;
    this.boxElement = null;
  }

  generateRandomLetter() {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    return alphabet.charAt(Math.floor(Math.random() * alphabet.length));
  }

  setWidth(width) {
    this.width = width;
  }

  setHeight(height) {
    this.height = height;
  }

  getWidth() {
    return this.width;
  }

  getHeight() {
    return this.height;
  }

  getLetter() {
    return this.letter;
  }

  setLetter(letter) {
    this.letter = letter;
  }

  isMatch(otherBox) {
    return this.letter === otherBox.getLetter();
  }

  markAsMatched() {
    this.boxElement.style.backgroundColor = "green";
  }

  reveal() {
    this.isRevealed = true;
    this.updateBoxElement();
  }

  hide() {
    this.isRevealed = false;
    this.updateBoxElement();
  }

  render() {
    const div = document.createElement("div");
    div.style.width = this.getWidth();
    div.style.height = this.getHeight();
    div.style.backgroundColor = "black";
    div.style.display = "flex";
    div.style.justifyContent = "center";
    div.style.alignItems = "center";
    div.style.marginRight = "132px";
    div.style.marginBottom = "230px";

    const letter = document.createElement("p");
    letter.innerText = this.getLetter();
    letter.style.fontSize = "30px";
    letter.style.color = "white";
    letter.style.opacity = this.isRevealed ? this.opacity : 0;

    div.appendChild(letter);
    this.boxElement = div;
    div.addEventListener("click", () => {
      if (!this.isRevealed) {
        if (!firstBox) {
          firstBox = this;
          this.reveal();
        } else if (!secondBox && firstBox !== this) {
          secondBox = this;
          this.reveal();

          if (this.isMatch(firstBox)) {
            firstBox.markAsMatched();
            secondBox.markAsMatched();
            firstBox = null;
            secondBox = null;
          } else {
            setTimeout(() => {
              firstBox.hide();
              secondBox.hide();
              firstBox = null;
              secondBox = null;
            }, 1000);
          }
        }
      }
    });

    return div;
  }

  updateBoxElement() {
    if (this.boxElement) {
      const letter = this.boxElement.querySelector("p");
      letter.style.opacity = this.isRevealed ? this.opacity : 0;
    }
  }
}

let numBoxes = 0;
let firstBox = null;
let secondBox = null;
let memBoxes = document.querySelector(".mem-boxes");
let blackSquare = document.querySelector(".black-square");

let initialWidth = 40;
let initialHeight = 40;
const sizeIncrement = 20;

blackSquare.onclick = function () {
  for (let i = 0; i < 3; i++) {
    let b = new Box(1, initialWidth + "px", initialHeight + "px");
    let boxElement = b.render();
    memBoxes.appendChild(boxElement);
    initialWidth += sizeIncrement;
    initialHeight += sizeIncrement;
  }
};
