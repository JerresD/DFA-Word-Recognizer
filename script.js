// DFA
const findPlaces = (text) => {
    let state = 0;
    const positions = {
      Malaysia: [],
      Singapore: [],
      British: [],
      KualaLumpur: [],
      Status: false,
    };
  
    for (let i = 0; i < text.length; i++) {
      const char = text[i];

      switch (state) {
        case 0:
          if (char === 'M') {
            state = 1;
          } else if (char === 'S') {
            state = 9;
          } else if (char === 'B') {
            state = 18;
          } else if (char === 'K') {
            state = 25;
          }
          break;
        case 1:
          if (char === 'a') {
            state = 2;
          } else if (char !== 'M') {
            state = 0;
          }
          break;
        case 2:
          if (char === 'l') {
            state = 3;
          } else if (char === 'M') {
            state = 1;
          } else {
            state = 0;
          }
          break;
        case 3:
          if (char === 'a') {
            state = 4;
          } else if (char === 'M') {
            state = 1;
          } else {
            state = 0;
          }
          break;
        case 4:
          if (char === 'y') {
            state = 5;
          } else if (char === 'M') {
            state = 1;
          } else {
            state = 0;
          }
          break;
        case 5:
          if (char === 's') {
            state = 6;
          } else if (char === 'M') {
            state = 1;
          } else {
            state = 0;
          }
          break;
        case 6:
          if (char === 'i') {
            state = 7;
          } else if (char === 'M') {
            state = 1;
          } else {
            state = 0;
          }
          break;
        case 7:
          if (char === 'a') {
            state = 8;
            positions.Malaysia.push(i - 6); // Save the starting position of the match
            positions.Status = true;
          } else if (char === 'M') {
            state = 1;
          } else {
            state = 0;
          }
          break;
        case 8: //accepting state for Malaysia
          state = 0;
          break;
        case 9:
          if (char === 'i') {
            state = 10;
          } else if (char !== 'S') {
            state = 0;
          }
          break;
        case 10:
          if (char === 'n') {
            state = 11;
          } else if (char === 'S') {
            state = 9;
          } else {
            state = 0;
          }
          break;
        case 11:
          if (char === 'g') {
            state = 12;
          } else if (char === 'S') {
            state = 9;
          } else {
            state = 0;
          }
          break;
        case 12:
          if (char === 'a') {
            state = 13;
          } else if (char === 'S') {
            state = 9;
          } else {
            state = 0;
          }
          break;
        case 13:
          if (char === 'p') {
            state = 14;
          } else if (char === 'S') {
            state = 9;
          } else {
            state = 0;
          }
          break;
        case 14:
          if (char === 'o') {
            state = 15;
          } else if (char === 'S') {
            state = 9;
          } else {
            state = 0;
          }
          break;
        case 15:
          if (char === 'r') {
            state = 16;
          } else if (char === 'S') {
            state = 9;
          } else {
            state = 0;
          }
          break;
        case 16:
          if (char === 'e') {
            state = 17;
            positions.Singapore.push(i - 7); // Save the starting position of the match
            positions.Status = true;
          } else if (char === 'S') {
            state = 9;
          } else {
            state = 0;
          }
          break;
        case 17: //accepting state for Singapore
          state = 0;
          break;
        case 18:
          if (char === 'r') {
            state = 19;
          } else if (char !== 'B') {
            state = 0;
          }
          break;
        case 19:
          if (char === 'i') {
            state = 20;
          } else if (char === 'B') {
            state = 18;
          } else {
            state = 0;
          }
          break;
        case 20:
          if (char === 't') {
            state = 21;
          } else if (char === 'B') {
            state = 18;
          } else {
            state = 0;
          }
          break;
        case 21:
          if (char === 'i') {
            state = 22;
          } else if (char === 'B') {
            state = 18;
          } else {
            state = 0;
          }
          break;
        case 22:
          if (char === 's') {
            state = 23;
          } else if (char === 'B') {
            state = 18;
          } else {
            state = 0;
          }
          break;
        case 23:
          if (char === 'h') {
            state = 24;
            positions.British.push(i - 5); // Save the starting position of the match
            positions.Status = true;
          } else if (char === 'B') {
            state = 18;
          } else {
            state = 0;
          }
          break;
        case 24: //accepting state for British
          state = 0;
          break;
        case 25:
          if (char === 'u') {
            state = 26;
          } else if (char !== 'K') {
            state = 0;
          }
          break;
        case 26:
          if (char === 'a') {
            state = 27;
          } else if (char === 'K') {
            state = 25;
          } else {
            state = 0;
          }
          break;
        case 27:
          if (char === 'l') {
            state = 28;
          } else if (char === 'K') {
            state = 25;
          } else {
            state = 0;
          }
          break;
        case 28:
          if (char === 'a') {
            state = 29;
          } else if (char === 'K') {
            state = 25;
          } else {
            state = 0;
          }
          break;
        case 29:
          if (char === ' ') {
            state = 30;
          } else if (char === 'K') {
            state = 25;
          } else {
            state = 0;
          }
          break;
        case 30:
          if (char === 'L') {
            state = 31;
          } else if (char === 'K') {
            state = 25;
          } else {
            state = 0;
          }
          break;
        case 31:
          if (char === 'u') {
            state = 32;
          } else if (char === 'K') {
            state = 25;
          } else {
            state = 0;
          }
          break;
        case 32:
          if (char === 'm') {
            state = 33;
          } else if (char === 'K') {
            state = 25;
          } else {
            state = 0;
          }
          break;
        case 33:
          if (char === 'p') {
            state = 34;
          } else if (char === 'K') {
            state = 25;
          } else {
            state = 0;
          }
          break;
        case 34:
          if (char === 'u') {
            state = 35;
          } else if (char === 'K') {
            state = 25;
          } else {
            state = 0;
          }
          break;
        case 35:
          if (char === 'r') {
            state = 36;
            positions.KualaLumpur.push(i - 10); // Save the starting position of the match
            positions.Status = true;
          } else if (char === 'K') {
            state = 25;
          } else {
            state = 0;
          }
          break;
        case 36: //accepting state for Kuala Lumpur
            state = 0;
            break;
        default:
            state = 0;
        }
    }

    return positions;
    };

