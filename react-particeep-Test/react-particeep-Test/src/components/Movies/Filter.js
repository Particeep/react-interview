import { Button, Checkbox, Grid, Popover } from "@nextui-org/react";
import React from "react";

export default function Filter({ options, values = [], onChange }) {
  return (
    <Grid
      css={{
        display: "flex",
        justifyContent: "flex-end",
      }}
    >
      <Popover placement={"bottom-right"}>
        <Popover.Trigger>
          <Button flat auto color="primary" size="sm">
            Filters
          </Button>
        </Popover.Trigger>
        <Popover.Content>
          <Grid.Container css={{ padding: "1rem" }}>
            <Grid>
              <Checkbox.Group label={"Select categories"} color="primary" value={values} onChange={onChange} defaultValue={values}>
                {options
                  ? options.map((option, i) => (
                      <Checkbox key={option + i} value={option} css={{ textTransform: "capitalize" }} >
                        {option}
                      </Checkbox>
                    ))
                  : null}
              </Checkbox.Group>
            </Grid>
          </Grid.Container>
        </Popover.Content>
      </Popover>
    </Grid>
  );
}
