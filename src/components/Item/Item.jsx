
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const Item = ({data}) =>  {
    return (
    <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
        <CardMedia
            component="img"
            height="300"
            image={data.img}
            alt="green iguana"
        />
        <CardContent>
            <Typography variant="body2" color="text.secondary">
            {data.brand}
            </Typography>
            <Typography gutterBottom variant="h5" component="div">
            {data.product}
            </Typography>
            <Typography variant="body2" color="text.secondary">
            Q. {data.price}
            </Typography>
        </CardContent>
        </CardActionArea>
    </Card>
    );
}

export default Item;