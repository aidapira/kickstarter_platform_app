import React from "react";
import FormBusinessDesc from "./formBusinessDesc";
import FormBusinessName from './formBusinessName';
import FormBusinessInsp from './formBusinessInsp';
import Confirm from './confirm';
import SuccessPage from "./success";

class PostForm extends React.Component {
    state = {
        step: 1,
        businessName: '',
        businessDescription: '',
        businessInspiration: ''
    }

    // Handle next step
    nextStep = () => {
        const { step } = this.state;
        this.setState({
            step: step + 1
        });
    }

    // Handle previous step
    prevStep = () => {
        const { step } = this.state;
        this.setState({
            step: step - 1
        });
    }

    // Handle fields change
    handleChange = input => e => {
        this.setState({[input]: e.target.value});
    }

    render() { 
        const { step } = this.state;
        const { businessName, businessDescription, businessInspiration } = this.state;
        const values = { businessName, businessDescription, businessInspiration };
        
        switch(step) {
            case 1: 
                return (
                    <FormBusinessName
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                )
            case 2:
                return (
                    <FormBusinessDesc
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                )
            case 3:
                return (
                    <FormBusinessInsp
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                )
            case 4: 
                return (
                    <Confirm
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        values={values}
                    />
                )
            case 5: 
                return (
                    <SuccessPage />
                )
        }
    }
}
 
export default PostForm;