const path = 'http://localhost:8080';

function getFeaturedSpectate() {
  return fetch(`${path}/spectator/featured`)
  .then((res) => res.json())
  .then((res) => JSON.parse(res.body))
  .then((body) => body.gameList);
}

function getSummonerByName(name) {
  return fetch(`${path}/summoners/${name}`)
  .then((res) => res.json())
  .then((res) => JSON.parse(res.body));
}

export const riotService = {
  getFeaturedSpectate,
  getSummonerByName,
};
