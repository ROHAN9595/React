import './vehicle.css'

const vehicle = props => ( <
    div className = "vehicle col-lg-3" >
    <
    h1 >
    vehicle: { props.Vehicletype } <
    /h1> <
    p onClick = { props.updateclick } > Name: { props.Name } < /p> <
    p > Manufacturer: { props.Manufacturer } < /p> <
    p > Fuel: { props.Fueltype } < /p> <
    button className = "btn btn-danger btn-sm"
    onClick = { props.onDelete } > Delete < /button> <
    /div>
);
export default vehicle;