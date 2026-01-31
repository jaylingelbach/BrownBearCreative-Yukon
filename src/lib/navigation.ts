export const isActivePath = (pathname: string, href?: string) => {
  if (!href) return false;

  return (
    (href === '/' && pathname === '/') ||
    pathname === href ||
    (href !== '/' && pathname.startsWith(`${href}/`))
  );
};
