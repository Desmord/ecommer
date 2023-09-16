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

export const styles = {
    button: `mt-1.5 inline-block text-white bg-black px-5 py-2
            text-xs font-medium upprcase tracking-wide text-white transition-all
            hover:bg-opacity-70`
}