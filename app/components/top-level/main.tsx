

// Primary content container
// Should handle all margins relative to nav, footer, and left/right page edges, scaling on screen size.
export default function Main(
    {children}: {children: React.ReactNode}
) {
    return (
        <div className="w-screen lg:min-h-screen flex justify-center content-start" id="main-container">
        <div className="max-lg:mx-5 lg:w-10/12 my-10 flex flex-col justify-center gap-y-8" id="main-spacer">
            {children}
        </div>
        </div>
    )
}