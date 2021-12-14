//Hook for base path of movies/shows

import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function usePathname() {
  const [basePathname, setBasePathname] = useState(null);
  const { pathname } = useLocation();
  console.log("Base pathname [usePathname] -> ", pathname);
  useEffect(() => {
    if (pathname) {
      setBasePathname(pathname.slice(0, pathname.indexOf("/", 1) + 1));
    }
  }, [pathname]);
  console.log("Base pathname in useEffect [usePathname] -> ", basePathname);
  // const baseRoute = basePathname.slice(0, basePathname.indexOf("/", 1) + 1);
  // return baseRoute;
  return basePathname;
}
