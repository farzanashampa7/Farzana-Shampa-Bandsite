
// let showsList = [];

function getShowLists() {
    axios
        .get('https://project-1-api.herokuapp.com/showdates?api_key= fd646bde-a6a5-4e13-9788-cd0d1f4cc49b')
        .then(result => {
            // showsList = result.data;
            displayShowLists(result.data);
        })
        .catch(error => {
            console.log(error);
        })
}

getShowLists();

function displayShowLists(showList) {
    for (let i = 0; i < showList.length; i++) {
        let showDetails = document.querySelector('.shows__schedule');

        let showItem = document.createElement('article');
        showItem.classList.add('shows__details');
        showDetails.appendChild(showItem);

        let showTime = document.createElement('h4');
        showTime.classList.add('shows__title', 'toggle');
        showTime.innerText = 'Date';
        showItem.appendChild(showTime);

        let showDate = document.createElement('p');
        showDate.classList.add('shows__date');
        showDate.innerText = showList[i].date.toLowerCase();
        showItem.appendChild(showDate);

        let showPlace = document.createElement('h4');
        showPlace.classList.add('shows__title', 'toggle');
        showPlace.innerText = 'Venue';
        showItem.appendChild(showPlace);

        let showVenue = document.createElement('p');
        showVenue.classList.add('shows__venue');
        showVenue.innerText = showList[i].place;
        showItem.appendChild(showVenue);

        let showCity = document.createElement('h4');
        showCity.classList.add('shows__title', 'toggle');
        showCity.innerText = 'Location';
        showItem.appendChild(showCity);

        let showLocation = document.createElement('p');
        showLocation.classList.add('shows__location');
        showLocation.innerText = showList[i].location;
        showItem.appendChild(showLocation);

        let showTicket = document.createElement('a');
        showTicket.classList.add('shows__ticket');
        showTicket.setAttribute('href', '#');
        showTicket.innerText = 'Buy Tickets';
        showItem.appendChild(showTicket);
    }
}


