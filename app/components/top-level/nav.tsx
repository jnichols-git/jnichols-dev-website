import { classText } from "../../style/text"

function NavMenu() {
    return (
      <>
        <li><a href="/">Home</a></li>
        <li><a href="/blog">Blog</a></li>
      </>
    )
}

export function Navbar() {
    return (
        <div className="navbar bg-base-300">
            <div className="navbar-start">
                <label htmlFor="nav-drawer" className="btn btn-square btn-ghost hover:btn-neutral">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                </label>
            </div>
            <div className="navbar-center">
                <label htmlFor="nav-drawer" className="flex-1 px-2 mx-2 text-3xl font-bold">jnichols.dev</label>
            </div>
            <div className="navbar-end">
                <div className="flex-none hidden lg:block">
                    <ul className="menu menu-horizontal">
                    </ul>
                </div>
            </div>
      </div>
    )
}

export function Footer() {
    return (
        <footer className="footer items-center p-4 bg-neutral text-neutral-content">
            <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
                <div className="tooltip tooltip-primary" data-tip="View Resume">
                    <a href="/Resume.pdf"><img src="/resume.svg" alt="View Resume" width="24" height="24"/></a>
                </div>
                <p className={classText()}>Mastodon coming soon!</p>
            </div>
        </footer>
    )
}

export function DrawerWrapper(
    {children}: {children: React.ReactNode}
) {
    return (
        <div className="drawer">
        <input id="nav-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
            {children}
        </div> 
        <div className="drawer-side">
            <label htmlFor="nav-drawer" className="drawer-overlay"></label>
            <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                <NavMenu/>
            </ul>
        </div>
        </div>
    )
}
