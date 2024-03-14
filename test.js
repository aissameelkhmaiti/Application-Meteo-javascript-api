//inialise the api
const weatherApi = {
    key: '4eb3703790b356562054106543b748b2',
    baseUrl: 'https://api.openweathermap.org/data/2.5/weather'
}
const cityName = 'London';
const apiUrl = `${weatherApi.baseUrl}?q=${cityName}&appid=${weatherApi.key}`;
async function getDataApi(){
    const response = await fetch(apiUrl);
    const data = await response.json();
    console.log('Data:', data);
    
 }
 getDataApi()