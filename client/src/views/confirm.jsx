import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {List, ListItem} from 'material-ui/List';
import Button from '@mui/material/Button';
import '../content/formStyle.css';

class FormBusinessName extends React.Component {
    continue = e => {
        e.preventDefault();
        //Process form
        this.props.nextStep();
    }

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }

    render() { 
        const { values: { businessName, businessDescription, businessInspiration } } = this.props;

        return ( 
            <MuiThemeProvider>
                    <div className='form-header'>
                        <h3>Confirm Business Information</h3>
                    </div>
                    <div className="confirm-form-field">
                        <List>
                            <ListItem
                                primaryText="Business Name"
                                secondaryText= { businessName }
                                style={styles.formListItems}
                            />
                            <ListItem
                                primaryText="Business Description"
                                secondaryText= { businessDescription }
                                style={styles.formListItems}
                            />
                            <ListItem
                                primaryText="Business Inspiration"
                                secondaryText= { businessInspiration }
                                style={styles.formListItems}
                            />
                        </List>
                    </div>
                    <div className="confirm-form-button">
                        <Button
                            label="Confirm & Continue"
                            onClick={this.continue}
                            variant="contained"
                        >Confirm & Continue</Button>
                        <Button
                            label="Back"
                            onClick={this.back}
                            variant="outlined"
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
    },
    formListItems: {
        textAlign: 'center'
    }
}
 
export default FormBusinessName;