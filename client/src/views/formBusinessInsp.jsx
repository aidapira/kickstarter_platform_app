import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import Button from '@mui/material/Button';
import '../content/formStyle.css';

class FormBusinessDesc extends React.Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    back = e => {
        e.preventDefault();
        this.props.prevStep();
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
                            hintText="Enter Your Business Inspiration"
                            floatingLabelText="Business Inspiration"
                            onChange={handleChange('businessInspiration')}
                            defaultValue={values.businessInspiration}
                            style={styles.formTextField}
                        />
                    </div>
                    <div className="form-button">
                        <Button
                            label="Continue"
                            onClick={this.continue}
                            variant="contained"
                        >Continue</Button>
                        <Button
                            label="Back"
                            onClick={this.back}
                            variant="contained"
                            style={styles.button}
                        >Back</Button>
                    </div>
            </MuiThemeProvider>
        )
    }
}

const styles = {
    formTextField: {
        width: 'calc(100% - 700px)'
    },
    button: {
        marginLeft: '20px'
    }
}
 
export default FormBusinessDesc;