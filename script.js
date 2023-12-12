const apiUrl = 'http://api.alquran.cloud/v1/ayah/';

function getRandomAyah() {
    const ayahContainer = document.getElementById('ayah-container');

    // Generate a random Ayah reference (ayah number or surah:ayah)
    const randomReference = Math.floor(Math.random() * 6236) + 1;

    // Specify the editions you want to retrieve separated by a comma
    const editions = 'quran-uthmani,en.asad,en.pickthall';

    // Construct the API endpoint URL
    const endpointUrl = `${apiUrl}${randomReference}/editions/${editions}`;

    // Fetch the random Ayah from the Alquran.cloud API
    fetch(endpointUrl)
        .then(response => response.json())
        .then(data => {
            const ayahTexts = data.data.map(edition => edition.text);
            ayahContainer.innerHTML = `<p>${ayahTexts.join('<br>')}</p>`;
        })
        .catch(error => console.error('Error fetching Ayah:', error));
}
