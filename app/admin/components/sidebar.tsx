import Link from "next/link"
export default function SideBar(){
    return(
        <div>
            <ul className="flex flex-col capitalize">
         <Link href={'/dashboard'}><span>Dashboard</span></Link>
           <Link href={'/images'}>Images</Link>   
            </ul>
    
        </div>
    )
}