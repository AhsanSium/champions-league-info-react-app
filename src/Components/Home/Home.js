import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Container, Jumbotron } from 'react-bootstrap';
import Club from '../Club/Club';
import '../Home/Home.css';


const Home = () => {

    

    const [clubs, setClubs] = useState([]);
    useEffect(() => {
        axios.get('https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=Uefa%20Champions%20League')
            .then(res => {
                const allTeams = res.data;
                setClubs(allTeams.teams);
            })
    }, [])

    return (
        <>
            <Jumbotron id="header-wrapper">
                <div id="header-text">
                    <h2 className="display-3 fw-bold"> <strong> Champions League Facts </strong></h2>
                </div>               
            </Jumbotron>
            <Container>
            <h3 className="display-3 text-danger text-center shadow p-4"> All Teams </h3>
                <div className="row row-cols-1 row-cols-md-3 g-4 mt-5 ">
                    {
                        clubs.map(club => <Club club={club} ></Club>)
                    }
                </div>    
            </Container>
        </>   
    );
};

export default Home;