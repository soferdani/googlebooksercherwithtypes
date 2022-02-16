import "./App.css";
import React from "react";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Cardbook from "./components/Cardbook";
import Search from "./components/Search";
import axios from "axios";


const App: React.FC = () => {
    const [search, setSearch] = useState<string>("");
    const [books, setBooks] = useState<Array<any>>([]);

    const handleSubmit = async () => {
        if (search === "") {
            return;
        }
        try {
            const response = await axios.get(
                `https://www.googleapis.com/books/v1/volumes?q=${search}`
            );
            setBooks(response.data.items);
        } catch (error) { 
            console.log(error);
        }
    };


    return (
        <div className='App' data-testid="app" >
            <Search submit={handleSubmit} setSearch={setSearch} search={search} />
            {/* <br />
            <div className='cardHolder'>
                {books?.map((book) => {
                    const image: string = book.volumeInfo.imageLinks
                        ? book.volumeInfo.imageLinks.thumbnail
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
                })}
            </div> */}
        </div>
    );
};


export default App;
