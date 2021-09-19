import {Bar} from 'react-chartjs-2';
import {Box} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
const useStyle=makeStyles({
    container:{
        width:'75%',
        marginTop:'20'
    }
})
const Chart=({data:{confirmed,recovered,deaths}})=>{
    const classes=useStyle();
    return(
        <Box className={classes.container}>
        {confirmed?(
        <Bar
            data = {{
                labels: ['Infected', 'Recovered', 'Deaths'],
                datasets: [{
                    label: '# of Votes',
                    data: [confirmed.value,recovered.value,deaths.value],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.5)',
                        'rgba(54, 162, 235, 0.5)',
                        'rgba(255, 206, 86, 0.5)',
                    ],
                    borderWidth: 1
                }]
            }}
            options = {{
                legend:{display:false},
                title:{display:true,text:"current state in country"}
            }}
        />):''
        }  
        </Box>
    )
}
export default Chart;