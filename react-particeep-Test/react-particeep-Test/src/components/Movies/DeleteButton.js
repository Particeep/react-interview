import { Button, Grid, Modal, Text } from "@nextui-org/react";
import React, { useState } from "react";
import { DeleteIcon } from "../../assets/icons/DeleteIcon";

function DeleteButton({ onClick }) {
  const [visible, setVisible] = useState(false);

  const handleCancel = () => {
    setVisible(false);
  };
  const handleDelete = () => {
    setVisible(false);
    onClick();
  };
  const showConfirmation = () => {
    setVisible(true);
  };
  return (
    <>
      <Button auto  light color="error" onClick={showConfirmation}>
        <DeleteIcon fill="white" />
      </Button>
      <Modal closeButton aria-labelledby="modal-title" open={visible} onClose={handleCancel}>
        <Modal.Header>
          <Text id="modal-title" size={18}>
            <b>Confirmation</b>
          </Text>
        </Modal.Header>
        <Modal.Body>
          <Grid.Container css={{ borderRadius: "14px", padding: "0.75rem", maxWidth: "330px" }}>
            <Text>Are you sure you want to delete this movie ?</Text>
          </Grid.Container>
        </Modal.Body>
        <Modal.Footer>
          <Button auto light onClick={handleCancel}>
            Cancel
          </Button>
          <Button auto onClick={handleDelete} color="success">
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default DeleteButton;
