import React from 'react';
import MaterialCard from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';
import Typography from './Typography';
import Heading from './Heading';

const useStyles = makeStyles((theme) => ({
  card: {
    [theme.breakpoints.down('sm')]: {
      flex: '1 1 49%',
    },
    margin: '10px 5px',
    [theme.breakpoints.up('md')]: {
      flex: '1 1 48%',
    },
  },
  cover: {
    height: 200,
  },
}));

interface Props {
  img: string;
  children: React.ReactNode;
  heading: string;
}

const Card = ({ img, children, heading }: Props) => {
  const classes = useStyles();

  return (
    <MaterialCard className={classes.card}>
      <CardMedia image={img} className={classes.cover} />
      <CardContent>
        <Heading weight="regular">{heading}</Heading>
        <br />
        <br />
        <Typography>{children}</Typography>
      </CardContent>
    </MaterialCard>
  );
};

export default Card;
