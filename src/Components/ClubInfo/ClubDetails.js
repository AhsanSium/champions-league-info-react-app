import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileSignature, faFlag, faFutbol, faMars, faVenus } from '@fortawesome/free-solid-svg-icons';
import { faFacebookSquare, faInstagramSquare, faTwitterSquare, faYoutubeSquare } from '@fortawesome/free-brands-svg-icons';
import maleImage from '../../Images/MaleFootballers2.png';
import femaleImage from '../../Images/FemaleFootballers.png';
import '../ClubInfo/ClubDetails.css';
import { Container, Jumbotron} from 'react-bootstrap';

const ClubDetails = () => {

    const { idTeam } = useParams();

    const [club, setClub] = useState({});
    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${idTeam}`;
        axios.get(url)
            .then(res => {
                const singleTeam = res.data;
                setClub(singleTeam);
            })
    }, [idTeam])


    const { strTeam, intFormedYear, strCountry, strSport, strGender, strDescriptionEN, strFacebook, strTeamBadge, strStadiumThumb } = club.teams ? club.teams[0] : {};

    let gender = strGender;
    let genderIcon;
    //   Test if Gender is Working: 
    //   gender = 'Female';

    let playersImage = gender === 'Male' ? maleImage : femaleImage;
    if (gender === 'Male') {
        playersImage = maleImage;
        genderIcon = faMars;
    }
    else if (gender === 'Female') {
        playersImage = femaleImage;
        genderIcon = faVenus;
    }
    else {
        playersImage = '';
    }

    return (
        <div style={{backgroundColor:'cyan'}}>
            <Jumbotron className="jumbotron text-white jumbotron-image shadow" style={{
                backgroundImage: `url(${strStadiumThumb})`, backgroundSize: 'cover', backgroundPosition: 'center center',
                backgroundRepeat: 'no-repeat'
            }}>
                <img id="logo" src={strTeamBadge} alt="" />

                {/* <img src={strStadiumThumb} alt=""/> */}
            </Jumbotron>

            <Container className="rounded bg-info p-4 mb-5">
            <div className="row justify-content-center">
                <div className="col-sm-6 text-light ">
                    <h3 className="h3 ">{strTeam}</h3>
                    
                    <p><FontAwesomeIcon icon={faFileSignature} size="1x" color="white" /> Founded: {intFormedYear}</p>
                    <p><FontAwesomeIcon icon={faFlag} size="1x" color="white" /> Country: {strCountry}</p>
                    <p><FontAwesomeIcon icon={faFutbol} size="1x" color="white" /> Sport Type: {strSport}</p>
                    <p><FontAwesomeIcon icon={genderIcon} size="1x" color="white" /> Gender: {gender}</p>
                </div>
                <div className="col-sm-6">
                    <img className="img-fluid rounded" src={playersImage} alt="" />
                </div>
                
            </div>
            </Container>

            <Container className=" text-justify">
            <p>{strDescriptionEN}</p>
            
            <div className="text-center p-2">
                <a target="_blank" rel="noreferrer" href={strFacebook}>
                <FontAwesomeIcon icon={faFacebookSquare} size="4x" mask={['far', 'circle']} color="skyblue" />
                </a>
                <FontAwesomeIcon icon={faInstagramSquare} size="4x" color="salmon" />
                <FontAwesomeIcon icon={faTwitterSquare} size="4x" color="lightgreen" />
                <FontAwesomeIcon icon={faYoutubeSquare} size="4x" color="#ff3c7f" />
            </div>
            </Container>
        </div>
    );
};

export default ClubDetails;