import React, { useState } from "react";
import Input from "../Input";

const InputPassword = (props) => {
    const [type, setType] = useState(props.type || 'password');

    const handleClick = () => {
        setType(type === 'password' ? 'text': 'password');
    }

    const style = {
        position: 'relative',
    }

    const styleButton = {
        background: 'white',
        position: 'absolute',
        top: 20,
        right: 0,
    }

    const newProps = {...props, type};

    return (
        <div style={style}>
            <Input {...newProps}/>
            <button style={styleButton} onClick={handleClick} type="button">
                {type === 'password' ? 'show' : 'hide'}
            </button>
        </div>
    )
}

export default InputPassword;