// Import and read text
const fileIn = document.getElementById("readFile");
const textField = document.getElementById("textField");

fileIn.addEventListener("change", (event) => {
  const file = event.target.files[0];
  const reader = new FileReader(); 

  reader.onload = (event) => {
    textField.value = event.target.result;
  };
  reader.readAsText(file);
});


//Run text
function getText() {
  const textw = document.getElementById("textField").value;
  const texts = textw.split("\n").flatMap((textw) => textw.split(". "));
  let positions = [];

  for (let i = 0; i < texts.length; i++) {
    const position = findPlaces(texts[i]);
    positions.push(position);
    console.log("line " + i + ": " + texts[i])
    console.log(position); 
  }

  // change patterns found into given style
  const wordsToHighlight = [
    { word: "Malaysia", color: "#1e02ba" },
    { word: "Singapore", color: "#ba020e" },
    { word: "British", color: "#04c71e" },
    { word: "Kuala Lumpur", color: "#000000" }
  ];
  let boldTexts = texts.map((text) => {
    wordsToHighlight.forEach((highlight) => {
      const { word, color } = highlight;
      const tag = `<span style="color:${color}; font-weight:bold;">${word}</span>`;
      text = text.replace(new RegExp(word, 'g'), tag);
    });
    return text;
  });
  
  // Output results
  document.getElementById("text-array").innerHTML = boldTexts.map((text, index) => {
    let positionStr = "";
    const positionObj = positions[index];
    for (const [key, value] of Object.entries(positionObj)) {
      positionStr += `${key}: ${value}<br>`;
    }
    return `<b>Line ${index + 1}:</b> ${text} <br><br> ${positionStr}`;
  }).join("<br><br>");

  //Output occurrence
  const overall = findPlaces(textw);
  const overall2 = Object.entries(overall)
  .filter(([place, occurrences]) => Array.isArray(occurrences))
  .map(([place, occurrences]) => `${place}: ${occurrences.length} `)
  .join('&nbsp&nbsp&nbsp');

  document.getElementById("text-occurence").innerHTML = overall2;

} 