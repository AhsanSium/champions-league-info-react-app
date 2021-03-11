import React from 'react';
import { useHistory } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';
import { Card, Button } from 'react-bootstrap';

const Club = (props) => {

    const { strTeam, strTeamBadge, strCountry, idTeam } = props.club;

    const history = useHistory();
    const handleExploreBtn = (e) => {
        const url = `club/${idTeam}`;
        history.push(url);
    }


    return (
        <div className="col mb-5">
            
            <Card className="h-100 shadow-lg ">
                <Card.Img className="img-fluid p-4" style={{
                    width: '90%',display: 'block',
                    marginLeft: 'auto',
                    marginRight: 'auto'}} rounded src={strTeamBadge} />
            <Card.Title className="p-2 text-center display-4">{strTeam}</Card.Title>
                <Card.Text className="p-2 text-center ">
                    Country: {strCountry}
                </Card.Text>
                <Card.Footer>
                    <Button onClick={() => handleExploreBtn(idTeam)} className="btn btn-success"> Explore  <FontAwesomeIcon icon={faArrowAltCircleRight} /></Button>
                </Card.Footer>
            </Card>
        </div>
    );
};

export default Club;