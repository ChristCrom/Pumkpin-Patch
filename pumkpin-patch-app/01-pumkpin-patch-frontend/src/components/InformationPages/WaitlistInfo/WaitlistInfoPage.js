import React from "react";
import Card from "../../UI/Card";
import Modal from "../../UI/Modal";

const WaitlistInfoPage = props =>{
    return(
        <Modal>
            <Card>
                <p>Hello World Waitlist Information!</p>
                <button onClick={()=>props.setPageSelector('')}>Close</button>
            </Card>
        </Modal>
    );
};

export default WaitlistInfoPage;