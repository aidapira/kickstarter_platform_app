import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';

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
        textAlign: 'center',
        width: '100%'
    },
}