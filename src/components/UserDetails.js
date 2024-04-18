import React from "react";
import { useParams } from "react-router-dom";
import { useUserDetails } from "../hooks/useUsers";
import {
  Table,
  TableContainer,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  CircularProgress,
  Typography,
} from "@mui/material";

function UserDetails() {
  const { id } = useParams();
  const { user, loading } = useUserDetails(id);

  if (loading) {
    return <CircularProgress />;
  }

  if (!user) {
    return <Typography variant="body1">User not found.</Typography>;
  }

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableBody>
          <TableRow>
            <TableCell component="th" scope="row">
              First Name
            </TableCell>
            <TableCell>{user.firstName}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell component="th" scope="row">
              Last Name
            </TableCell>
            <TableCell>{user.lastName}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell component="th" scope="row">
              Email
            </TableCell>
            <TableCell>{user.email}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell component="th" scope="row">
              Phone
            </TableCell>
            <TableCell>{user.phone}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell component="th" scope="row">
              Age
            </TableCell>
            <TableCell>{user.age}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell component="th" scope="row">
              Gender
            </TableCell>
            <TableCell>{user.gender}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell component="th" scope="row">
              City
            </TableCell>
            <TableCell>{user.address.city}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell component="th" scope="row">
              Street
            </TableCell>
            <TableCell>{user.address.street}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell component="th" scope="row">
              Zip Code
            </TableCell>
            <TableCell>{user.address.zipCode}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default UserDetails;
