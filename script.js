const display = document.getElementById("display")
const upperdisplay = document.getElementById("upperdisplay")

const inputDisplay = (num) => {
  display.innerHTML += num
  
  if(display.innerHTML[0] === '0') {
    display.innerHTML = num
  }
  upperdisplay.innerHTML = display.innerHTML
}



const calculate = () => {
  display.innerHTML = eval(upperdisplay.innerHTML)
}

const clearDisplay = () => {
  display.innerHTML = 0
  upperdisplay.innerHTML = ''
}