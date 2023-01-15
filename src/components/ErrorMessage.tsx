import React from "react";
import { Alert } from "@mui/material";
import { Stack } from "@mui/system";
import { useAppSelector } from "../app/hooks";

export function ErrorMessage() {
  const { errorMessage } = useAppSelector((state) => state.movies);
  if (!errorMessage || errorMessage === "") return null;
  return (
    <Stack
      sx={{ width: "100%", justifyContent: "center", alignItems: "center" }}
    >
      <Alert severity="error">{errorMessage}</Alert>
    </Stack>
  );
}
