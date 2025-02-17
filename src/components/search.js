import { BsSearch } from "react-icons/bs";
export default function Search({searchCountry, handleSearchChange}) {
    return(
        <div>
            <div className="flex items-center bg-white rounded-md shadow-md p-2">
                <BsSearch className="text-[#858585]"/>
                <input type="text" placeholder="Search for a country..." className="bg-transparent outline-none ml-2"
                value={searchCountry}
                onChange={handleSearchChange}
                />
            </div>
        </div>
    )
}