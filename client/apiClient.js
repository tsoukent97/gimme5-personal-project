import request from 'superagent'

const serverURL = 'http://localhost:3000/api/v1'

export function getGreeting() {
  return request
  .get(`${serverURL}/greeting`)
  .then(res => res.body)
}

export function nbaChamps() {
  return request 
  .get('https://fly.sportsdata.io/api/nba/fantasy/json/CurrentSeason')
  .then(res => res.body)
}