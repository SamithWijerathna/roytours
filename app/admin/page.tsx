"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import "../loading.css";

export default function Admin() {
  const router = useRouter();

  useEffect(() => {
    const cookies = document.cookie.split("; ").reduce((acc, cur) => {
      const [name, value] = cur.split("=");
      acc[name] = value;
      return acc;
    }, {} as Record<string, string>);

    if (!cookies.userData) {
       setTimeout(() => {
        router.push("admin/login");
        }, 3000);
    } else {
     setTimeout(() => {
  router.push("/admin/dashboard");
}, 3000);

   
    }
  }, [router]);

  return <div className="loading-screen">
    <div className='loading'>
    <div className='row'>
        <div className='point'></div>
        <div className='point'></div>
        <div className='point'></div>
        <div className='point'></div>
    </div>
    <div className='row'>
        <div className='point'></div>
        <div className='point'></div>
        <div className='point'></div>
        <div className='point'></div>
    </div>
    <div className='row'>
        <div className='point'></div>
        <div className='point'></div>
        <div className='point'></div>
        <div className='point'></div>
    </div>
    <div className='row'>
        <div className='point'></div>
        <div className='point'></div>
        <div className='point'></div>
        <div className='point'></div>
    </div>
    </div>
  </div>
  
;
}
