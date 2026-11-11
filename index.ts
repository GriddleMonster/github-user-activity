const { argv } = require('node:process');
const endpoint = 'https://api.github.com/users/GriddleMonster/events'

async function getEvents() {
    const response = await fetch(endpoint);
    const events = await response.json();
    return events;
}

async function main() {
    console.log('endpoint: ', endpoint);
    const events = await getEvents()
    console.log('events: ', events);
}

main()