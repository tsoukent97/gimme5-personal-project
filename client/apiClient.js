import request from 'superagent'

const playerURL = 'https://balldontlie.io/api/v1/players'

export function getPlayer() {
  return request 
  .get(playerURL)
  .then(res => res.body)
}

export function addPlayer (data) {
  return request 
    .post(playerURL)
    .send(data)
}

export function deletePlayer(id) {
  return request
    .delete(playerURL + id)
    .then(res => res.body)
}