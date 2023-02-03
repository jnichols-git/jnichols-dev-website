import Blog from './blog'

import styles from "../home.module.css"

export const revalidate = 30

async function getListings() {
    const res = await fetch("https://api.jnichols-dev.com/blog/user/listings?page_count=20", {
        next: {
            revalidate: revalidate,
        }
    })
    return res.json()
}

export default async function Page() {
    const listings = await getListings()
    return (
        <div className="w-full lg:w-10/12 flex justify-center">
            <Blog listings={listings}/>
        </div>
    )
}
