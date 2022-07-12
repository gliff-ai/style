/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable react/jsx-props-no-spreading */
import { DataGridProps } from "@mui/x-data-grid";
import { DataGrid } from "./DataGrid";

export default {
  title: "DataGrid",
  component: DataGrid,
};

interface Props extends DataGridProps {
  title: string;
}

const columns = [
  { field: "id", headerName: "ID", width: 90, editable: false },
  {
    field: "lastName",
    headerName: "Last name",
    width: 150,
    editable: false,
    hideable: false, // Used to make column unhideable even when you select hide all columns. Meaning you can reshow all the columns when you click the three dots.
  },
  {
    field: "firstName",
    headerName: "First name",
    width: 150,
    editable: false,
  },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    width: 110,
    editable: false,
  },
];

const rows = [
  { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
  { id: 6, lastName: "Snow", firstName: "Jon", age: 35 },
  { id: 7, lastName: "Lannister", firstName: "Cersei", age: 42 },
  { id: 8, lastName: "Lannister", firstName: "Jaime", age: 45 },
  { id: 9, lastName: "Stark", firstName: "Arya", age: 16 },
  { id: 10, lastName: "Targaryen", firstName: "Daenerys", age: null },
  { id: 11, lastName: "Lannister", firstName: "Jaime", age: 45 },
  { id: 12, lastName: "Stark", firstName: "Arya", age: 16 },
];
// A wrapper function from Storybook that allows you to pass in props to your component. We use this for showing controls
const Template = (args: Props) => <DataGrid {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  title: "Example Datagrid",
  columns: [...columns],
  rows: [...rows],
  sx: { height: "400px" },
};
