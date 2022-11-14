import axios from "axios";

const landName = document.getElementById('country-list')

async function fetchCountries() {
    const countryName = document.createElement('li')



    try{
        const response = await axios.get('https://restcountries.com/v2/all')
        const countries = response.data

        countries.sort((a, b) => {
                return a.population - b.population;
            });

        createCountries(countries);

        // console.log(countries)
        // countryName.textContent = countries
        // landName.appendChild(countryName)

    }catch (err) {
        console.error(err)
    }

}
fetchCountries();

function createCountries(countries){
    const countryList = document.getElementById('country-list')

    countryList.innerHTML = countries.map((country) => {return `
      <li>
        <img src="${country.flag}" alt="Vlag van ${country.name}" class="flag" />
        <span class="${getRegionClass(country.region)}">${country.name}</span>
        <p class="population">Has a population of ${country.population} people</p>
      </li>
    `;
    }).join('');

function getRegionClass(currentRegion){
    switch (currentRegion){
        case 'Africa':
            return 'blue';
        case 'Americas':
            return 'green';
        case 'Asia':
            return 'red';
        case 'Europe':
            return 'yellow';
        case 'Oceania':
            return 'purple';
        default:
            return 'default';
    }
}

}