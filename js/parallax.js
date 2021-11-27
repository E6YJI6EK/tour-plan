const scrollHeight = Math.max(
  document.body.scrollHeight,
  document.documentElement.scrollHeight,
  document.body.offsetHeight,
  document.documentElement.offsetHeight,
  document.body.clientHeight,
  document.documentElement.clientHeight
)
const screenHeight = screen.height
const object = document.querySelector('.newsletter')
let bgPosX = "center"
let bgPosY = "0%"

window.addEventListener('scroll', () => {
    bgPosY = (parseInt(scrollY) / scrollHeight) * 100
    object.style.backgroundPosition = bgPosX + ' ' + (100 - bgPosY) + "%"
})
