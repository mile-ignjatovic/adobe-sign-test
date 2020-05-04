import React, {useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import classes from './StickyHeadTable.module.css';
import Button from '../../../shared/components/Button/Button';
import {ManageStoreContext} from '../ManageStore';

const columns = [
  { id: 'recipients', label: 'RECIPIENTS', minWidth: 170 },
  { id: 'title', label: 'TITLE', minWidth: 170 },
  {
      id: 'modified',
      label: 'MODIFIED',
      minWidth: 170,
      align: 'right',
  }
];

const useStyles = makeStyles({
    root: {
        width: '100%',
    },
    container: {
        maxHeight: 'calc(100vh - 16.5rem)',
    },
});
  
const StickyHeadTable = (props) => {
    const manageStore = useContext(ManageStoreContext);
    const tableClasses = useStyles();
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
  
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };
  
    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };
  
    return (
        <Paper className={tableClasses.root}>
            <TableContainer className={tableClasses.container}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            {columns.map((column) => (
                                <TableCell
                                    key={column.id}
                                    align={column.align}
                                    style={{ minWidth: column.minWidth }}
                                >
                                    {column.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {manageStore.tableDataSet.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                            return (
                                <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                                    {columns.map((column) => {
                                        const value = row[column.id];
                                        return (
                                            <TableCell key={column.id} align={column.align}>
                                                {column.id !== 'modified' ? value : (
                                                    <div className={classes.ValueBox}>
                                                        <div className={classes.ButtonGroup}>
                                                            <Button>Open</Button>
                                                            <Button type='white'>Edit</Button>
                                                        </div>
                                                        <div className={classes.Value}>
                                                            {value}
                                                        </div>
                                                    </div>
                                                )}
                                            </TableCell>
                                        );
                                    })}
                                </TableRow>
                            );
                        })}
                    </TableBody>

                </Table>
            </TableContainer>

            <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={manageStore.tableDataSet.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
            />
        </Paper>
    );
}

export default  StickyHeadTable;