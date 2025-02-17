export default function CountryDet({country}) {
    return(
        <div>
            <h1>{country?.name?.common}</h1>
            <p>{country?.population}</p>
        </div>
    )
}
export async function getStaticPaths(){
    const res = await fetch('https://restcountries.com/v3.1/all')
    const countries = await res.json();

    const paths = countries.map((country)=>(
        {params: {slug: country.cca3.toLowerCase()}}
    ))
     // We'll pre-render only these paths at build time.
  // { fallback: true } means other routes should be rendered as well
    return {paths, fallback: true}
}
export async function getStaticProps({params}){
    const res = await fetch(`https://restcountries.com/v3.1/alpha/${params.slug}`)
    const country = await res.json();
    return { props: { country: country[0] } };
}