import React from 'react';

class Question extends React.Component{
    
    render(){
        const list = this.props.questions;
        console.log(list);


        return [
            <li>{list[0]}</li>
        ];
 }
}  

export default Question;