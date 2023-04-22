import './style.css'

document.querySelector('#app').innerHTML = `
  <div>
    <h1>Contrast Checker</h1>
    <p>Choose your color:</p>
    <input type="color" id="userColor"><br>
      <button id="colorBtn" type="button">CHECK COLOR</button>
    <div class="light-dark-div">
      <div class="textdiv textdiv-light">
        <p class="dark-text">DARK TEXT</p>
      </div>
      <div class="textdiv textdiv-dark">
        <p class="light-text">WHITE TEXT</p>
      </div>
    </div>
    <div class="choosen-color" id="choosenColor"></div>
    <div class="result-color" id="resultColor"></div>
  </div>
`
const colorBtn = document.querySelector('#colorBtn');
const userColorHtml = document.querySelector('#choosenColor');
const resultColorHtml = document.querySelector('#resultColor')


function calculateLuminance(color) {
  console.log(color)
  const rgb = hexToRgb(color);
  //Luminance (perceived option 1): (0.299*R + 0.587*G + 0.114*B)
  const luminance = (0.299 * rgb.r + 0.587 * rgb.g + 0.114 * rgb.b) / 255;

  console.log(luminance)
  calculateContrast(luminance)
}

function hexToRgb(hex) {
  console.log(hex);
  hex = hex.replace('#', '');
  console.log(hex);
  //#ff9c24 = rgb(255, 156, 36)

  //converts hexadecimal(base-16) to integer, om man vill omvandla en hexadecimal sträng till ett heltal i JavaScript använder man radixen 16 som parameter till funktionen "parseInt".
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);

  console.log(r, g, b)
  console.log({r,g,b})

  return {r, g, b};
}

function calculateContrast(luminance){
console.log(luminance);
  if(luminance > 0.5) {
    console.log('text is better black');
    resultColorHtml.innerText= "text is better dark";
  } else {
    console.log('text should be light');
    resultColorHtml.innerText = "text should be light";
  }

}


colorBtn.addEventListener('click', () => {
  const color = document.querySelector('#userColor').value;
  console.log(color);
  userColorHtml.innerText = `You choosed the color ${color}`;

  const textdiv = document.querySelectorAll('.textdiv');
  textdiv.forEach((div) => {
    div.style.backgroundColor = color;
  });

  calculateLuminance(color);

})


// const WCAG_MINIMUM_RATIOS = [
//   ['AA Large', 3],
//   ['AA', 4.5],
//   ['AAA', 7],
// ]