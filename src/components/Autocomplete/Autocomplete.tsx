import { ReactElement } from "react";

import { Autocomplete as MaterialAutocomplete, TextField } from "@mui/material";

export function Autocomplete(): JSX.Element {
  return (
    <MaterialAutocomplete
      options={top100Films}
      getOptionLabel={(option: any) => option.title}
      renderInput={(params) => (
        <TextField {...params} label="Combo box" variant="outlined" fullWidth />
      )}
    />
  );
}

const top100Films = [
  { title: "The Shawshank Redemption", year: 1994 },
  { title: "The Godfather", year: 1972 },
  { title: "The Godfather: Part II", year: 1974 },
  { title: "The Dark Knight", year: 2008 },
  { title: "12 Angry Men", year: 1957 },
];
