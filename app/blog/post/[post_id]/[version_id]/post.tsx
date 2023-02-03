export default function BlogPost(
    {content}:
    {content: string}
) {
    return (
        <article className="py-10 mx-6 prose-sm max-w-none md:prose md:max-w-prose lg:prose-xl"
            dangerouslySetInnerHTML={{"__html": content}}>
        </article>
    )
}