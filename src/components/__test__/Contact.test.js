import Contact from "../Contact"
import "@testing-library/jest-dom"
import { render,screen } from "@testing-library/react";

test ("should load Contact Us component", ()=>{
    render(<Contact/>);

    const button = screen.getByRole("button")
    
    // Assertion
    expect(button).toBeInTheDocument();

})
test ("should load two h1 tags", ()=>{
    render(<Contact/>)
    const heading = screen.getByRole("button")
    // Assertion
    expect(heading).toBeInTheDocument()
    
})


