document.querySelector('.submitEmail').addEventListener('submit', (e)=> {
    e.preventDefault()

    let email = document.querySelector('.email').value
    document.querySelector('.email').value = ""

    fetch('http://localhost:3000/form', {
        method: "POST",
        body: JSON.stringify({
            content: email
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
          }
    }).then(response => {
        console.log(response)
    }).catch(err => {
        console.log(err)
    })
})