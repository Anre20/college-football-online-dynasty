import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const Rules = () => {
    return (
        <div className='rules-page'>
            <div className='rules-wallpaper-image'></div>
            <h1>Rules</h1>
            <p>The League will be played on All American difficulty with 6 minute quarters.</p>
            <p>Must join the league as a custom Head Coach for a three or fewer star program.</p>
            <p>Conferences will be re-aligned.  Relegation and promotion will be a feature.  Schools from a Group of Five Conference that win their Conference will have the opportunity to be promoted to a linked Power 5 Conference in place of the last place finishing school.</p>
            <p>Every user will play a minimum of two user games per season.</p>
            <p>Every user has the option to request two specific CPU games per season.  They are made on an availability basis, in order of the rankings at the end of the season.</p>
            <p>Two users may also request a user game jointly.</p>
            <p>Users must stay at their current school for a minimum period of two seasons.  If they accept a new position, they must stay at their new school for a minimum of two seasons as well (unless fired).  Users may not accept job offers from five-star programs.</p>
            <p>We will advance the week once every 48 hours or when all games are played or all users set themselves as “ready.” Whichever comes first.</p>
            <p>User games and postseason games will have more leeway given, and the schedule will attempt to bunch user games in a cluster of weeks to accommodate this.</p>
            
        </div>
    );
}

export default Rules;
