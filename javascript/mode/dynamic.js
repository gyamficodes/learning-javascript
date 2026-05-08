 export  const addData = (num1, num2) => {
 return num1 + num2;
}



// Convert Celsius to Fahrenheit
export const convertCelcius = (celcuis) => {
  return (celcuis * 9 / 5) + 32;
}

// Convert Fahrenheit to Celsius 
export const toFahrenheit = (farenheit) => {
  return  (farenheit - 32) * 5 / 9;
}