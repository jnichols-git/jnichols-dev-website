import { NOTFOUND } from "dns";
import { PageNotFoundError } from "next/dist/shared/lib/utils";
import { useSearchParams } from "react-router-dom";
import { remark } from 'remark';
import html from 'remark-html';

import styles from "../../../../home.module.css"

import BlogPost from "./post"

async function getPost(post_id: string, version_id: string) {
    const res = await fetch(`https://api.jnichols-dev.com/blog/user/post?post_id=${post_id}&version_id=${version_id}`)
    return res.json()
}

export default async function Page(
    {params}:
    {params: {post_id: string, version_id: string}}
) {
    const content = await getPost(params.post_id, params.version_id)
    const processed = await remark().use(html).process(content)
    const mdhtml = processed.toString()
    return (
            <BlogPost content={mdhtml}/>
    )
}