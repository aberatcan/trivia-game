import React, { Component } from 'react';

class Welcome extends Component {
    
    render(){
        return (
            <div> 
                <h1 align="center">Welcome to Quiz Game !!</h1>
                <li align="center"> 
                There are 10 multiple questions and 4 choices for each question
                </li>
                <li align="center"> 
                You can choose the category and difficulty of the questions
                </li>
                <li align="center"> 
                You have a joker that can disable two wrong answers.
                </li>
                <li align="center"> 
                There is a time limit for each question. A question must be answered in 15 seconds.
                </li>
                <li align="center"> 
                You can earn points each of right answer according to remaining time
                </li>
                <form>
                    <p>Select Difficulty:</p>
                    <input type="radio" id="easy" ></input>
                    <label for ="easy">Easy</label>
                    <input type="radio" id="normal"></input>
                    <label for="normal">Normal</label>
                    <input type="radio" id="hard"></input>
                    <label for="normal">Hard</label>
                </form>
                <form>
                    <p>Select Category:</p>
                    <label for="category">Choose a category: </label>
                    <select id="category">
                        <option>option 1</option>
                        <option>option 2</option>
                        <option>option 3</option>
                        <option>option 4</option>
                        <option>option 5</option>
                        <option>option 6</option>
                    </select>
                </form>

            </div>
        );
    }
    
}

export default Welcome;