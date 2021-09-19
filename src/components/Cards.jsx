import {
    Typography,
    Box,
    makeStyles,
    CircularProgress,
    Grid,
} from "@material-ui/core";
import Card from "./Card";
const useStyles = makeStyles({
    component: {
        margin: "50 0",
        flexDirection:'column',
        alignItems:'center',
        display:'flex',
    },
    container: {
        color: "green",
        marginBottom:40
    },
});
const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
    const classes = useStyles();
    if (!confirmed) {
        return <CircularProgress />;
    }
    return (
        <Box className={classes.component}>
            <Typography className={classes.container} variant="h5" gutterBottom>
                Coronavirus Cases Globally
            </Typography>
            <Grid container spacing={3} justify="center">
                <Card 
                    cardtitle="infected"
                    value={confirmed.value}
                    desc="number of infected cases of covid-19"
                    lastUpdate={lastUpdate}
                />
                <Card 
                    cardtitle="recovered"
                    value={recovered.value}
                    desc="number of recovered cases from covid-19"
                    lastUpdate={lastUpdate}
                />
                <Card 
                    cardtitle="deaths"
                    value={deaths.value}
                    desc="number of death caused by covid-19"
                    lastUpdate={lastUpdate}
                />
            </Grid>
        </Box>
    )
}
export default Cards;
