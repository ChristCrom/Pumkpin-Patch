import React from "react";
import Card from "../../UI/Card";
import Modal from "../../UI/Modal";

const ProgramsPage = (props) => {
  return (
    <Modal>
      <Card>
        <p>Hello World Programs Page!</p>
        <button onClick={() => props.setPageSelector("")}>Close</button>
      </Card>
    </Modal>
  );
};

export default ProgramsPage;
