let theme = localStorage.getItem('theme')

if (theme == null) {
    setTheme('light')

} else {
    setTheme(theme)
}


let themeDots = document.getElementsByClassName('theme-dot')

for (var i = 0; themeDots.length > i; i++) {
    themeDots[i].addEventListener('click', function () {
        let mode = this.dataset.mode
        console.log('aaa', mode)
        setTheme(mode)

    })
}

function setTheme(mode) {
    if (mode == 'light') {
        // @ts-ignore
        document.getElementById('theme-style').href = '/css/defaut.css'
    }
    if (mode == 'blue') {
        // @ts-ignore
        document.getElementById('theme-style').href = '/css/blue.css'
    }
    if (mode == 'green') {
        // @ts-ignore
        document.getElementById('theme-style').href = '/css/green.css'
    }
    if (mode == 'purple') {
        // @ts-ignore
        document.getElementById('theme-style').href = '/css/purple.css'
    }
    localStorage.setItem('theme', mode)
}