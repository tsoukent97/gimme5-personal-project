import React, {useState, useEffect} from 'react'

import { getPlayers } from '../apiClient'

function myPlayers () {

    const[nbaInfo, getNbaInfo] = useState({
        "id":0,
        "first_name":"",
        "last_name":"",
        "position":"",
        "height_feet": 0,
        "height_inches": 0,
        "weight_pounds": 0,
        "team":{
        "name":"",
        "city":""
    }
})

    function handleSubmit(evt) {
        evt.preventDefault()
        getPlayers(nbaInfo)
          .then(() => {
            getNbaInfo
          })
          return null
    
      }
      useEffect(() => {
       getPlayers()
        .then(set => {
          console.log(set)
          getNbaInfo(set)
          return null
        })
        .catch(e =>console.log(e))
      }, [])

    return (
        <>
        <div>
            <form onSubmit={handleSubmit}>
                <input name='name' placeholder="enter name" />
                <select>
                    <option value='player'>Player1</option>
                    <option value='player'>Player2</option>
                    <option value='player'>Player3</option>
                    <option value='player'>Player4</option>
                    <option value='player'>Player5</option>
                </select>
            </form>
        </div>
        <br></br>
        <div>
            <table>
                <tbody>
                    <tr>
                        <td>First Name</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Last Name</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Position</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Height(Feet)</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Height(Inches)</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Weight(Pounds)</td>
                    </tr>
                    <tr>
                        <td>Team Name</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>City</td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </div>
        </>
    )
}

export default myPlayers