import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import Button from '@mui/material/Button';
import '../content/formStyle.css';

class FormBusinessName extends React.Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    render() { 
        const { values, handleChange } = this.props;

        return ( 
            <MuiThemeProvider>
                    <div className='form-header'>
                        <h1>Create a Post and Get Funded in 3 Simple Steps</h1>
                    </div>
                    <div className="form-field">
                        <TextField
                            hintText="Enter Your Business Name"
                            floatingLabelText="Business Name"
                            onChange={handleChange('businessName')}
                            defaultValue={values.businessName}
                            style={styles.formTextField}
                        />
                    </div>
                    <div className="form-button">
                        <Button
                            label="Continue"
                            onClick={this.continue}
                            variant="contained"
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