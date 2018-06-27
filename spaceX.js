const baseURL = 'https://api.spacexdata.com/v2/launches/latest';
const baseURL2 = 'https://api.spacexdata.com/v2/launches/upcoming';

const searchForm = document.querySelector('form');
const submitBtn = document.querySelector('.submit');
const submitBtn2 = document.querySelector('.submit2');

//RESULTS SECTION
const section = document.querySelector('section');

searchForm.addEventListener('submit', fetchResults);
submitBtn2.addEventListener('click', fetchResultsUpcoming);

function fetchResults(e) {
    console.log(e)
    url = baseURL
    console.log(url);
    e.preventDefault();
    fetch(url)
        .then(function (result) {
            console.log(result)
            return result.json();
        }).then(function (json) {
            console.log(json);
            displayResults(json);
        });
}

function displayResults(json) {
    while (section.firstChild){
        section.removeChild(section.firstChild);
    }
    let launches = json;

    let launch = document.createElement('div');
    let heading = document.createElement('p');
    let name = document.createElement('p')
    let link = document.createElement('a');
    let description = document.createElement('p')
    let rock = document.createElement('p');
    let ldate = document.createElement('p');
    let video = document.createElement('a');
    let space = document.createElement('br');
    let data = document.createElement('a');

    name.textContent = "Mission Name:";
    name.className = "name";
    link.href = launches.links.article_link;
    link.textContent = launches.mission_name;
    link.className = "link";
    description.textContent = launches.details;
    ldate.textContent = "Launch's local date and time:   " + launches.launch_date_local;
    rock.textContent = "Rocket Name:    " + launches.rocket.rocket_name;
    video.href = launches.links.video_link;
    video.textContent = "Watch the Launch Here!";
    data.href = launches.telemetry.flight_club;
    data.textContent = "Flight Details";




    launch.appendChild(heading);
    launch.appendChild(name);
    heading.appendChild(link);
    launch.appendChild(description);
    launch.appendChild(ldate);
    launch.appendChild(rock);
    launch.appendChild(video);
    launch.appendChild(space);
    launch.appendChild(data);


    section.appendChild(launch);
};

//UPCOMING LAUNCHES

function fetchResultsUpcoming(e) {
    console.log(e)
    url = baseURL2
    console.log(url);
    e.preventDefault();
    fetch(url)
        .then(function (result) {
            console.log(result)
            return result.json();
        }).then(function (json) {
            console.log(json);
            displayResultsUpcoming(json);
        });
}

function displayResultsUpcoming(json) {
    while (section.firstChild){
        section.removeChild(section.firstChild);
    }
    let launches = json;

    let launch = document.createElement('div');
    let heading = document.createElement('p');
    let link = document.createElement('p');
    let description = document.createElement('p')
    let rock = document.createElement('p');
    let ldate = document.createElement('p');
    let lsite = document.createElement('p');
    let lyear = document.createElement('p');

    //link.href = launches[0].links.article_link;
    link.textContent = "Mission Name:   " + launches[0].mission_name;
    description.textContent = launches[0].details;
    ldate.textContent = "Launch's local date and time:   " + launches[0].launch_date_local;
    rock.textContent = "Rocket Name:    " + launches[0].rocket.rocket_name;
    lsite.textContent = "Launch Site:   " + launches[0].launch_site.site_name_long;
    lyear.textContent = "Launch Year:   " + launches[0].launch_year;




    launch.appendChild(heading);
    heading.appendChild(link);
    launch.appendChild(description);
    launch.appendChild(ldate);
    launch.appendChild(rock);
    launch.appendChild(lsite);
   
    launch.appendChild(lyear);


    section.appendChild(launch);
};