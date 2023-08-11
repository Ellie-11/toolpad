import * as React from "react";
import { Typography, Box } from "@mui/material";
import { createComponent } from "@mui/toolpad/browser";
import Grid from '@mui/material/Grid';
import Tooltip from '@mui/material/Tooltip';
import { DataGrid, GridColDef } from '@mui/x-data-grid';

export interface MyComponentProps {
  msg: string;
}

function MyComponent({ msg }: MyComponentProps) {
  const aaaa = {
    backgroundColor: "red",
    border: "1px solid",
  };

  const columns: GridColDef[] = [
    {
      field: 'id',
      headerClassName: 'super-app-theme--header',
      headerAlign: 'center',
    },
    {
      field: 'name',
      headerClassName: 'super-app-theme--header',
      headerAlign: 'center',
    },
    {
      field: 'value',
      headerClassName: 'super-app-theme--header',
      headerAlign: 'center',
    },
  ];

  const rows = [
    { id: 0, name: "aaaa", value: 20 },
    { id: 1, name: "aaaa", value: 20 },
    { id: 2, name: "aaaa", value: 20 },
    { id: 3, name: "aaaa", value: 20 },
    { id: 4, name: "aaaa", value: 100 },
    { id: 5, name: "aaaa", value: 100 },
    { id: 6, name: "aaaa", value: 100 },
  ];

  return (
    <Box sx={{
      height: 300,
      width: '100%',
      '& .super-app-theme--header': {
        backgroundColor: 'orange',
      },
    }}>
      123

      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5, 10, 20]}
        checkboxSelection
        sx={{
          boxShadow: 2,
          border: 2,
          background: '#F5F5F7',
          borderColor: 'primary.light',
          '& .MuiDataGrid-cell:hover': {
            color: 'orange',
            // 樣式內容在這裡繼續...
          },
        }}
      />
    </Box >
  );
}

export default createComponent(MyComponent, {
  argTypes: {
    msg: {
      type: "string",
      default: "Hello world!",
    },
  },
});
