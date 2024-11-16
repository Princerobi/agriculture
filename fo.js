document.getElementById("video").play();

const form = document.getElementById('farmer-form');
const responseDiv = document.getElementById('response');

form.addEventListener('submit', (e) => {
    e.preventDefault ();
    const formData = new FormData(form);
    const data = {};
    for (const [key, value] of formData) {
        data[key] = value;
    }
    fetch('/api/farmers', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error(error));
});