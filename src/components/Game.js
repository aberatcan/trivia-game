import React from 'react';
import {Component} from 'react';
import Welcome from './Welcome';
import Question from './Question';

class Game extends Component {
    constructor(props){
        super(props);
        this.state ={
            isLoaded:false,
            questions:null,
        }
    }
    /*async componentDidMount() {
        const url = 'https://opentdb.com/api.php?amount=10&category=23&difficulty=easy&type=multiple'
        const response = await fetch(url);
        const data = await response.json();
        this.setState({questions:data.results,isLoaded:true});

       
      
    }*/
    componentDidMount(){
        const url = 'https://opentdb.com/api.php?amount=10&category=23&difficulty=easy&type=multiple';
        fetch(url).then(res=> res.json()).then(
            (data) => {
                this.setState({
                    isLoaded:true,
                    questions:data.results
                });
            }
        )
    }
    
    render(){
        
      
        console.log(this.state.questions);
          return(
            <div>
               {this.state.isLoaded
                ? <li>{this.state.questions[0].question}</li> : 'Loading'}
            </div>
        
         );
    }        
    
}

export default Game;