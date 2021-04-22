import React, { useState, useEffect } from 'react'
import {getPlayer, addPlayers, deletePlayers} from '../apiClient'


function myPlayers () {
    const[nbaInfo, getNbaInfo] = useState({
            "data":[
            {   
                "first_name":"",
                "last_name":"",
                "position":"",
                "team":{
                  "city":"",
                  "conference":"",
                  "full_name":"",
                }
            }]
        })

    const [chosenPlayer, setChosenPlayer] = useState(
        {   
            "first_name":"Kent",
            "last_name":"Tsou",
            "position":"G",
            "team":{
              "city":"Auckland",
              "conference":"East",
              "full_name":"East WildCats",
            }
        }
    )

    const [selectedPlayer, setSelectedPlayer] = useState(0)

    function playerChange(evt) {
        setSelectedPlayer(evt.target.value)
        setChosenPlayer(nbaInfo.data.find((player) => {
            return Number(player.id) === Number(evt.target.value)
    }))
}
    

    function handleSubmit(evt) {
        evt.preventDefault()
        getPlayer(nbaInfo)
          .then(() => {
            getNbaInfo
          })
          return null;
    }
    
    const handleChange = event => {
        getForm({...form, [event.target.name]: event.target.value})
    }

    useEffect(() => {
        getPlayer()
            .then(set => {
            console.log(set)
            getNbaInfo(set)
            console.log(nbaInfo)
            return null
            })
            .catch(e =>console.log(e))
        }, [])

    return (
        <>
        <div>
        <select onChange={playerChange}>
            <option value=''>Search Player</option>
            <option value='14'>Ike Anigbogu</option>
            <option value='25'>Ron Baker</option>
            <option value='47'>Jabari Bird</option>
            <option value='67'>MarShon Brooks</option>
            <option value='71'>Lorenzo Brown</option>
            <option value='90'>Omri Casspi</option>
            <option value='1'>Alex Abrines</option>
            <option value='119'>Tyler Davis</option>
            <option value='149'>Keenan Evans</option>
            <option value='179'>Marcin Gortat</option>
            <option value='1593'>Andrew Bogut</option>
            <option value='241'>Amir Johnson</option>
            <option value='256'>George King</option>
            <option value='281'>Zach Lofton</option>
            <option value='263'>Kosta Koufos</option>
            <option value='382'>Billy Preston</option>
            <option value='384'>Zhou Qi</option>
            <option value='388'>Zach Randolph</option>
            <option value='392'>Malachi Richardson</option>
            <option value='430'>DJ Stephens</option>
            <option value='437'>Milos Teodosic</option>
            <option value='448'>Gary Trent Jr.</option>
            <option value='494'>Michael Smith</option>
            <option value='495'>John Morton</option>
            <option value='496'>Howard Wright</option>
        </select>
        </div>
        <div>
            <table className='content-table'> 
                <tbody>
                    <tr>
                        <th>First Name</th>
                        <td>{chosenPlayer.first_name}</td>
                    </tr>
                    <tr>
                        <th>Last Name</th>
                        <td>{chosenPlayer.last_name}</td>
                    </tr>
                    <tr>
                        <th>Position</th>
                        <td>{chosenPlayer.position}</td>
                    </tr>
                    <tr>
                        <th>Team Name</th>
                        <td>{chosenPlayer.team.full_name}</td>
                    </tr>
                    <tr>
                        <th>City</th>
                        <td>{chosenPlayer.team.city}</td>
                    </tr>
                    <tr>
                        <th>Conference</th>
                        <td>{chosenPlayer.team.conference}</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <br></br>
        <div className='font-style'>
            <p>Make your starting five</p>
        </div>
        <div>
            <form onSubmit={handleSubmit} className='font-style'>
                <input name='name' placeholder="Choose Players" onChange={handleChange} />
                <button type='submit' onClick={handleSubmit}>Add</button>
            </form>
        </div>
        </>
    )
}

export default myPlayers

// const currentPost = props.post
//   useEffect(() => {
//     if (currentPost) setNewPost(currentPost)
//   }, [])

//   useEffect(() => {
//     if (post && !currentPost)setNewPost(post)
//   }, [props.post])