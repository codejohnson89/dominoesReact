import React from 'react';

const Player = (props) => {
    return ( 
        <div>
            <p>Name: {props.name}</p>
            {props.score}
            <button onClick={props.scoreFive}>5</button>
            <button onClick={props.scoreTen}>10</button>
            <button onClick={props.scoreFifteen}>15</button>
            <button onClick={props.scoreTwenty}>20</button>
            <button onClick={props.scoreTwentyFive}>25</button>
            <button onClick={props.scoreThirty}>30</button>
            <button onClick={props.scoreThirtyFive}>35</button>
        </div>
     );
}
 
export default Player;