import React, { useState } from "react";
import { Grid, Button, Popover } from "@nextui-org/react";
import { ChevronLeftIcon } from "../../assets/icons/ChevronLeftIcon";

function Pagination({ pagination, onChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const itemsPerPageList = [4, 8, 12];


  const prevPage = () => {
    setIsOpen(false);
    onChange({ ...pagination, page: pagination.page - 1 });
  };

  const nextPage = () => {
    setIsOpen(false);
    onChange({ ...pagination, page: pagination.page + 1 });
  };

  return (
    <Grid.Container gap={2}>
      <Grid xs={12} css={{ justifyContent: "flex-end" }}>
        <Button auto flat color="primary" onClick={prevPage} disabled={!pagination.hasPreviousPage}>
          <ChevronLeftIcon />
        </Button>
        <Popover isOpen={isOpen}>
          <Popover.Trigger>
            <Button
              auto
              color={"primary"}
              
            >
              {pagination.perPage}
            </Button>
          </Popover.Trigger>
          
        </Popover>
        <Button auto flat color="primary" onClick={nextPage} disabled={!pagination.hasNextPage}>
          <ChevronLeftIcon style={{ transform: "rotate(180deg)" }} />
        </Button>
      </Grid>
    </Grid.Container>
  );
}

export default Pagination;
