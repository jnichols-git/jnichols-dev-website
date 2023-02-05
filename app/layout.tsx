import './global.css'
import styles from './home.module.css'
import { themeChange } from 'theme-change'

import { DrawerWrapper, Footer, Navbar } from './components/top-level/nav'
import Main from './components/top-level/main'
import Body from './components/top-level/body'


export default function RootLayout(
  {children}: {children: React.ReactNode}
) {
  return (
    <html lang="en">
      <Body>
        {/*begin content*/}
        {/*drawer container*/}
        <DrawerWrapper>
          <Navbar/>
          <Main>
            {children}
          </Main>
          <Footer/>
        </DrawerWrapper>
        {/*end content*/}
      </Body>
    </html>
  )
}

function OldRootLayout(
  {children,}: {children: React.ReactNode;}
) {
  return (
    <html lang="en">
			<body data-theme="j">
        <div className="navbar bg-base-100 rounded-box">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-primary lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu bg-primary text-primary-content dropdown-content mt-3 p-2 shadow bg-base-200 rounded-box w-52">
              {/*NavMenu()*/}
            </ul>
          </div>
          <div className="flex-1">
            <a className="btn btn-ghost normal-case text-xl">jnichols-dev.com</a>
          </div>
          <div className="flex-none">
            <ul className="menu menu-horizontal px-1 hidden lg:flex">
              {/*NavMenu()*/}
            </ul>
          </div>
        </div>
        <div>
          <main className={styles.main}>
            {children}
          </main>
        </div>
        
      </body>
		</html>
	);
}