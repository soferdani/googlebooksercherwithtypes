import "./App.css";
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Spinner } from "react-bootstrap";
import Cardbook from "./components/Cardbook";
import Search from "./components/Search";
import axios , {AxiosResponse} from "axios";
import { book } from "./interfaces";

const App: React.FC = () => {
    const [search, setSearch] = useState<string>("");
    const [books, setBooks] = useState<Array<book>>([]);
    const [serverErrorFlag, setServerErrorFlag] = useState<boolean>(false);
    const [reqFlag, setReqFlag] = useState<boolean>(false);
  
    const errorValues = {
        title: "There seems to be a problem",
        description: "Please try again later",
        imageUrl: "https://www.mobileread.com/forums/attachment.php?attachmentid=111264&d=1378642555"
    };  

    const handleSubmit = async () => {
        if (!reqFlag) {
            setBooks([]);
            try {
                setReqFlag(true);
                const response: AxiosResponse = await axios.get(
                    `https://www.googleapis.com/books/v1/volumes?q=${search}`
                );
                setBooks(response.data.items);
                setReqFlag(false);
                setServerErrorFlag(false);
            } catch (error) { 
                setServerErrorFlag(true);
                setReqFlag(false);
                console.log(error);
            }
        }
    };

    return (
        <div className='App' data-testid="App" >
            <Search submit={handleSubmit} setSearch={setSearch} search={search} />
            <div className='cardHolder'>
                {reqFlag ? 
                    <div className='spinner'>
                        <Spinner animation="border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </Spinner>
                    </div>
                    : null}
                {serverErrorFlag ? <Cardbook title={errorValues.title} imageUrl={errorValues.imageUrl} description={errorValues.description} /> : null}
                {books ? books.map(book => {
                    const image: string = book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail
                        : "https://www.mobileread.com/forums/attachment.php?attachmentid=111264&d=1378642555";
                    const title: string = book.volumeInfo.title;
                    const description: string = book.volumeInfo.description;
                    return (
                        <Cardbook
                            key={book.id}
                            title={title}
                            imageUrl={image}
                            description={description}
                        />
                    );
                }) : null}
            </div>
        </div>
    );
};

export default App;