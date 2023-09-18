export type NavOptionsType = {
    id: string,
    label: string,
    path: string,
}

export const navOptions: NavOptionsType[] = [
    {
        id: `home`,
        label: `Home`,
        path: `/`,
    },
    {
        id: `listing`,
        label: `All Products`,
        path: `/product/listing/all-products`,
    },
    {
        id: `listingMen`,
        label: `Men`,
        path: `/product/listing/men`
    },
    {
        id: `listingWomen`,
        label: `Women`,
        path: `/product/listing/women`,
    },
    {
        id: `listingKids`,
        label: `Kids`,
        path: `/product/listing/kids`,
    },
]

export const adminNavOptions: NavOptionsType[] = [
    {
        id: `adminListing`,
        label: `Manage Products`,
        path: `/admin-view/all-product`,
    },
    {
        id: `adminNewProduct`,
        label: `Add Product`,
        path: `/admin-view/add-product`
    }
]

export type FormControlType = {
    id: string,
    type: string,
    placeholder: string,
    label: string,
    componentType: string,
    options?: {
        id: string,
        label: string,
    }[]
}

export const registrationFormControls: FormControlType[] = [
    {
        id: `name`,
        type: `text`,
        placeholder: `Enter your name`,
        label: `Name`,
        componentType: `input`
    },
    {
        id: `email`,
        type: `email`,
        placeholder: `Enter your email`,
        label: `Email`,
        componentType: `input`
    },
    {
        id: `password`,
        type: `password`,
        placeholder: `Enter your password`,
        label: `Password`,
        componentType: `input`
    },
    {
        id: `role`,
        type: ``,
        placeholder: ``,
        label: `Role`,
        componentType: `select`,
        options: [{
            id: `admin`,
            label: `Admin`,
        }, {
            id: `customer`,
            label: `Customer`,
        }]
    },

]

export const loginFormControlls: FormControlType[] = [
    {
        id: `email`,
        type: `email`,
        placeholder: `Enter your email`,
        label: `Email`,
        componentType: `input`
    },
    {
        id: `password`,
        type: `password`,
        placeholder: `Enter your password`,
        label: `Password`,
        componentType: `input`
    },
]