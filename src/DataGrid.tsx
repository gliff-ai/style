import { DataGrid as MaterialDataGrid, DataGridProps } from "@mui/x-data-grid";
import { ReactElement } from "react";
import { Card } from "@/components";

interface Props extends DataGridProps {
  title: string;
}

export function DataGrid({
  title,
  pageSize = 60,
  rowsPerPageOptions = [15],
  checkboxSelection = true,
  disableSelectionOnClick = true,
  ...rest
}: Props): ReactElement {
  return (
    <Card title={title} internalPadding>
      <MaterialDataGrid
        pageSize={pageSize}
        rowsPerPageOptions={rowsPerPageOptions}
        checkboxSelection={checkboxSelection}
        disableSelectionOnClick={disableSelectionOnClick}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...rest}
      />
    </Card>
  );
}
