import { DataGrid as MaterialDataGrid, DataGridProps } from "@mui/x-data-grid";
import { Card } from "./Card";

// interface Props extends DataGridProps {

// }

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function DataGrid(props: DataGridProps) {
  return (
    <Card sx={{ width: "100%" }} title="Example DataGrid" noPadding>
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
