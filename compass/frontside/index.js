document.addEventListener('alpine:init', () => {
  Alpine.store('isOpen', false)
  Alpine.store('showHeader', true)

  let currScrollY = window.scrollY
  window.addEventListener('scroll', (event) => {
    if (window.scrollY > currScrollY && window.scrollY > 60) {
      // down
      Alpine.store('showHeader', false)
    } else {
      Alpine.store('showHeader', true)
    }
    currScrollY = window.scrollY
  });
})