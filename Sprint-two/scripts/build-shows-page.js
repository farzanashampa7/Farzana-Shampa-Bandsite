let showsList = [
    {
        dayTime: 'Mon Dec 17 2018',
        venue: 'Ronald lane',
        location: 'San Francisco, CA'
    },
    {
        dayTime: 'Tue Jul 18 2019 ',
        venue: 'Pier 3 east',
        location: 'San Francisco, CA'
    },

    {
        dayTime: 'Fri Jul 22 2019 ',
        venue: 'View Lounge ',
        location: 'San Francisco, CA'
    },

    {
        dayTime: 'Sat Aug 12 2019',
        venue: 'Hyatt agency',
        location: 'San Francisco, CA'
    },

    {
        dayTime: 'Fri Sep 05 2019 ',
        venue: 'Moscow Center',
        location: 'San Francisco, CA'
    },

    {
        dayTime: 'Wed Aug 11 2019 ',
        venue: 'Pres Club',
        location: 'San Francisco, CA'
    }
]

function getShowLists(showList) {
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
        showDate.innerText = showList[i].dayTime;
        showItem.appendChild(showDate);

        let showPlace = document.createElement('h4');
        showPlace.classList.add('shows__title', 'toggle');
        showPlace.innerText = 'Venue';
        showItem.appendChild(showPlace);

        let showVenue = document.createElement('p');
        showVenue.classList.add('shows__venue');
        showVenue.innerText = showList[i].venue;
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

getShowLists(showsList);


