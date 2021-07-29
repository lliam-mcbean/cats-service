const fetchBreedDescription = require('./breedFetcher')

fetchBreedDescription('Siberian', (error, description) => {
    if (error) {
        console.log('Error fetch details: ', error)
    } else {
        console.log(description)
    }
});