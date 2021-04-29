import React, { ChangeEvent } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { ResponseType } from '../../api/products-api';
import { useDispatch } from 'react-redux';
import { updateGoodCountAC } from '../../redux/products-reducer/actions';

const useStyles = makeStyles({
  table: {
    maxWidth: 1080,
  },
});

export default function CustomTable({categories}: CustomTablePropsType) {
  const dispatch = useDispatch()
  const classes = useStyles();

  // const changeCountHandler = (e: ChangeEvent<HTMLInputElement>, id: string) => {
  //   dispatch(updateGoodCountAC(+e.currentTarget.value, id))
  // }


  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Id</TableCell>
            <TableCell align="center">Название товара</TableCell>
            <TableCell align="center">Цена</TableCell>
            <TableCell align="center">Количество</TableCell>
            <TableCell align="center">Сумма</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {categories.map((categorie) => {
            debugger
            return (
              <>    
                {categorie.goods.map((good) => {
                  debugger
                  const changeCountHandler = (e: ChangeEvent<HTMLInputElement>) => {
                    dispatch(updateGoodCountAC(+e.currentTarget.value, categorie.rid, good.gid))
                  }

                  return (
                    <> 
                    <TableRow>      
                      <TableCell align='center'>{good.gid} </TableCell>
                      <TableCell align="center">{good.gname}</TableCell>
                      <TableCell align="center">{good.gprice}</TableCell>
                      <TableCell align="center">
                        <input type='number' onChange={changeCountHandler} value={good.gstore}/>
                        </TableCell>
                      <TableCell align="center">8000</TableCell> 
                      </TableRow>        
                    </>
                  )
                })}
              </>
            )
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}


// types
type CustomTablePropsType = {
  categories: ResponseType
}


