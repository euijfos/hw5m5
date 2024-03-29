import React, {useState} from 'react';
import {useDispatch} from "react-redux";

const UserFrom = () => {
    const dispatch = useDispatch()
    const [fromData, setFromData] = useState({
        name:'',
        lastName: '',
        age:''
    })


    const changeInput = (e) => {
        const {name, value} = e.target
        setFromData((prevData) => ({
            ...prevData,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch({
            type:'ADD_USER',
            payload: fromData
        })
        setFromData({
            name:'',
            lastName: '',
            age:''
        })
    }
    return (
        <form>
            <input type="text" name='name' placeholder='name' value={fromData.name} onChange={changeInput}/>
            <input type="text" name='lastName' placeholder='last-name' value={fromData.lastName} onChange={changeInput}/>
            <input type="text" name='age' placeholder='age' value={fromData.age} onChange={changeInput}/>
            <button onClick={handleSubmit}>add</button>
        </form>
    );
};

export default UserFrom;