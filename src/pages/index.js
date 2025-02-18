'use client'
import { useState } from "react";
import Card from "@/components/countrycard";
import Filter from "@/components/filter";
import Search from "@/components/search";
import { useTheme } from "@/context/themeContext";
import Nav from "@/components/nav";

export default function Home({countries}) {
  const [selectedRegion, setSelectedRegion]= useState('All')
  const [searchCountry, setSearchCountry] = useState('')
  const {theme} = useTheme();
  const [currentPage, setCurrentPage] = useState(1);
  const countriesPerPage = 8;

  const handleRegionChange = (e)=>{
    setSelectedRegion(e.target.value)
  }
  const handleSearchChange = (e)=>{
    setSearchCountry(e.target.value)
  }
  // const filteredCountries = selectedRegion === 'All' ? countries : countries.filter(country => country.region === selectedRegion)

  const filteredCountries = countries
  .filter(country => selectedRegion === 'All' || country.region === selectedRegion)
  .filter(country => country.name.common.toLowerCase().includes(searchCountry.toLowerCase().trim()))
  .sort((a, b) => a.name.common.localeCompare(b.name.common))

  const indexofLastCountry = currentPage * countriesPerPage;
  const indexofFirstCountry = indexofLastCountry - countriesPerPage;
  const currentCountries = filteredCountries.slice(indexofFirstCountry, indexofLastCountry)

  const totalPages = Math.ceil(filteredCountries.length / countriesPerPage);
  console.log(totalPages);

  const handleNextPage = () => {
    if(currentPage < totalPages){
      setCurrentPage(currentPage + 1)
    }
  }

  const handlePrevPage = () =>{
    if(currentPage > 1){
      setCurrentPage(currentPage - 1)
    }
  }
  
  
  return (
   <div className={`flex flex-col justify-center items-center w-full h-full p-4 ${theme === 'light' ? 'bg-[#202C37] text-white' : ' bg-white text-black'}`}>
    <Nav/>
    <div className='flex justify-between w-full'>
    <Search searchCountry={searchCountry} handleSearchChange={handleSearchChange}/>  
    <Filter selected={selectedRegion} handleRegionChange={handleRegionChange}/>
    </div>
   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
   {currentCountries.map((country)=>(
      <Card countries={country} key={country?.name?.common}/>
    ))}
   </div>
   <div className="space-x-4">
    <button className="px-4 py-2 bg-blue-400 rounded disabled:bg-slate-400 text-white"
    onClick={handlePrevPage}
    disabled={currentPage === 1}
    >Previous</button>
    <span className="text-lg">{currentPage}</span>
    <button className="px-4 py-2 bg-blue-400 rounded disabled:opacity-50 text-white"
    onClick={handleNextPage}
    disabled={currentPage === totalPages}>Next</button>
   </div>
   </div>
  );
}

    

export async function getStaticProps(){
  const res = await fetch('https://restcountries.com/v3.1/all')
  const countries = await res.json();
  return{props: {countries}}
}
