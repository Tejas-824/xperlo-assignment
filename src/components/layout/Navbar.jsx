import { useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Button from '../ui/Button';
import Icon from '../ui/Icon';
import { NAV_LINKS, SITE_NAME } from '../../constants/site';

const linkClasses = ({ isActive }) =>
  `relative pb-1 text-[15px] font-medium transition-colors hover:text-white ${
    isActive
      ? "text-white after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-full after:bg-teal-300 after:content-['']"
      : 'text-white/70'
  }`;

function DesktopNavItem({ link, openKey, setOpenKey }) {
  const isOpen = openKey === link.to;
  const closeTimer = useRef(null);

  function openNow() {
    clearTimeout(closeTimer.current);
    setOpenKey(link.to);
  }

  function closeSoon() {
    closeTimer.current = setTimeout(() => setOpenKey((k) => (k === link.to ? null : k)), 120);
  }

  if (!link.children) {
    return (
      <NavLink to={link.to} className={linkClasses} end={link.to === '/'}>
        {link.label}
      </NavLink>
    );
  }

  return (
    <div className="relative" onMouseEnter={openNow} onMouseLeave={closeSoon}>
      <div className="flex items-center gap-1">
        <NavLink to={link.to} className={linkClasses} end>
          {link.label}
        </NavLink>
        <button
          type="button"
          aria-label={`${link.label} submenu`}
          aria-expanded={isOpen}
          onClick={() => setOpenKey(isOpen ? null : link.to)}
          className="text-white/70 hover:text-white"
        >
          <Icon name="chevronDown" className={`h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
        </button>
      </div>

      {isOpen && (
        <ul className="absolute left-0 top-full z-50 mt-3 w-56 overflow-hidden rounded-lg border border-white/10 bg-brand-panel py-2 shadow-xl">
          {link.children.map((child) => (
            <li key={child.to}>
              <NavLink
                to={child.to}
                onClick={() => setOpenKey(null)}
                className={({ isActive }) =>
                  `block px-4 py-2.5 text-sm ${isActive ? 'bg-white/10 text-white' : 'text-white/70 hover:bg-white/5 hover:text-white'}`
                }
              >
                {child.label}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function MobileNavItem({ link, openKey, setOpenKey, onNavigate }) {
  const isOpen = openKey === link.to;

  if (!link.children) {
    return (
      <NavLink
        to={link.to}
        end={link.to === '/'}
        onClick={onNavigate}
        className={({ isActive }) =>
          `block rounded-lg px-3 py-3 text-sm font-medium ${isActive ? 'bg-white/10 text-white' : 'text-white/70'}`
        }
      >
        {link.label}
      </NavLink>
    );
  }

  return (
    <div>
      <div className="flex items-center justify-between rounded-lg px-3 py-3">
        <NavLink to={link.to} onClick={onNavigate} className="text-sm font-medium text-white/70">
          {link.label}
        </NavLink>
        <button
          type="button"
          aria-label={`${link.label} submenu`}
          aria-expanded={isOpen}
          onClick={() => setOpenKey(isOpen ? null : link.to)}
          className="p-1 text-white/70"
        >
          <Icon name="chevronDown" className={`h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
        </button>
      </div>
      {isOpen && (
        <ul className="ml-3 flex flex-col gap-1 border-l border-white/10 pl-3">
          {link.children.map((child) => (
            <li key={child.to}>
              <NavLink
                to={child.to}
                onClick={onNavigate}
                className={({ isActive }) =>
                  `block rounded-lg px-3 py-2 text-sm ${isActive ? 'bg-white/10 text-white' : 'text-white/60'}`
                }
              >
                {child.label}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [desktopOpenKey, setDesktopOpenKey] = useState(null);
  const [mobileOpenKey, setMobileOpenKey] = useState(null);
  const navRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setDesktopOpenKey(null);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  function closeMobileMenu() {
    setOpen(false);
    setMobileOpenKey(null);
  }

  return (
    <header ref={navRef} className="sticky top-0 z-50 border-b border-white/10 bg-brand-bg">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-5 sm:px-6 lg:px-8">
        <NavLink to="/" className="font-display text-2xl tracking-tight" onClick={closeMobileMenu}>
          {SITE_NAME}
        </NavLink>

        {/* Desktop links */}
        <ul className="hidden items-center gap-9 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.to}>
              <DesktopNavItem link={link} openKey={desktopOpenKey} setOpenKey={setDesktopOpenKey} />
            </li>
          ))}
        </ul>

        {/* Desktop auth actions */}
        <div className="hidden items-center gap-3 md:flex">
          <Button as={NavLink} to="/login" variant="outline" size="sm" className="rounded-md">
            Login
          </Button>
          <Button as={NavLink} to="/register" variant="primary" size="sm" className="rounded-md">
            Register
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          className="grid h-10 w-10 place-items-center rounded-lg border border-white/20 text-white md:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <Icon name={open ? 'close' : 'menu'} className="h-5 w-5" />
        </button>
      </nav>

      {/* Mobile menu panel */}
      {open && (
        <div className="border-t border-white/10 bg-brand-bg px-4 pb-6 pt-2 md:hidden">
          <ul className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.to}>
                <MobileNavItem
                  link={link}
                  openKey={mobileOpenKey}
                  setOpenKey={setMobileOpenKey}
                  onNavigate={closeMobileMenu}
                />
              </li>
            ))}
          </ul>
          <div className="mt-4 flex flex-col gap-3">
            <Button as={NavLink} to="/login" variant="outline" onClick={closeMobileMenu}>
              Login
            </Button>
            <Button as={NavLink} to="/register" variant="primary" onClick={closeMobileMenu}>
              Register
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
