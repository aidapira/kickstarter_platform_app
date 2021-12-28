import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Button from '@mui/material/Button';
import { useNavigate  } from "react-router-dom";

export default function SuccessPage() {
    let navigate = useNavigate ();
   
    return ( 
        <MuiThemeProvider>
                <div className='form-header'>
                    <h3>Congratulations! You're ready to get funded now.</h3>
                </div>
                <div className="confirm-form-button">
                    <Button
                        label="See Posts"
                        variant="contained"
                        onClick={() => {navigate('/view-posts')}}
                    >See Posts</Button>
                </div>
        </MuiThemeProvider>
    )
}
