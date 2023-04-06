const boxclass = document.querySelector(".boxes");

for (let i = 0; i < 99; i++) {
    const box = document.createElement("div");
box.classList.add("box");
    boxclass.appendChild(box);
    
}
// Define the minimum and maximum animation durations
const minDuration = .4; // seconds
const maxDuration = 3; // seconds
const minDuration2 = 0;
const maxDuration2 = 1.5;
// Get all .boxout elements
const boxOutElements = document.querySelectorAll('.box  ');

// Loop through each element and set a random animation duration
boxOutElements.forEach(element => {
    const duration = Math.random() * (maxDuration2 - minDuration2) + minDuration2;
    
    element.style.animationDelay = duration + 's';
  });
boxOutElements.forEach(element => {
  const duration = Math.random() * (maxDuration - minDuration) + minDuration;
  element.style.animationDuration = duration + 's';

});
const boxnumber = 200*100;
const upperboxes = document.querySelector(".upper-boxes");
console.log(upperboxes);
for (let i = 0; i < boxnumber; i++) {
    const upperbox = document.createElement("div");
    upperbox.classList.add("upper-box");
    upperboxes.appendChild(upperbox);
    
}