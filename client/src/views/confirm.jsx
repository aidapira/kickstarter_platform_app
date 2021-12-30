import React from 'react';
import { MuiThemeProvider, createTheme } from '@material-ui/core/styles';
import { List, ListItem, ListItemText } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import '../content/formStyle.css';
import { processForm } from '../controllers/processForm.ts';

class FormConfirm extends React.Component {
    continue = e => {
        e.preventDefault();

        //Process form
        const { values } = this.props;
        processForm(values);

        this.props.nextStep();
    }

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }

    render() { 
        const { values: { businessName, businessDescription, businessInspiration } } = this.props;
        const theme = createTheme()

        return ( 
            <MuiThemeProvider theme={theme}>
                    <div className='form-header'>
                        <h1>Please Confirm Business Information</h1>
                    </div>
                    <div className="confirm-form-field">
                        <List>
                            <ListItem >
                                <ListItemText 
                                    primary= "Business Name"
                                    secondary= { businessName }
                                    style={styles.formListItems}
                                />
                            </ListItem>
                            <ListItem >
                                <ListItemText 
                                    primary= "Business Description"
                                    secondary= { businessDescription }
                                    style={styles.formListItems}
                                />
                            </ListItem>
                            <ListItem >
                                <ListItemText 
                                    primary= "Business Inspiration"
                                    secondary= { businessInspiration }
                                    style={styles.formListItems}
                                />
                            </ListItem>
                        </List>
                    </div>
                    <div className="confirm-form-button">
                        <Button
                            label="Confirm & Continue"
                            onClick={this.continue}
                            variant="contained"
                            color="primary"
                        >Confirm & Continue</Button>
                        <Button
                            label="Back"
                            onClick={this.back}
                            variant="contained"
                            style={styles.button}
                            color="primary"
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
    },
    formListItems: {
        textAlign: 'center'
    }
}
 
export default FormConfirm;