import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

const PaymentCancel = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2} justifyContent="center" alignItems="center" style={styles.gridContainer}>
                <Grid item xs={12} md={12} >
                    <h1>Cancel</h1>
                </Grid>
                <Grid item xs={12} md={12}>
                    <h2>Your payment was canceled</h2>
                </Grid>
            </Grid>
        </Box>
    )
}

export default PaymentCancel;

const styles = {
    gridContainer: {
        textAlign: 'center'
    },
}