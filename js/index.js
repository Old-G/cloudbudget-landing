const burger = document.querySelector('#burger')
const navWrapB = document.querySelector('#nav-wrap-b')
const closeX = document.querySelector('#close')

burger.addEventListener('click', () => {
  navWrapB.style.cssText = 'display: flex'
  burger.style.cssText = 'display: none'
  closeX.style.cssText = 'display: block'
})

closeX.addEventListener('click', () => {
  navWrapB.style.cssText = 'display: none'
  closeX.style.cssText = 'display: none'
  burger.style.cssText = 'display: block'
})
