const button = document.getElementById("button");
const result = document.getElementById("result");

button.addEventListener("click", (e) => {
  const Name = document.getElementById("Name").value;
  const Height = document.getElementById("Height").value * 0.3048;
  const Weight = document.getElementById("Weight").value;

  const totalHeight = Height * Height;
  const bmi = parseFloat(Weight) / parseFloat(totalHeight);
  const finalBmi = bmi.toFixed(2);

  let text;
  if (finalBmi > 30) {
    text = "considered obese.";
  } else if (finalBmi > 25 && finalBmi < 29.9) {
    text = "considered overweight.";
  } else if (finalBmi > 19 && finalBmi < 24.9) {
    text = "healthy range.";
  } else {
    text = "considered underweight.";
  }

  const h1 = document.createElement("h1");
  h1.innerHTML = `
  <div>
      <p>${Name} , your BMI is ${finalBmi}. It is the ${text}</p>
  </div>`;
  result.appendChild(h1);
});
