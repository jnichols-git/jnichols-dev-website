export default function BlogPost(
    {content}:
    {content: string}
) {
    return (
        <div className="w-9/12 py-10 my-5 flex justify-center border-4 border-primary shadow-md bg-base-100">
             <article className="sm:prose-sm md:prose lg:prose-xl"
            dangerouslySetInnerHTML={{"__html": content}}>
            </article>
        </div>
    )
}