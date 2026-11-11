const { argv } = require("node:process");

async function getEvents(endpoint: string) {
  const response = await fetch(endpoint);
  if (!response.ok) {
    throw new Error(`Github request failed: ${response.status}`);
  }
  const events = await response.json();
  return events;
}

async function main(username: string) {
  try {
    const endpoint = `https://api.github.com/users/${username}/events`;
    const events = await getEvents(endpoint);
    console.log("events: ", events);
  } catch (error) {
    console.log("ERROR: ", error);
  }
}

main(argv[2]);
