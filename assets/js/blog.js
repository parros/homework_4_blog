function renderPosts() {
    const postInfo = JSON.parse(localStorage.getItem('postInfo'))
    if (postInfo !== ' ') {
        for (let i = 0; i < postInfo.length; i++) {
            const info = postInfo[i]
            const ul = document.createElement('ul')
            blogList.append(ul)
            const pT = document.createElement('h4')
            pT.setAttribute('class', 'pT')
            pT.textContent = info.title
            ul.append(pT)
            const pC = document.createElement('p')
            pC.setAttribute('class', 'pC')
            pC.textContent = info.content
            ul.append(pC)
            const pU = document.createElement('p')
            pU.setAttribute('class', 'pU')
            pU.textContent = info.username
            ul.append(pU)
        }
    }
}

renderPosts()