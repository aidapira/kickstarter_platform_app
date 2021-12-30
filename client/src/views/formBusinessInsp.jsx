import React from 'react';
import { MuiThemeProvider, createTheme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import '../content/formStyle.css';

class FormBusinessInsp extends React.Component {
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
                            placeholder="Enter Your Business Inspiration"
                            label="Business Inspiration"
                            onChange={handleChange('businessInspiration')}
                            value={values.businessInspiration}
                            style={styles.formTextField}
                            variant="filled"
                        />
                    </div>
                    <div className="form-button">
                        <Button
                            label="Continue"
                            onClick={this.continue}
                            color="primary"
                            variant="contained"
                        >Continue</Button>
                        <Button
                            label="Back"
                            onClick={this.back}
                            variant="contained"
                            color="primary"
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
 
export default FormBusinessInsp;