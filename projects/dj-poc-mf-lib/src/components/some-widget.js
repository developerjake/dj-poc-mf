import React from 'react';

import { Card, Grid, Tooltip } from '@mui/material';
import { makeStyles } from '@mui/styles';

import Text from './truncating-text';

const grey = '#F8F8F8'
const useStyles = makeStyles({
  header: {
    height: 40,
    padding: '14px 14px 12px 14px',
    display: 'flex',
    alignItems: 'left',
    backgroundColor: grey,
    fontWeight: 500
  },
  row: {
    height: 16,
    padding: '8px 16px 8px 16px',
    display: 'flex',
    alignItems: 'center',
    fontWeight: 400,
  },
  block: {
    dislpay: 'block',
    lineHeight: '21px', // 16 text 5 space
  },
  secondaryText: {
    color: '#686868',
    margin: '5px 0 0 0',
    maxWidth: '145px',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  }
});

export default function SomeWidget(props) {
  const classes = useStyles();

  return (
    <Card
      sx={{
        height: 96,
        width: 600,
        border: '1px solid #D9D9D9',
        boxShadow: 'none',
        borderRadius: '4px',
        fontFamily: 'Lato,sans-serif',
        fontStyle: 'normal',
        lineHeight: '16px',
        fontSize: '12px',
      }}
    >
      <Grid container className={classes.header} columnSpacing={1.6}>
        <Grid item xs={3}>Name</Grid>
        <Grid item xs={3}>Age</Grid>
        <Grid item xs={3}>Height</Grid>
        <Grid item xs={3}>Location</Grid>
      </Grid>
      <Grid container className={classes.row} columnSpacing={1.6}>
        <Grid item xs={3}>{Text('wow this text is so damn long its crazee', 145)}</Grid>
        <Grid item xs={3}>144</Grid>
        <Grid item xs={3}>170cm</Grid>
        <Grid item xs={3}>
          Germany
          <Tooltip title={'Baden-Württemberg'}>
            <p className={classes.secondaryText}>
              <span>Baden-Württemberg</span>
            </p>
          </Tooltip>
        </Grid>
      </Grid>
    </Card>
  );
}
