import React, {useState} from 'react';
import axios from 'axios';
import PlayerCard from './components/PlayerCard';
import PlayerStats from './components/PlayerStats';
import {Line} from 'react-chartjs-2';
import './App.css'

const App = () => {
  const [search, setSearch] = useState('');
  const [playerID, setPlayerID] = useState('');
  const [playerStats, setPlayerStats] = useState('');
  const [chartData, setChartData] = useState({});
  const [id, setId] = useState('');
  const [teamDetails, setTeamDetails] = useState('');

  //Keeps track of the search bar and whatever is typed into it
  const handleChange = event => {
    //Replaces each space in the names entered with _
    const replace = event.target.value.split(' ').join('_');
    setSearch(replace);
  };

  //Submitting the form, saves whatever is typed into the searchbar into getPlayerID
  const handleSubmit = event => {
    event.preventDefault();
    getPlayerID(search);
  };

  //Getting the specific ID of each player that was submitted
  const getPlayerID = (search) => {
    axios.get(`https://www.balldontlie.io/api/v1/players?search=${search}`)
      .then(response => {
        if(response.data.data[0] === undefined){
          alert(`${search} has not played this season`)
        } else if (response.data.data.length > 1){
          alert('Please be more specific with your name')
        } else {
          // console.log(response.data.data[0]);
          setPlayerID(response.data.data[0]);
          setTeamDetails(response.data.data[0].team);
          //Passes the specific player ID into the URL to get the specific stats for each player
          getPlayerStats(response.data.data[0].id);
          // getPlayerStatsGraph(response.data.data[0].id);
          setId(response.data.data[0].id)
        }
      })
      .catch(error => {
        console.log(error)
      })
  };

  //Passing the specific player ID to get the specific stats of each player
  const getPlayerStats = (ID) => {
    axios.get(`https://www.balldontlie.io/api/v1/season_averages?season=2019&player_ids[]=${ID}`)
      .then(response => {
        // console.log(response);
        if (response.data.data[0] === undefined){
          alert(`${search} has not played this season.`)
          setPlayerStats(response.data.data[0] === null)
        } else {
          setPlayerStats(response.data.data[0]);
        }
      })
      .catch(error => {
        console.log(error)
      })
  };

  //Creates line graph depending on option selected
  const handleSelectedOptionChange = (event) => {
    const selectedOption = event.target.value;
    if (selectedOption === 'points'){
      let ptsArray = [];
      let DateArray = [];
      axios.get(`https://www.balldontlie.io/api/v1/stats?seasons[]=2019&player_ids[]=${id}&per_page=100`)
        .then(response => {
          for (const dataObj of response.data.data){
            ptsArray.push(parseInt(dataObj.pts))
            console.log(response)
          };
          for(const dateObj of response.data.data){
            DateArray.push(dateObj.game.date.slice(0,10))
          }
          setChartData({
            labels:DateArray,
            datasets: [
              {
                borderColor: '#ffffff',
                label: 'Points',
                fill: false,
                data: ptsArray,
                pointBackgroundColor: '#ffffff',
              }
            ],
          });
        })
        .catch(error => {
          console.log(error)
        })
    } else if (selectedOption === 'assists'){
      let astArray = [];
      let astDateArray = [];
      axios.get(`https://www.balldontlie.io/api/v1/stats?seasons[]=2019&player_ids[]=${id}&per_page=100`)
        .then(response => {
          for (const dataObj of response.data.data){
            astArray.push(parseInt(dataObj.ast))
          };
          for (const dateObj of response.data.data){
            astDateArray.push(dateObj.game.date.slice(0,10))
          };
          setChartData({
            labels: astDateArray,
            datasets: [
              {
                borderColor: '#ffffff',
                label: 'Assists',
                fill: false,
                data: astArray,
                pointBackgroundColor: '#ffffff'
              }
            ],
          });
        })
        .catch(error => {
          console.log(error)
        })
      } else if (selectedOption === 'blk'){
        let blkArray = [];
        let blkDateArray = [];
        axios.get(`https://www.balldontlie.io/api/v1/stats?seasons[]=2019&player_ids[]=${id}&per_page=100`)
          .then(response => {
            for (const dataObj of response.data.data){
              blkArray.push(parseInt(dataObj.blk))
            };
            for (const dateObj of response.data.data){
              blkDateArray.push(dateObj.game.date.slice(0,10))
            };
            setChartData({
              labels: blkDateArray,
              labelString: 'white',
              datasets: [
                {
                  borderColor: '#ffffff',
                  label: 'Blocks',
                  fill: false,
                  data: blkArray,
                  pointBackgroundColor: '#ffffff'
                }
              ],
            });
          })
          .catch(error => {
            console.log(error)
          })
      }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="form-input">
        <input size="101" type="text" className="search-bar" placeholder="Enter Player Ex. Lebron James" value={search} onChange={handleChange}/>
      </form>
      <PlayerCard playerID={playerID} playerStats={playerStats} 
      teamDetails={teamDetails}/>
      <PlayerStats playerStats={playerStats} playerID={playerID}/>
      <select onChange={handleSelectedOptionChange} className="menu">
        <option value="points" defaultValue="points">Points</option>
        <option value="assists">Assists</option>
        <option value="blk">Blocks</option>
      </select>
      <div style={{height: "610px", width: "1100px"}} className="graph">
        <Line data={chartData} options={{responsive:true, scales:{
          yAxes: [
            {
              ticks:{
                autoSkip: true,
                maxTicksLimit: 10,
                beginAtZero: true,
                fontColor: 'white'
              },
              gridLines: {
                color: 'white',
                zeroLineColor: 'white'
              }
            }
          ],
          xAxes:[
            {
              ticks:{
                autoSkip: true,
                maxTicksLimit: 10,
                beginAtZero: true,
                fontColor: 'white'
              },
              scaleLabel:{
                display: true,
                labelString: 'Date',
                fontColor: 'white'
              },
              gridLines: {
                color: 'white',
                zeroLineColor: 'white'
              }
            }
          ],
        }}}/>
      </div>
    </div>
  )
};

export default App;