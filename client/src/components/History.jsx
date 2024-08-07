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
          <h2>Awards</h2>
          <p>To Be Announced</p>
          <h2>Bowl Wins</h2>
          <p>To Be Announced</p>
          <h2>Conference Champions</h2>
          <p>To Be Announced</p>
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
