import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Button } from "@mui/material";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const ExpenseTable = ({ expenses }) => {
  return (
    <div className="mt-10">
      <TableContainer component={Paper} sx={{ maxWidth: 900 }}>
        <Table sx={{ minWidth: 650 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Name</StyledTableCell>
              <StyledTableCell align="right">Amount&nbsp;(g)</StyledTableCell>
              <StyledTableCell align="right">Date</StyledTableCell>
              <StyledTableCell align="right">Category</StyledTableCell>
              <StyledTableCell align="right">Edit</StyledTableCell>
              <StyledTableCell align="right">Delete</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {expenses.map((expense) => {
              const dateString = expense.date;
              const date = new Date(dateString);
              const year = date.getFullYear();
              const month = date.getMonth();
              const day = date.getDay();
              return (
                <StyledTableRow
                  key={expense.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <StyledTableCell component="th" scope="row">
                    {expense.name}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {expense.amount}
                  </StyledTableCell>
                  <StyledTableCell align="right">{`${day}-${
                    month + 1
                  }-${year}`}</StyledTableCell>
                  <StyledTableCell align="right">
                    {expense.category}
                  </StyledTableCell>
                  <StyledTableCell align="right" className="">
                    <Button className="rounded-full text-green-500">
                      <EditIcon className="text-green-500" />
                    </Button>
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    <Button className="rounded-full text-red-500">
                      <DeleteIcon className="text-red-600" />
                    </Button>
                  </StyledTableCell>
                </StyledTableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default ExpenseTable;
