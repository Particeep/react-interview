import React, { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";

export default function ConfirmDeleteModale({
  isOpen,
  onConfirm,
  onCancel,
  movieTitle,
}: {
  isOpen: boolean;
  onConfirm: () => void;
  onCancel: () => void;
  movieTitle: string;
}) {
  return (
    <Dialog
      open={isOpen}
      onClose={onCancel}
      aria-labelledby="confirm-delete-dialog-title"
      aria-describedby="confirm-delete-dialog-description"
    >
      <DialogTitle id="confirm-dialog-title">
        Are you sure you want to delete <strong>{movieTitle}</strong>?
      </DialogTitle>
      <DialogActions>
        <Button onClick={onCancel}>Cancel</Button>
        <Button onClick={onConfirm} autoFocus>
          OK
        </Button>
      </DialogActions>
    </Dialog>
  );
}
