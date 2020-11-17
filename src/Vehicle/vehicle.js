import './vehicle.css'

const vehicle = props => ( <
    div className = 'vehicle' >
    <
    h1 >
    vehicle: { props.Vehicletype } <
    /h1> <
    p > Name: { props.Name } < /p> <
    p > Manufacturer: { props.Manufacturer } < /p> <
    p > Fuel: { props.Fueltype } < /p>

    <
    /div>
);
export default vehicle;