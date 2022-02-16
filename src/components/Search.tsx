import { Button, Form, Row, Col, Container, InputGroup } from "react-bootstrap";
import React, {useMemo} from "react";
import { SearchProps } from "../interfaces";


interface eventHndletProps  { 
    event: React.FormEvent<HTMLFormElement>;
}




const Search: React.FC<SearchProps> = ({ submit, setSearch, search }) => {
    
    // const keyPress = (e: React.KeyboardEvent<unknown>) => {
    //     if (e.key === "Enter") {
    //         submit();
    //     }
    // };

    const keyPress = useMemo((e: <eventHndletProps>) => {
        if (e.key === "Enter") {
            submit();
        }
    }, [search]);


    return (
        <Container fluid='md'>
            <br />
            <Row>
                <Col>
                    <Form.Label>
                        <h1>
                            <strong>What book are you looking for ?</strong>
                        </h1>
                    </Form.Label>
                    <InputGroup className='mb-3'>
                        <Form.Control
                            placeholder='Book title'
                            type='text'
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            onKeyPress={ (e) => {
                                keyPress(e);
                            }}
                        />
                        <Button onClick={submit} variant='success'>
                            Search
                        </Button>{" "}
                    </InputGroup>
                </Col>
            </Row>
        </Container>
    );
};

export default Search;