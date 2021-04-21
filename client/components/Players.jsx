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
    const [widgets, useWidgets] = useState([])
    
    function handleSubmit(evt) {
        evt.preventDefault()
        getPlayer(nbaInfo)
          .then(() => {
            getNbaInfo
          })
          return null;
    }
    
    const handleChange = event => {
        getForm({...form, [event.target.first_name]: event.target.value})
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
        <select>
            <option value=''>Search Player</option>
            <option value='player1'>Ike Anigbogu</option>
            <option value='player2'>Ron Baker</option>
            <option value='player3'>Jabari Bird</option>
            <option value='player4'>MarShon Brooks</option>
            <option value='player5'>Lorenzo Brown</option>
            <option value='player6'>Omri Casspi</option>
            <option value='player7'>Alex Abrines</option>
            <option value='player8'>Tyler Davis</option>
            <option value='player9'>Keenan Evans</option>
            <option value='player10'>Marcin Gortat</option>
            <option value='player11'>Andrew Bogut</option>
            <option value='player12'>Amir Johnson</option>
            <option value='player13'>George King</option>
            <option value='player14'>Zach Lofton</option>
            <option value='player15'>Kosta Koufos</option>
            <option value='player16'>Billy Preston</option>
            <option value='player17'>Zhou Qi</option>
            <option value='player18'>Zach Randolph</option>
            <option value='player19'>Malachi Richardson</option>
            <option value='player20'>DJ Stephens</option>
            <option value='player21'>Milos Teodosic</option>
            <option value='player22'>Gary Trent Jr.</option>
            <option value='player23'>Michael Smith</option>
            <option value='player24'>John Morton</option>
            <option value='player25'>Howard Wright</option>
        </select>
        </div>
        <div>
            <table className='content-table'> 
                <tbody>
                    <tr>
                        <th>First Name</th>
                        <td>{nbaInfo.data[0]['first_name']}</td>
                    </tr>
                    <tr>
                        <th>Last Name</th>
                        <td>{nbaInfo.data[0]['last_name']}</td>
                    </tr>
                    <tr>
                        <th>Position</th>
                        <td>{nbaInfo.data[0]['position']}</td>
                    </tr>
                    <tr>
                        <th>Team Name</th>
                        <td>{nbaInfo.data[0].team.full_name}</td>
                    </tr>
                    <tr>
                        <th>City</th>
                        <td>{nbaInfo.data[0].team.city}</td>
                    </tr>
                    <tr>
                        <th>Conference</th>
                        <td>{nbaInfo.data[0].team.conference}</td>
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