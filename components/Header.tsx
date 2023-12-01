import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Image from 'next/image'
import Link from './Link'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'
import SearchButton from './SearchButton'
import logo from '@/data/icon.png'

const imageSize = 150

const Header = () => {
  return (
    <header className="flex items-center justify-between">
      <div>
        <Link href="/" aria-label={siteMetadata.headerTitle}>
          <div className="flex items-center justify-between">
            <div className="mr-3">
              <Image
                src={logo}
                width={imageSize}
                height={imageSize}
                alt="Logo"
                className="logo"
                quality="95"
              />
            </div>
            {typeof siteMetadata.headerTitle === 'string' ? (
              <div className="hidden text-3xl font-semibold sm:block">
                {siteMetadata.headerTitle}
                <br />
                <div
                  className="text-sm font-normal sm:block
                "
                >
                  {siteMetadata.description}
                </div>
              </div>
            ) : (
              siteMetadata.headerTitle
            )}
          </div>
        </Link>
      </div>
      <div className="flex items-center space-x-4 leading-5 sm:space-x-6">
        {headerNavLinks
          .filter((link) => link.href !== '/')
          .map((link) => (
            <Link
              key={link.title}
              href={link.href}
              className="hidden font-medium text-gray-900 dark:text-gray-100 sm:block"
            >
              {link.title}
            </Link>
          ))}
        <SearchButton />
        <ThemeSwitch />
        <MobileNav />
      </div>
    </header>
  )
}

export default Header
