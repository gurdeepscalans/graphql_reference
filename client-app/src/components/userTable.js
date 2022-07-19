import * as React from "react";
import { DataGrid } from "@material-ui/data-grid";

const columns = [
  {
    field: "name",
    headerName: "Name",
    width: 400,
  },
  {
    field: "username",
    headerName: "User name",
    width: 400,
  },
  {
    field: "email",
    headerName: "Email",
    width: 400,
  },
];
export default function UserTable({ users }) {
  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={users}
        columns={columns}
        pageSize={5}
        checkboxSelection={false}
        hideFooter={true}
        filterMode={false}
        disableColumnMenu
        disableColumnFilter
        disableColumnSelector
      />
    </div>
  );
}
