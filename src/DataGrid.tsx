import { DataGrid as MaterialDataGrid, DataGridProps } from "@mui/x-data-grid";
import { ReactElement } from "react";
import { Card } from "./Card";

export function DataGrid(props: DataGridProps): ReactElement {
  return (
    <Card title="Example DataGrid" noPadding>
      <MaterialDataGrid
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...props}
      />
    </Card>
  );
}

DataGrid.defaultProps = {
  pageSize: 15,
  rowsPerPageOptions: [15],
  checkboxSelection: true,
  disableSelectionOnClick: true,
};
