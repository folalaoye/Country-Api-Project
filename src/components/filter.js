export default function Filter({selected, handleRegionChange}) {
    return (
        <div>
           <select value={selected} onChange={handleRegionChange}>
            <option value='All'>Filter by Region</option>
            <option value='Africa'>Africa</option>
            <option value='Americas'>Americas</option>
            <option value='Asia'>Asia</option>
            <option value='Europe'>Europe</option>
            <option value='Oceania'>Oceania</option>
           </select>
        </div>
    );
}