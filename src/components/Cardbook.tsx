import React from "react";
import { Card } from "react-bootstrap";
import {CardbookProps} from "../interfaces";

const Cardbook: React.FC<CardbookProps> = ({imageUrl,title,description}) => {
    return (
        <div className='card' data-testid="card">
            <Card border='success' style={{ width: "18rem" }}>
                <Card.Img variant='top' src={imageUrl} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>{description}</Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};


export default Cardbook;