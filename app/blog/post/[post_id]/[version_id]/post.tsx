export default function BlogPost(
    {content}:
    {content: string}
) {
    return (
        <div className="w-9/12 py-10 my-5 flex justify-center outline outline-accent bg-base-200">
             <article className="prose lg:prose-xl"
            dangerouslySetInnerHTML={{"__html": content}}>
            </article>
        </div>
    )
}