import { BlogListing } from "../../../blog"

export default function BlogPost(
    {content}:
    {content: string}
) {
    return (
        <div className="flex justify-center border-y-2 lg:border-y-0 lg:border-x-2 border-accent">
            <article dangerouslySetInnerHTML={{"__html": content}}>
            </article>
        </div>
    )
}