import React from "react";
import SentimentDissatisfiedIcon from "@mui/icons-material/SentimentDissatisfied";
import { Typography } from "@mui/material";
import { Stack } from "@mui/system";

export function NoMovie() {
  return (
    <Stack
      sx={{ width: "100%", justifyContent: "center", alignItems: "center" }}
    >
      <SentimentDissatisfiedIcon sx={{ fontSize: 100 }} />
      <Typography variant="h6" gutterBottom component="div">
        No movies found
      </Typography>
    </Stack>
  );
}
