function getFocusableElements (element = document) {
  return [
    ...element.querySelectorAll(
      'a[href], button, input, textarea, select, details,[tabindex]:not([tabindex="-1"])'
    )
  ].filter(
    el => !el.hasAttribute('disabled') && !el.getAttribute('aria-hidden')
  )
}

const Popover = {
  init(target) {
    const wrapper = document.querySelector(target)
    const button = wrapper.querySelector('.popover-button')
    const popover = wrapper.querySelector('.popover')
    const popoverClose = wrapper.querySelector('.popover__close')
    let focusableElements = getFocusableElements(popover)

    focusableElements.forEach(item => {
      item.tabIndex =  -1
    })

    function handleClickOutside(event) {
      const target = event.target
      if (target !== button && !wrapper.contains(target)) {
        closePopover()
      }
    }

    function closePopover() {
      console.log('close')
      button.setAttribute("aria-expanded", false)
      popover.classList.remove("popover--active")
      popover.setAttribute("aria-hidden", true)
      // make focusable popover unfocusable
      focusableElements.forEach(item => {
        item.tabIndex =  -1
      })
      document.removeEventListener('click', handleClickOutside)
    }

    function openPopover() {
      button.setAttribute("aria-expanded", true)
      popover.classList.add("popover--active")
      popover.setAttribute("aria-hidden", false)
      // make focusable popover focusable again
      focusableElements.forEach(item => {
        item.tabIndex = undefined
      })
      document.addEventListener('click', handleClickOutside)
    }

    button.addEventListener("click", (event) => {
      popover.classList.contains("popover--active") ? closePopover() : openPopover()
    })

    console.log('popoverClose', popoverClose)
    if (popoverClose) {
      popoverClose.addEventListener("click", (event) => { closePopover() })
    }
  },
}
export default Popover
