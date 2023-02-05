
// ResponsiveGrid displays a set of items, by default, as a single full-width column,
// swapping to a multi-column grid when on a *medium* screen.
export default function ResponsiveGrid(
    {children, fade}: {children: React.ReactNode, fade?:boolean}
) {
    let gridClass = `grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 ${fade?'transition-all duration-1000 opacity-100':''}`
    return (
        <div className={`${gridClass}`}>
            {children}
        </div>
    )
}
