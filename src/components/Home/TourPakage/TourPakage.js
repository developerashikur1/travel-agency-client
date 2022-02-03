import React from 'react';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Container, Grid, IconButton } from '@mui/material';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const tourPackeges = [
    {placeName:"RIO DE JANEIRO", countryName: "Brazil", img:"https://i.ibb.co/Pr3t6Cr/t1.png", caption: {cap1:"Tour Timing", cap2: "View more details", cap3: "Price", cap4: "Location"}},
    {placeName:"PARIS", countryName: "England", img:"https://i.ibb.co/M75DjZ4/t2.png", caption: {cap1:"Tour Timing", cap2: "View more details", cap3: "Price", cap4: "Location"}},
    {placeName:"SOUTH INDIA", countryName: "India", img:"https://i.ibb.co/BBXRZHD/t3.png", caption: {cap1:"Tour Timing", cap2: "View more details", cap3: "Price", cap4: "Location"}},
    {placeName:"THE GREAT WALL", countryName: "China", img:"https://i.ibb.co/JHBbDg0/t4.png", caption: {cap1:"Tour Timing", cap2: "View more details", cap3: "Price", cap4: "Location"}},
    {placeName:"NAIL ISLAND", countryName: "Andaman", img:"https://i.ibb.co/FnCN82c/t5.png", caption: {cap1:"Tour Timing", cap2: "View more details", cap3: "Price", cap4: "Location"}},
    {placeName:"MAURITIUS", countryName: "Indiana", img:"https://i.ibb.co/Sfn2zsq/t6.png", caption: {cap1:"Tour Timing", cap2: "View more details", cap3: "Price", cap4: "Location"}},
];

const TourPakage = () => {
    return (
        <Container>
                <Typography sx={{ textAlign: 'center', fontWeight:'bold', color:'#253d52', fontSize:{md:50, xs:30} }} variant="h4" gutterBottom component="div">
                    Top <span style={{color:'#f4364f'}}>Tour Packages</span>
                    </Typography>
                    <Typography sx={{textAlign:'center', color:'#888888'}} variant="subtitle1" gutterBottom component="div">
                    World's leading tour and travels Booking website,Over 30,000 packages worldwide.
                </Typography>
                
                <Grid container sx={{mt:5}} rowGap={1} spacing={3}>
                    {tourPackeges.map(packages=>
                    <Grid key={packages?.placeName} item xs={12} md={4} sm={6}>
                        <Card>
                            <CardActionArea>
                                <CardMedia
                                component="img"
                                height="220"
                                image={packages?.img}
                                alt="green iguana"
                                title={`${packages?.placeName} (${packages?.countryName})`}
                                />
                            </CardActionArea>
                            <CardActions sx={{ display: 'flex', alignItems:'center', justifyContent:'space-between'}}>
                                <Grid sx={{justifyContent:'center'}}>
                                    <Typography sx={{color: '#333333', fontSize:'1rem', fontWeight:'600'}} variant="h6" gutterBottom component="div">
                                        {packages?.placeName} <span style={{color:'#888888', fontSize:'1rem', fontWeight:'400'}}>
                                             ({packages?.countryName})
                                        </span>
                                    </Typography>
                                </Grid>
                                <Grid>
                                        <AccessTimeIcon title={packages?.caption?.cap3} sx={{fontSize:15,color:'whiteSmoke',borderRadius:'50rem', padding:'.1rem',  marginRight:'.1rem',backgroundColor: '#FF7F00'}}/>

                                        <LocalOfferIcon title="Free Web tutorials" sx={{fontSize:15,color:'whiteSmoke',borderRadius:'50rem', padding:'.1rem', backgroundColor: '#98B33A', marginRight:'.1rem'}}/>
                            
                                        <ErrorOutlineIcon title={packages?.caption?.cap2}  sx={{fontSize:15,color:'whiteSmoke',borderRadius:'50rem', padding:'.1rem', backgroundColor: '#6FC758', marginRight:'.1rem'}}/>

                                        <LocationOnIcon title={packages?.caption?.cap4} sx={{fontSize:15,color:'whiteSmoke',borderRadius:'50rem', padding:'.1rem', backgroundColor: '#2B5B96', marginRight:'.1rem'}}/>

                                </Grid>
                            </CardActions>
                        </Card>
                    </Grid>
                    )}
                </Grid>
        </Container>
    );
};

export default TourPakage;  