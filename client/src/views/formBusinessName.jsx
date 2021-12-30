import React from 'react';
import { MuiThemeProvider, createTheme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import '../content/formStyle.css';

class FormBusinessName extends React.Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    render() { 
        const { values, handleChange } = this.props;
        const theme = createTheme()
        
        return ( 
            <MuiThemeProvider theme={theme}>
                    <div className='form-header'>
                        <h1>Create a Post and Get Funded in 3 Simple Steps</h1>
                    </div>
                    <div className="form-field">
                        <TextField
                            variant="filled"
                            color="secondary"
                            placeholder="Enter Your Business Name"
                            label="Business Name"
                            onChange={handleChange('businessName')}
                            value={values.businessName}
                            style={styles.formTextField}
                        />
                    </div>
                    <div className="form-button">
                        <Button
                            label="Continue"
                            onClick={this.continue}
                            variant="contained"
                            color="primary"
                        >Continue</Button>
                    </div>
            </MuiThemeProvider>
        )
    }
}

const styles = {
    formTextField: {
        width: 'calc(100% - 700px)'
    }
}
 
export default FormBusinessName;