import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 590,
    maxHeight:2000,
    marginLeft:550,
    
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[-50],
  },
}));

export default function RecipeReviewCard() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="missing" className={classes.avatar}>
            F
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Fahad Aslam"
        subheader="August 22, 2020"
      />
      <CardMedia
        className={classes.media}
        image="https://www.vyond.com/wp-content/uploads/2018/04/Keith_Anderson.jpg"
        title="Fahad Aslam"
      />
      <CardContent>
      <Typography >
          <b>Name:</b> Fahad Aslam
          </Typography>
          <Typography>
          <b>Age:</b> 32
          </Typography>
          <Typography >
          <b>Time since Missing</b> 2:30 p.m
          </Typography>
          <Typography >
          <b>Date</b> 22-August-2020
          </Typography>
          <Typography >
          <b>Please Contact</b> 03339942780
          </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share" title="Share Story">
          <ShareIcon />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph><b>Details:</b></Typography>
          <Typography >
          <b>Name:</b> Fahad Aslam
          </Typography>
          <Typography>
          <b>Age:</b> 32
          </Typography>
          <Typography>
          <b>Wearing:</b> Safaid shalwar kameez pheni thi, height 5'4 thi
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}

