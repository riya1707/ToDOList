import React from "react";
import { AiFillCloseCircle } from 'react-icons/ai';

const ToDoLists = (props)=> {

    
    return (
    <>
        <div>
        <li> {props.text} _      
            <AiFillCloseCircle color="#8566aa" size="25px" align="right"
            onClick={()=> {
                props.onSelect(props.id);
            }}/>
        </li>
        </div>
    </>
    );
};

export default ToDoLists;