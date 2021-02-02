import React from 'react';
import './Result.css';
const Result = ({ solution }) => {
    return (
        <div className="wrapper">
        {solution.slice(0,1).map((user,i) =>{
            return(
                <div className="inner-wrapper">
                <p className="name grow pointer">{solution[i].name}</p>
                <p className="prob">{'Probablity:'} {solution[i].value}</p>
                </div>
            )
        })}
        {solution.slice(0,5).map((user,i) =>{
            return(
                <div className="inner-wrapper-two">
                <p className="name2">{solution[i+1].name}</p>
                <p className="prob2">{'Probablity:'} {solution[i+1].value}</p>
                
                </div>
            )
        })}
        </div>
    )
    }

export default Result;