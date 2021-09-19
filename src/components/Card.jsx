import { Grid,CardContent,Box,Typography,Card,makeStyles} from "@material-ui/core";
import CountUp from 'react-countup'
const useStyle=makeStyles({
    header:{
        background:'#F5F5F5',
        padding: 20
    }
})
const CardComponent=({cardtitle,value,desc,lastUpdate})=>{
    const classes=useStyle();
    return(
        <Grid component={Card} style={{margin:20,borderBottom:"10px solid black"}}>

            <Box className={classes.header}>
                <Typography variant="h5" color="textSecondary">{cardtitle}</Typography>
            </Box>
            <CardContent>
                <Typography>
                    <CountUp start={0} end={value} duration={2} seperator=","/>
                </Typography>
                <Typography color="textSecondary">{desc}</Typography>
                <Typography>{new Date(lastUpdate).toDateString()}</Typography>
            </CardContent>
        </Grid>
    )
}
export default CardComponent;