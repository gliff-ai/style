import { DataGrid as MaterialDataGrid, DataGridProps } from "@mui/x-data-grid";
import { ReactElement } from "react";
import { Card } from "./Card";

interface Props extends DataGridProps {
  title: string;
  pageSize?: number;
  rowsPerPageOptions?: number[];
  checkboxSelection?: boolean;
  disableSelectionOnClick?: boolean;
}
export function DataGrid(props: Props): ReactElement {
  const { title, ...rest } = props;
  return (
    <Card title={title} noPadding>
      <MaterialDataGrid
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...rest}
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
