export default function BlogPost(
    {content}:
    {content: string}
) {
    return (
        <div className="flex justify-center">
            <article dangerouslySetInnerHTML={{"__html": content}}>
            </article>
        </div>
    )
}