import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
} from "@mui/material";

export const MuiTable = () => {
  return (
    <TableContainer component={Paper} sx={{ maxHeight: "300px" }}>
      <Table aria-label="simple table" stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>First name</TableCell>
            <TableCell>Last name</TableCell>
            <TableCell align="center">Email</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData.map((row) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.first_name}</TableCell>
              <TableCell>{row.last_name}</TableCell>
              <TableCell align="center">{row.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

const tableData = [
  {
    id: 1,
    first_name: "Karlotte",
    last_name: "Gerwood",
    email: "kgerwood0@amazon.co.uk",
    gender: "Female",
    ip_address: "75.19.111.17",
  },
  {
    id: 2,
    first_name: "Marwin",
    last_name: "Really",
    email: "mreally1@mozilla.com",
    gender: "Male",
    ip_address: "255.55.74.29",
  },
  {
    id: 3,
    first_name: "Urbano",
    last_name: "Nolda",
    email: "unolda2@businesswire.com",
    gender: "Male",
    ip_address: "5.134.35.50",
  },
  {
    id: 4,
    first_name: "Guntar",
    last_name: "Guidi",
    email: "gguidi3@symantec.com",
    gender: "Male",
    ip_address: "134.67.250.36",
  },
  {
    id: 5,
    first_name: "Alexander",
    last_name: "Tumility",
    email: "atumility4@constantcontact.com",
    gender: "Male",
    ip_address: "109.199.234.8",
  },
  {
    id: 6,
    first_name: "Wanids",
    last_name: "Tramel",
    email: "wtramel5@reverbnation.com",
    gender: "Female",
    ip_address: "222.118.252.202",
  },
  {
    id: 7,
    first_name: "Chucho",
    last_name: "Vondrasek",
    email: "cvondrasek6@nsw.gov.au",
    gender: "Male",
    ip_address: "156.249.247.88",
  },
  {
    id: 8,
    first_name: "Marjy",
    last_name: "Choules",
    email: "mchoules7@census.gov",
    gender: "Female",
    ip_address: "76.31.165.68",
  },
  {
    id: 9,
    first_name: "Noemi",
    last_name: "Abrahamsen",
    email: "nabrahamsen8@java.com",
    gender: "Female",
    ip_address: "242.189.80.176",
  },
  {
    id: 10,
    first_name: "Ax",
    last_name: "Varga",
    email: "avarga9@bandcamp.com",
    gender: "Male",
    ip_address: "57.3.74.211",
  },
];
