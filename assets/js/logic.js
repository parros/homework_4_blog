const themeSwitcher = document.getElementById('sun')
const lightMode = document.getElementById('light-theme')
const darkMode = document.getElementById('dark-theme')

let mode = localStorage.getItem('theme') || 'light'

currentTheme()
// swaps current theme
function themeSwitch(event) {
    if (mode === 'light') {
        mode = 'dark'
        lightMode.setAttribute('id', 'dark-theme')
        localStorage.setItem('theme', 'dark')
    } else {
        mode = 'light'
        lightMode.setAttribute('id', 'light-theme')
        localStorage.setItem('theme', 'light')
    }
}

// keeps theme between htmls
function currentTheme(event) {
    if (mode === 'light') {
        lightMode.setAttribute('id', 'light-theme')
    } else {
        lightMode.setAttribute('id', 'dark-theme')
    }
}

themeSwitcher.addEventListener('click', themeSwitch)