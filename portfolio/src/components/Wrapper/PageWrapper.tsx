"use client";

import { useState, useEffect } from "react";
import Loading from "@/components/Loading/Loading";

export default function PageWrapper({ children }: { children: React.ReactNode }) {
  /*
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500); 

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loading />;
  }
    */

  return <>{children}</>;
}
