import Blog from './blog'

import styles from "../home.module.css"

async function getListings() {
    const res = await fetch("https://api.jnichols-dev.com/blog/user/listings?page_count=20")
    return res.json()
}

export default async function Page() {
    const listings = await getListings()
    return (
        <main className={styles.main}>
            <div className="container m-5 p-5 flex justify-center">
                <Blog listings={listings}/>
            </div>
        </main>
    )
}
