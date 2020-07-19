import React from 'react';
import MaterialCard from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';
import Typography from './Typography';
import Heading from './Heading';

const useStyles = makeStyles({
  root: {
    flex: '0 1 48%',
    margin: '10px 5px',
  },
  media: {
    height: 140,
  },
});

interface Props {
  img: string;
  children: React.ReactNode;
  heading: string;
}

const Card = ({ img, children, heading }: Props) => {
  const classes = useStyles();

  return (
    <MaterialCard className={classes.root}>
      <CardMedia className={classes.media} image={img} />
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
