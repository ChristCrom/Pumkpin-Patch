import React from "react";
import Card from "../UI/Card";
import Modal from "../UI/Modal";


const ForgotPassword = props => {
    const CancelHandler = event =>{
        props.onForgotPassword(false);
    }
    return (
        <Modal>
            <Card>
                <h1>Hello World!</h1>
                <button onClick={CancelHandler}>Cancel</button>
            </Card>
        </Modal>
    );
};

export default ForgotPassword;