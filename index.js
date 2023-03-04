const loadCountries = () =>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displayCountries(data));
}

const displayCountries = countries =>{
    // console.log(countries);
    const countriesHTML = countries.map(country =>getCountryHTML(country));
    // console.log(countriesHTML);
    const container = document.getElementById('countries');
    container.innerHTML = countriesHTML.join(' ')

}

const getCountryHTML = ({name, flags, area,region} )=>{
    
    return`
    <div class = country>
   
    <img src = "${flags.png}">
    <h2>Country: ${name.common}</h2>
    <h2>Area: ${area}</h2>
    <h2>Region: ${region}</h2>
    </div>`
}

loadCountries();