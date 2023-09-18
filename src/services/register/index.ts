type FormDataType = {
    name: string,
    email: string,
    password: string,
    role: string,
}

export const registerNewUser = async (formData: FormDataType) => {

    try {

        const response = await fetch(`/api/register`, {
            method: `POST`,
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData)
        })

        const finalData = await response.json()

        return finalData

    } catch (error) {
        console.log(error)
    }

}