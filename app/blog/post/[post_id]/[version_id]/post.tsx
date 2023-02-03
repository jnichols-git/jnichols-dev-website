export default function BlogPost(
    {content}:
    {content: string}
) {
    return (
        <article className="py-10 mx-6 prose-xs sm:prose-sm md:prose lg:prose-xl"
            dangerouslySetInnerHTML={{"__html": content}}>
        </article>
    )
}