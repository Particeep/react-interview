import React from "react";
import { Box } from "@mui/material";
import { Stack } from "@mui/system";
import { SelectCategories } from "./SelectCategories";
import Pagination from "./Pagination";
import { ErrorMessage } from "./ErrorMessage";

export function MoviesContainer({ children }: { children: React.ReactNode }) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Stack
        direction="column"
        spacing={1}
        sx={{
          width: "100vw",
          maxWidth: "1200px",
          justifyContent: "center",
        }}
      >
        <SelectCategories />
        <ErrorMessage />
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "flex-start",
            width: "100%",
          }}
        >
          {children}
        </Box>
        <Pagination />
      </Stack>
    </Box>
  );
}
