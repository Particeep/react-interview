import React from 'react';
import { Autocomplete, TextField } from '@mui/material';

const Filter = ({ categories, value, onChange }) => {
  return (
    <Autocomplete
      multiple
      options={categories}
      value={value}
      onChange={(event, newValue) => onChange(newValue)}
      renderInput={(params) => (
        <TextField {...params} label="Filter by category" variant="outlined"  sx={{ width: 200 }} />
      )}
    />
  );
};

export default Filter;
