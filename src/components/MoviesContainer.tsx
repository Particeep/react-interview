import React from "react";
import { Box } from "@mui/material";
import { Stack } from "@mui/system";
import { SelectCategories } from "./SelectCategories";
import Pagination from "./Pagination";
import { ErrorMessage } from "./ErrorMessage";

export function MoviesContainer({ children }: { children: React.ReactNode }) {
  return (
    <Stack
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <SelectCategories />
      <Stack
        direction="column"
        spacing={1}
        sx={{
          width: "95vw",
          justifyContent: "center",
        }}
      >
        <ErrorMessage />

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "flex-start",
            padding: "0 20px",
          }}
        >
          {children}
        </Box>
        <Pagination />
      </Stack>
    </Stack>
  );
}
