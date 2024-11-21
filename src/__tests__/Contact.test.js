import { render, screen } from "@testing-library/react"
import  Contact  from "../components/Contact";
import "@testing-library/jest-dom";

describe("Contact Page Test cases",()=>{

    // we group together multiple test's inside describe block.
    // we can write it() or test() both are same...

    test("Contact Page should be loaded",()=>{

        render(<Contact/>);
        const heading=screen.getByRole("heading");
    
        expect(heading).toBeInTheDocument();
    
    });

    test("Contact Page should have send button",()=>{
    
        render(<Contact/>);
        const button=screen.getByRole("button");
        // or 
        const button2=screen.getByText('Send')
    
        expect(button).toBeInTheDocument();
        expect(button2).toBeInTheDocument();
    
    });

    test("Should load label name inside component ",()=>{
    
        render(<Contact/>);
        const labelname=screen.getByLabelText("Your Email")
       
        
        expect(labelname).toBeInTheDocument();
    
    });

    test("Should load three input boxes inside component ",()=>{
    
        render(<Contact/>);
        const inputboxes=screen.getAllByRole("textbox");
         console.log(inputboxes.length);
        
        expect(inputboxes.length).toBe(3);
    
    })

})

