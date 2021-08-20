import React from 'react'
import TinderCard from 'react-tinder-card';
import "./Cards.css";
import axios from './axios';

function Cards() {
    const [people, setPeople] = React.useState([]);

    React.useEffect(() => {
        async function fetchData() {
            const req = await axios.get('/tinder/cards');

            setPeople(req.data);
        }
        fetchData();
    }, []);



    const swiped = (direction, nameToDelete) => {
        console.log("removing: " + nameToDelete);
    };

    const outOfFrame = (name) => {
        console.log(name + "left the screen");
    };

    return (
        <div className='cards'>
            <div className='card_container'>
                {people.map((person) => (
                    <TinderCard
                        className="swipe"
                        key={person.name}
                        preventSwipe={["up", "down"]}
                        onSwipe={(dir) => swiped(dir, person.name)}
                        onCardLeftScreen={() => outOfFrame(person.name)}
                    >
                        <div
                            style={{ backgroundImage: `url(${person.imgUrl})` }}
                            className="card"
                        >
                            <h3>{person.name}</h3>
                        </div>
                    </TinderCard>
                ))}
            </div>
        </div>
    )
}

export default Cards





/* [
        {
            name: 'Sophie',
            url: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&dl=michael-dam-mEZ3PoFGs_k-unsplash.jpg",
        },
        {
            name: 'Lauren',
            url: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&dl=ayo-ogunseinde-6W4F62sN_yI-unsplash.jpg",
        },
        {
            name: 'Karen',
            url: "https://images.unsplash.com/photo-1516726817505-f5ed825624d8?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&dl=kyle-smith-tlowJ-oYAjU-unsplash.jpg",
        },
    ] */