import Image from "next/image"
import Link from "next/link"
import { useTheme } from "@/context/themeContext"
export default function Card({countries}) {
    const {theme} = useTheme();
    return(
       
            <Link className={`w-[220px] rounded shadow-lg ${theme === 'light' ? ' bg-[#2B3945]' : 'bg-white'}`} href={`/${countries?.cca3}`}>
               
                <Image src={countries?.flags?.svg}  alt="flag" width={100} height={100} className="w-[220px] h-[150px] object-cover rounded-t"/>
               
               <div className="px-6 py-4 space-y-6">
               <h3 className="font-medium">{countries?.name?.common}</h3>
               <div>
               <p>Population: <span className="text-[#858585] text-sm">{countries?.population}</span></p>
                <p>Region: <span className="text-[#858585] text-sm">{countries?.region}</span></p>
                <p>Capital: <span className="text-[#858585] text-sm">{countries?.capital}</span></p>
               </div>
               </div>
            </Link>
        
    )
}