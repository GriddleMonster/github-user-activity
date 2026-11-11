const { argv } = require('node:process');

async function getEvents(endpoint: string) {
    const response = await fetch(endpoint);
    const events = await response.json();
    return events;
}

async function main(username: string) {
    const endpoint = `https://api.github.com/users/${username}/events`
    const events = await getEvents(endpoint)
    console.log('events: ', events);
}

main(argv[2])