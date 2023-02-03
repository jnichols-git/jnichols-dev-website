export default function BlogPost(
    {content}:
    {content: string}
) {
    return (
        <article className="py-10 mx-6 prose prose-sm max-w-none lg:prose-xl lg:max-w-prose"
            dangerouslySetInnerHTML={{"__html": content}}>
        </article>
    )
}