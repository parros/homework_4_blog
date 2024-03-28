const username = document.getElementById('username')
const title = document.getElementById('title')
const content = document.getElementById('content')
const submitBtn = document.getElementById('submit')

// saves post information in local storage
submitBtn.addEventListener('click', function(event){

    const postLog = JSON.parse(localStorage.getItem('postInfo')) || []

    let post = {
        username: username.value,
        title: title.value,
        content: content.value
    }
    postLog.push(post)
    localStorage.setItem('postInfo', JSON.stringify(postLog))
})
