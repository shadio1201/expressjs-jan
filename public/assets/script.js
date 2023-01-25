async function getData() {
    if(document.querySelector('.displayData').innerHTML) {
        document.querySelector('.displayData').innerHTML = ""
    }

    let data = await fetch('http://localhost:3000/world')
    let response = await data.json()

    let stagger = 0;
    for(value in response) {
        let text = document.createElement('p');
        text.innerText = response[value];
        document.querySelector('.displayData').appendChild(text)
        text.style.setProperty('--delay', stagger + "00ms")
        text.classList.add('appear');

        stagger++
    }
}

document.querySelector('.fetchData').addEventListener('click', ()=> {
    getData();
})