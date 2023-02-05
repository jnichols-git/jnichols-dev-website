import { NOTFOUND } from "dns";
import { PageNotFoundError } from "next/dist/shared/lib/utils";
import { useSearchParams } from "react-router-dom";
import { remark } from 'remark';
import html from 'remark-html';

import styles from "../../../../home.module.css"
import { BlogListing } from "../../../blog";

import BlogPost from "./post"

async function getListing(post_id: string) {
    const res = await fetch(`https://api.jnichols-dev.com/blog/user/listing?post_id=${post_id}`)
    return res.json()
}

async function getPost(post_id: string, version_id: string) {
    const res = await fetch(`https://api.jnichols-dev.com/blog/user/post?post_id=${post_id}&version_id=${version_id}`)
    return res.json()
}

function VersionSelect(
    {pID, vID, lst}:
    {pID : string, vID: string, lst: BlogListing}
) {
    let vIDs = lst.archive_version_ids??[];
    vIDs.unshift("latest");
    return (
        <div className="dropdown">
            <label tabIndex={0} className={`btn btn-primary ${vIDs.length==1?'btn-disabled':''} m-1`}>You're reading {
                vID == "latest" ? "the latest version" : `version ${vID}`
            }</label>
            <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-neutral rounded-md">
                {vIDs.map((AvID) => {
                    if(AvID == vID) {
                        return <li key={AvID}><a className="text-accent">{AvID}</a></li>
                    } else {
                        return <li key={AvID}><a href={`/blog/post/${pID}/${AvID}`}>{AvID}</a></li>
                    }
                })}
            </ul>
        </div>
    )
}

export default async function Page(
    {params}:
    {params: {post_id: string, version_id: string}}
) {
    let listing = await getListing(params.post_id) as BlogListing
    let content = await getPost(params.post_id, params.version_id)
    let processed = await remark().use(html).process(content)
    let mdhtml = processed.toString()
    return (
        <>
            <VersionSelect pID={params.post_id} vID={params.version_id} lst={listing}/>
            <BlogPost content={mdhtml}/>
        </>
    )
}