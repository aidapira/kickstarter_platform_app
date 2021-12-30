import * as React from 'react';
import { styled } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@material-ui/core/Button';
import { useNavigate } from "react-router-dom";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function BusinessCard({ index, businessName, businessDescription, businessInspiration }) {
  let navigate = useNavigate();

  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  if(index > 4) {
    index = 4;
  }

  return (
    <Card sx={{ maxWidth: 345 }} raised={true}>
      <CardHeader
        avatar={
          <Avatar 
            sx={{ bgcolor: "#7FB8F0" }} 
            aria-label="recipe">
            {businessName.charAt(0)}
          </Avatar>
        }
        title={businessName}
      />
      <CardMedia
        component="img"
        height="194"
        image={require ("../static/images/image"+index+".jpg")}
        alt="alt"
      />
      <CardContent>
        <Typography variant="body2" color="inherit">
          Business Description: {businessDescription}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Button 
          size="small"
          onClick={() => {navigate("/payment-checkout/"+businessName+"/"+index)}}
          color="primary"
        >Fund Project</Button>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Business Inspiration: {businessInspiration}</Typography>  
        </CardContent>
      </Collapse>
    </Card>
  );
}