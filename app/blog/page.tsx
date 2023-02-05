'use client'

import Blog, { BlogListing } from './blog'

import { useSearchParams } from 'next/navigation';

export const revalidate = 30

async function getListings(params: string) {
    const res = await fetch(`https://api.jnichols-dev.com/blog/user/listings?page_count=20${params}`, {
        next: {
            revalidate: revalidate,
        }
    })
    return res.json()
}

export default function Page() {
    let params = useSearchParams();
    let pn = params.get("page_number");
    let tags = params.get("tags");
    const listings = getListings(`${pn?`&page_number=${pn}`:''}${tags?`&tags=${tags}`:''}`) as Promise<BlogListing[]>
    return (
        <Blog listings={listings} hasFilters={tags?true:false}/>
    )
}
