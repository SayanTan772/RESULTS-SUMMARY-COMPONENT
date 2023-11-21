const jsonData = [
    {
      "category": "Reaction",
      "score": 80,
      "icon": "./assets/images/icon-reaction.svg"
    },
    {
      "category": "Memory",
      "score": 92,
      "icon": "./assets/images/icon-memory.svg"
    },
    {
      "category": "Verbal",
      "score": 61,
      "icon": "./assets/images/icon-verbal.svg"
    },
    {
      "category": "Visual",
      "score": 72,
      "icon": "./assets/images/icon-visual.svg"
    }
];

// Actual code starts from here
const average = document.querySelector(".circle .avg");
let sum = 0;

function print() {
  const container = document.querySelector('.list-items');
  let count = 1;
  let color;

  jsonData.forEach(item => {
    const div = document.createElement('div'); // Create a div element for each item
    div.className = 'data-item';

    if (count === 1) {
      color = "hsl(0, 100%, 67%);";
    } else if (count === 2) {
      color = "hsl(39, 100%, 56%)";
    } else if (count === 3) {
      color = "hsl(166, 100%, 37%)";
    } else if (count === 4) {
      color = "hsl(234, 85%, 45%)";
    }

    // Create HTML content for the item
    div.innerHTML = `
    <div style="display:flex;">
      <div class="img-div"><img src="${item.icon}"></div>
      <div class="category" style="color:${color};">${item.category}</div>
    </div>
    
    <div style="display:flex;">
      <div class="score">${item.score}</div>
      <div class="total">/100</div>
    </div>`;

    if (count === 1) {
      div.style.backgroundColor = "hsla(0, 100%, 67%, 0.15)";
    } else if (count === 2) {
      div.style.backgroundColor = "hsla(39, 100%, 56%, 0.15)";
    } else if (count === 3) {
      div.style.backgroundColor = "hsla(166, 100%, 37%, 0.15)";
    } else if (count === 4) {
      div.style.backgroundColor = "hsla(234, 85%, 45%, 0.15)";
    }

    sum += item.score;

    container.appendChild(div); // Append the div to the container
    count ++;
  });
}
print();

const result = Math.floor(sum/4);
average.innerHTML = `${result}`;
