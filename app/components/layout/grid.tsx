
// ResponsiveGrid displays a set of items, by default, as a single full-width column,
// swapping to a multi-column grid when on a *medium* screen.
export default function ResponsiveGrid(
    {children}: {children: React.ReactNode}
) {
    let gridClass = `grid grid-cols-1 gap-4 lg:grid-flow-col auto-cols-fr`
    return (
        <div className={`${gridClass}`}>
            {children}
        </div>
    )
}
