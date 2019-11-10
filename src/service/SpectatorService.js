import '../api_key.txt';

const path = 'https://na1.api.riotgames.com/lol/spectator/v4';

function getFeaturedSpectate() {
  return fetch(path);
}

export const spectatorService = {
  getFeaturedSpectate,
};
