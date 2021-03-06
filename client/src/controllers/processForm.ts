import { Businesses } from "../models/businesses";

export const processForm = async (values: Businesses) => {

    const data = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            businessName: values.businessName,
            businessDescription: values.businessDescription,
            businessInspiration: values.businessInspiration
        })
    }

    await fetch('/save-form-values', data)
}