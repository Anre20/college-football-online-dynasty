import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';


const History = () => {
  const navigate = useNavigate();
  const { year } = useParams();

  const handleYearChange = (event) => {
    const selectedYear = event.target.value;
    navigate(`/history/${selectedYear}`);
  };


  const historyData = {
      "2024": <>
          <h2>User Games</h2>
          <p>Coach <a href="/users/66a3c51413095928ca860577">Anre</a>'s Purdue Boilermakers defeated Coach <a href="/users/66a3c5d413095928ca860585">Henry</a>'s Arizona Wildcats by a final score of 42-35.</p>
          <p>Coach <a href="/users/66a3c5f313095928ca860587">Armstrong</a>'s Memphis Tigers defeated Coach <a href="/users/66a3c57b13095928ca86057d">Joey</a>'s Syracuse Orangemen by a final score of 35-28.</p>
          <p>Coach <a href="/users/66a3c55e13095928ca86057b">Dustin</a>'s Colorado Buffaloes defeated Coach <a href="/users/66a3c5d413095928ca860585">Henry</a>'s Arizona Wildcats by a final score of 31-0.</p>
          <p>Coach <a href="/users/66a3c60413095928ca860589">Preston</a>'s SMU Mustangs defeated Coach <a href="/users/66a3c51413095928ca860577">Anre</a>'s Purdue Boilermakers by a final score of 35-28.</p>
          <p>Coach <a href="/users/66a3c5c113095928ca860583">Chris</a>'s Coastal Carolina Chanticleers defeated Coach <a href="/users/66a7a881432941f2c6f75f2b">Cory</a>'s Troy Trojans by a final score of 65-7.</p>
          <p>Coach <a href="/users/66a3c5c113095928ca860583">Chris</a>'s Coastal Carolina Chanticleers defeated Coach <a href="/users/66a3c61613095928ca86058b">Carlos</a>'s UCF Knights by a final score of 61-17.</p>
          <p>Coach <a href="/users/66a3c60413095928ca860589">Preston</a>'s SMU Mustangs defeated Coach <a href="/users/66a3c55e13095928ca86057b">Dustin</a>'s Colorado Buffaloes by a final score of 49-28.</p>
          <p>Coach <a href="/users/66a3c51413095928ca860577">Anre</a>'s Purdue Boilermakers defeated Coach <a href="/users/66a3c60413095928ca860589">Preston</a>'s SMU Mustangs by a final score of 45-0 in the Rose Bowl.</p>
          <h2>Awards</h2>
          <p>CJ Smith of the Purdue Boilermakers won the Heisman Trophy!</p>
          <p>CJ Smith of the Purdue Boilermakers won Player of the Year!</p>
          <p>Cam Newton of the Coastal Carolina Chanticleers won Best Head Coach!</p>
          <p>Hudson Card of the Purdue Boilermakers won Best Quarterback!</p>
          <p>Yanni Karlaftis of the Purdue Boilermakers won Best Defensive Player!</p>
          <p>Koy Beasley of the Purdue Boilermakers won Best Defensive Back!</p>
          <p>Braydon Bennett of the Coastal Carolina Chanticleers won Best Running Back!</p>
          <p>CJ Smith of the Purdue Boilermakers won Best Receiver!</p>
          <p>Shitta Sillah of the Purdue Boilermakers won the Lombardi Award!</p>
          <p>Hudson Card of the Purdue Boilermakers won the Johnny Unitas Golden Arm Award!</p>
          <p>Shitta Sillah of the Purdue Boilermakers won Best Defensive End!</p>
          <p>Tate Ratledge of the Georgia Bulldogs won Best Interior Lineman!</p>
          <p>Oscar Delp of the Georgia Bulldogs won Best Tight End!</p>
          <p>Ed Clouse of the Coastal Carolina Chanticleers won the Broyles Award!</p>
          <p>Yanni Karlaftis of the Purdue Boilermakers won Best Linebacker!</p>
          <p>Gus Hartwig of the Purdue Boilermakers won Best Center!</p>
          <p>John Love of the Virginia Tech Hokies won the Lou Groza Award!</p>
          <p>Kai Kroeger of the South Caroline Gamecocks won the Best Punter!</p>
          <p>Rayshon Luke of the Arizona Wildcats won Best Special Teams Returner!</p>
          <h2>Bowl Wins</h2>
          <h3>Peach Bowl</h3>
          <p>Virginia Tech beat Florida State University by a final score of 36-14</p>
          <h3>Rose Bowl</h3>
          <p>Purdue beat SMU by a final score of 45-0</p>
          <h3>Fiesta Bowl</h3>
          <p>Ohio State beat Colorado by a final score of 49-47</p>
          <h3>Sugar Bowl</h3>
          <p>Coastal Carolina beat Georgia by a final score of 63-51</p>
          <h3>Cotton Bowl</h3>
          <p>Purdue beat Virginia Tech by a final score of 66-42</p>
          <h3>Orange Bowl</h3>
          <p>Ohio State beat Coastal Carolina by a final score of 14-6</p>
          <h3>National Championship</h3>
          <p>Purdue beat Ohio State by a final score of 49-41</p>
          <h2>Conference Champions</h2>
          <p>ACC: Florida State University</p>
          <p>Big 10: Purdue</p>
          <p>Big 12: Kansas State</p>
          <p>Pac 12: Colorado</p>
          <p>SEC: Georgia</p>
          <p>American: Memphis</p>
          <p>Mountain West: Liberty</p>
          <p>Conference USA: SMU</p>
          <p>MAC: Appalachian State</p>
          <p>Sun Belt: Coastal Carolina</p>
      </>,
      "2025": <>
      <h2>User Games</h2>
      <p>To Be Announced</p>
      <h2>Awards</h2>
      <p>To Be Announced</p>
      <h2>Bowl Wins</h2>
      <p>To Be Announced</p>
      <h2>Conference Champions</h2>
      <p>To Be Announced</p>
  </>,
      "2026": <>
      <h2>User Games</h2>
      <p>To Be Announced</p>
      <h2>Awards</h2>
      <p>To Be Announced</p>
      <h2>Bowl Wins</h2>
      <p>To Be Announced</p>
      <h2>Conference Champions</h2>
      <p>To Be Announced</p>
  </>,
      "2027": <>
      <h2>User Games</h2>
      <p>To Be Announced</p>
      <h2>Awards</h2>
      <p>To Be Announced</p>
      <h2>Bowl Wins</h2>
      <p>To Be Announced</p>
      <h2>Conference Champions</h2>
      <p>To Be Announced</p>
  </>,
      "2028": <>
      <h2>User Games</h2>
      <p>To Be Announced</p>
      <h2>Awards</h2>
      <p>To Be Announced</p>
      <h2>Bowl Wins</h2>
      <p>To Be Announced</p>
      <h2>Conference Champions</h2>
      <p>To Be Announced</p>
  </>,
      "2029":<>
      <h2>User Games</h2>
      <p>To Be Announced</p>
      <h2>Awards</h2>
      <p>To Be Announced</p>
      <h2>Bowl Wins</h2>
      <p>To Be Announced</p>
      <h2>Conference Champions</h2>
      <p>To Be Announced</p>
  </>,
  };

  const historyText = historyData[year] || "Select a year to view history.";

  return (
    <div className='awards-wallpaper-page'>
      <div className='awards-wallpaper-image'></div>
      <div className='content'>
        <div>
          <h1>History {year}</h1>
          <select onChange={handleYearChange} value={year || ''}>
            <option value="">Select Year</option>
            <option value="2024">2024</option>
            <option value="2025">2025</option>
            <option value="2026">2026</option>
            <option value="2027">2027</option>
            <option value="2028">2028</option>
            <option value="2029">2029</option>

          </select>
          <p>{historyText}</p>
        </div>
      </div>
    </div>
  );
};

export default History;
