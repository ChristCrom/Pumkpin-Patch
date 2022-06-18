import React from "react";
import Card from "../../UI/Card";
import Modal from "../../UI/Modal";

const AboutUsPage = props =>{
    return (
        <Modal>
            <Card>
                <p>Hello World!</p>
                <button onClick={()=>props.setPageSelector('')}>Close</button>
            </Card>
        </Modal>
    )
};

export default AboutUsPage;