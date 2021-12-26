interface Businesses {
    businessName: string,
    businessDescription: string,
    businessInspiration: string
}

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