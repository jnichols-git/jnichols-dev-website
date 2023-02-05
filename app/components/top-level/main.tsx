

// Primary content container
// Should handle all margins relative to nav, footer, and left/right page edges, scaling on screen size.
export default function Main(
    {children}: {children: React.ReactNode}
) {
    return (
        <div className="w-screen min-h-screen flex justify-center content-start" id="main-container">
        <div className="lg:w-10/12 px-5 my-10 flex flex-col justify-center gap-y-10" id="main-spacer">
            {children}
        </div>
        </div>
    )
}