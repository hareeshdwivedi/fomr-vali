import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useUsers } from "../hooks/useUsers";
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
  Pagination,
  Box,
} from "@mui/material";

function UserList() {
  const { users, loading } = useUsers();
  const [page, setPage] = useState(1);
  const usersPerPage = 5; // Number of users per page

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  if (loading) {
    return <CircularProgress />;
  }

  const startIndex = (page - 1) * usersPerPage;
  const endIndex = startIndex + usersPerPage;
  const displayedUsers = users.slice(startIndex, endIndex);

  return (
    <>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Phone</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {displayedUsers.map((user) => (
              <TableRow key={user.id}>
                <TableCell>{`${user.firstName} ${user.lastName}`}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.phone}</TableCell>
                <TableCell>
                  <Link to={`/users/${user.id}`}>View Details</Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        {users.length === 0 && (
          <Typography variant="body1" sx={{ mt: 2 }}>
            No users found.
          </Typography>
        )}
      </TableContainer>
      <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
        <Pagination
          count={Math.ceil(users.length / usersPerPage)}
          page={page}
          onChange={handleChangePage}
          sx={{ "& .MuiPaginationItem-root": { color: "primary.main" } }}
        />
      </Box>
    </>
  );
}

export default UserList;
