const celciusInput = document.getElementById("celcius");
const fahreheitInput = document.getElementById("fahreheit");
const kelvinInput = document.getElementById("kelvin");


const inputs = document.getElementsByClassName("input");

for (let i = 0; i < inputs.length; i++) {
  let input = inputs[i];

  input.addEventListener("input", function(e) {
    let value = parseFloat(e.target.value);

    switch (e.target.name) {
      case "celcius":
        fahreheitInput.value = parseFloat((value * 1.8) + 32).toFixed(2);
        kelvinInput.value = value + 273.15;
        break;

      case "fahreheit":
        celciusInput.value = (0.555556)*(value-32);
        kelvinInput.value = ((value - 32) / 1.8) + 273.15;
        break;
    }
  })

}
