import request from 'superagent'

export function getPlayers() {
  return request 
  .get('https://balldontlie.io/api/v1/players')
  .then(res => res.body)
}