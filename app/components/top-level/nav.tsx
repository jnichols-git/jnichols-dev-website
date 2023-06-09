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
        <div className="sticky top-0 z-30 flex justify-center bg-base-300 h-16 w-full">
            <nav className="navbar w-full lg:w-10/12">
                <div className="navbar-start">
                    <label htmlFor="nav-drawer" className="flex-1 px-2 mx-2 text-3xl font-bold hidden lg:block">jnichols</label>
                    <label htmlFor="nav-drawer" className="btn btn-square btn-ghost hover:btn-neutral lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                    </label>
                </div>
                <div className="navbar-center">
                    <label htmlFor="nav-drawer" className="flex-1 px-2 mx-2 text-3xl font-bold lg:hidden">jnichols</label>
                </div>
                <div className="navbar-end">
                    <div className="flex-none hidden lg:block">
                        <ul className="menu menu-horizontal">
                            <NavMenu/>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export function Footer() {
    return (
        <footer className="footer flex justify-center p-4 bg-base-300">
            <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
                <a className="flex flex-row gap-x-2" href="/Resume.pdf">
                    <img src="/resume.svg" alt="View Resume" width="24" height="24"/>
                    Resume
                </a>
                <div className="divider divider-horizontal"></div>
                <a className="flex flex-row gap-x-2" href="https://github.com/jakenichols2719">
                    <img src="/github-mark.svg" alt="Go to GitHub" width="24" height="24"/>
                    GitHub
                </a>
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
        <div className="drawer-side w-screen">
            <label htmlFor="nav-drawer" className="drawer-overlay"></label>
            <ul className="menu p-4 w-9/12 lg:w-3/12 bg-base-100 text-base-content">
                <NavMenu/>
            </ul>
        </div>
        </div>
    )
}
