import axios from "axios";
import './App.css';
import React, {useState} from 'react';

function App() {

    const [activities,
        setActivities] = useState(null);
    const apiURL = "https://www.boredapi.com/api/activity/"
    const fetchData = async() => {
        const response = await axios.get(apiURL)

        setActivities(response.data)
    }
    const free = 'free'
    return (
        <div className="App">
            <h1>The Bored API</h1>
            <div>
                <button className="fetch-button" onClick={fetchData}>
                Let's find you something to do
                </button>
            </div>

            {activities != null && <div className="activities" key={activities.key}>

                <h3>{activities.activity}</h3>

                <div className="details">
                    <p>Type: {activities.type}</p>
                    <p>Participants: {activities.participants}</p>
                    <p>Price: {activities.price*10}$</p>
                    <a href={activities.link}>GO</a>

                </div>
            </div>}
        </div>
    );
}

export default App;
