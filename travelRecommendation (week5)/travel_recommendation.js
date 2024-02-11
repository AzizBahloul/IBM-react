document.addEventListener('DOMContentLoaded', function() {
    fetch('travel_recommendation_api.json')
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error('Error fetching data:', error));
});

document.getElementById('searchButton').addEventListener('click', function() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    console.log('Search keyword:', searchInput);
});

document.getElementById('resetButton').addEventListener('click', function() {
    console.log('Results cleared');
});
