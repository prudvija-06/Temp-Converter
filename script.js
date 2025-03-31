function convertTemp() {
  const temp = parseFloat(document.getElementById('temp').value);
  const fromUnit = document.getElementById('from-unit').value;
  const toUnit = document.getElementById('to-unit').value;
  let result;

  if (isNaN(temp)) {
      alert("Please enter a valid temperature!");
      return;
  }

  // Celsius conversions
  if (fromUnit === "celsius") {
      if (toUnit === "fahrenheit") {
          result = (temp * 9/5) + 32;
      } else if (toUnit === "kelvin") {
          result = temp + 273.15;
      } else {
          result = temp;  // same unit
      }
  }

  // Fahrenheit conversions
  if (fromUnit === "fahrenheit") {
      if (toUnit === "celsius") {
          result = (temp - 32) * 5/9;
      } else if (toUnit === "kelvin") {
          result = (temp - 32) * 5/9 + 273.15;
      } else {
          result = temp;  // same unit
      }
  }

  // Kelvin conversions
  if (fromUnit === "kelvin") {
      if (toUnit === "celsius") {
          result = temp - 273.15;
      } else if (toUnit === "fahrenheit") {
          result = (temp - 273.15) * 9/5 + 32;
      } else {
          result = temp;  // same unit
      }
  }

  document.getElementById('result').innerText = `Result: ${result.toFixed(2)} ${toUnit}`;
}
