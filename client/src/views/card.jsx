import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
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
    <Card sx={{ maxWidth: 345 }} raised='true'>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "#7FB8F0" }} aria-label="recipe">
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
        <Typography variant="body2" color="text.secondary">
          Business Description: {businessDescription}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Button 
          size="small"
          onClick={() => {navigate("/payment-checkout/"+businessName+"/"+index)}}
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