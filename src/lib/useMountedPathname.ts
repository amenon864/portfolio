"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export function useMountedPathname() {
  const pathname = usePathname();
  const [mountedPathname, setMountedPathname] = useState<string | null>(null);

  useEffect(() => {
    setMountedPathname(pathname);
  }, [pathname]);

  return mountedPathname;
}
