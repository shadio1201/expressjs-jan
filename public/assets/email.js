document.querySelector('.submitForm').addEventListener('submit', (e)=> {
    e.preventDefault();
    if(document.querySelector('#email').value == "" | document.querySelector('#email').value == undefined) {
        alert('Error, no input!')
        return
    }

    let email = document.querySelector('#email').value;
    document.querySelector('#email').value = ""

    fetch('http://localhost:3000/form', {
        method: "POST",
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        body: JSON.stringify({
            content: email
        })
    }).then(response => {
        console.log(response)
    }).catch(err => {
        console.log(err)
    })
})