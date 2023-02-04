

// Header h1-h3 by 'level'
export default function Header(
    {level, children} : {level: string, children: React.ReactNode}
) {
    var h;
    switch(level) {
        case 'h1': h = <h1>{children}</h1>
        case 'h2': h = <h2>{children}</h2>
        case 'h3': h = <h3>{children}</h3>
        default: h = <h1>{children}</h1>
    }
    return (
        <p></p>
    )
}