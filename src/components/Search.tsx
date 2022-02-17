import { Button, Form, Row, Col, Container, InputGroup } from "react-bootstrap";
import React, {useCallback, useState} from "react";
import { SearchProps } from "../interfaces";

const Search: React.FC<SearchProps> = ({ submit, setSearch, search }) => {
    const [countEnterPress, setCountEnterPress] = useState<number>(0);
    
    const keyPress = (e: React.KeyboardEvent<unknown>) => {
        if (e.key === "Enter") {
            setCountEnterPress(countEnterPress + 1);            
            onSubmit();
        }
    };
    
    const onChange = useCallback((e) => {
        setCountEnterPress(0);
        if (e.target.value !== search) {
            setSearch(e.target.value);
        }
    }, [search]);

    const onSubmit = () => {
        if (search !== "" && countEnterPress === 0) { 
            submit();
        }
    };

    return (
        <Container fluid='md'>
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
                            onChange={onChange}
                            onKeyPress={keyPress}
                        />
                        <Button onClick={onSubmit} variant='success'>
                            Search
                        </Button>{" "}
                    </InputGroup>
                </Col>
            </Row>
        </Container>
    );
};

export default Search;