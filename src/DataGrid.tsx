import { Box } from "@mui/system";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Card } from "./Card";

interface Props {
  columns: GridColDef[];
  rows: { [x: string]: any }[];
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function DataGridDemo({ columns, rows }: Props) {
  return (
    <Card title="Example DataGrid" noPadding>
      <Box style={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={15}
          rowsPerPageOptions={[15]}
          checkboxSelection
          disableSelectionOnClick
        />
      </Box>
    </Card>
  );
}
