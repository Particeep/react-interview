import * as React from 'react';
import { FormControl, InputLabel, MenuItem, Select, OutlinedInput } from "@mui/material"

const MultiSelect = (props: {
    options: Array<string>,
    value: Array<string>,
    onSelect: any
}) => {
    return (
        <FormControl  sx={{ m: 1, width: 300 }}>
            <InputLabel>Category</InputLabel>
            <Select
                labelId="demo-multiple-name-label"
                id="demo-multiple-name"
                multiple
                value={props.value}
                onChange={props.onSelect}
                input={<OutlinedInput label="Name" />}
            >
                <MenuItem 
                    key="all" 
                    value="all" 
                >
                    All
                </MenuItem>
                {props.options.map((item) => (
                    <MenuItem 
                        key={item}
                        value={item}
                    >
                        {item}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    )
}

export default MultiSelect

