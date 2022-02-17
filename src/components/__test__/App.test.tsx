// import { test, expect } from "@testing-library/react";
import { render, screen, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "../../App";
import React from "react";
import Cardbook from "../Cardbook";


afterEach(() => {
    cleanup();
});

test("should render app component", () => {
    render(<App />);
    const appElement = screen.getByTestId("App");
    expect(appElement).toBeInTheDocument();
});


test("should render card book item", () => { 
    const cardBookInfo = {
        title: "test title",
        imageUrl: "https://www.mobileread.com/forums/attachment.php?attachmentid=111264&d=1378642555",
        description: "test description"
    };
    render(<Cardbook title={cardBookInfo.title} imageUrl={cardBookInfo.imageUrl} description={cardBookInfo.description} />);
    const cardBookElement = screen.getByTestId("card");
    expect(cardBookElement).toHaveTextContent(cardBookInfo.title); 
    expect(cardBookElement).toHaveTextContent(cardBookInfo.description);
});
