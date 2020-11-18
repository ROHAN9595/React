import { useState } from 'react';
import React from 'react';
import './App.css';
import Vehicle from './Vehicle/vehicle';

const App = props => {
    const [vehicleState, setVehicleState] = useState({
        vehicles: [
            { ID: "1", Vehicletype: "Car", Name: "Altroz", Manufacturer: "Tata", Fueltype: "Petrol" },
            { ID: "2", Vehicletype: "Car", Name: "Seltos", Manufacturer: "Kia", Fueltype: "Diesel" },
            { ID: "3", Vehicletype: "Car", Name: "Bolero", Manufacturer: "Mahindra", Fueltype: "Diesel" },
            { ID: "4", Vehicletype: "Car", Name: "Safari", Manufacturer: "Tata", Fueltype: "Diesel" }

        ],
        Count: 4,
        showvehicles: true,
        showvehicleslabel: "hide vehicles"
    })


    const addvehiclehandler = () => {
        const vehiclelist = [...vehicleState.vehicles];
        const newvehicle = { Vehicletype: "Car", Name: "Nexon", Manufacturer: "Tata", Fueltype: "Electric" }
        vehiclelist.push(newvehicle);
        setVehicleState({
            vehicles: vehiclelist,
            count: vehicleState.count + 1,
            showvehicles: vehicleState.showvehicles,
            showvehicleslabel: vehicleState.showvehicleslabel
        })
    }
    const deletevehiclehandler = (vehicleIndex) => {
        const vehiclelist = [...vehicleState.vehicles];
        vehiclelist.slice(vehicleIndex, 1);
        setVehicleState({
            vehicles: vehiclelist,
            count: vehicleState.count - 1,
            showvehicles: vehicleState.showvehicles,
            showvehicleslabel: vehicleState.showvehicleslabel
        })

    }

    const togglevehiclelisthandler = () => {
        let togglevehicle = !vehicleState.showvehicles;
        let label = "";

        if (togglevehicle) {
            label = "Hide Vehicle";
        } else {
            label = "show vehicles";
        }
        setVehicleState({
            Vehicles: vehicleState.vehicles,
            Count: vehicleState.Count,
            showvehicles: togglevehicle,
            showvehicleslabel: label
        })
    }
    let vehiclelist = null;
    if (vehicleState.showvehicles) {
        vehiclelist = ( < div className = "row" > {
                vehicleState.vehicles.map((vehicleItem, index) => {
                    return <Vehicle key = { vehicleItem.ID }
                    Vehicletype = { vehicleItem.Vehicletype }
                    Name = { vehicleItem.Name }
                    Manufacturer = { vehicleItem.Manufacturer }
                    Fueltype = { vehicleItem.Fueltype }
                    onDelete = { deletevehiclehandler.bind(this, index) }
                    />
                })
            } <
            /div>
        )
    }

    return ( <
        div className = "App container-fluid" >
        <
        div className = "row" >
        <
        div className = "col-lg-6" >
        <
        h1 > List of Vehicles | Total vehicle: { vehicleState.Count } < /h1> <
        /div> <
        div className = "col-lg-6 divbutton" >
        <
        button className = "btn btn-primary btn buttonUpdate"
        onClick = { addvehiclehandler } > ADD VEHICLE < /button> <
        button className = "btn btn-secondary btn buttonUpdate"
        onClick = { togglevehiclelisthandler } > { vehicleState.showvehicleslabel } < /button> <
        /div>

        <
        /div> { vehiclelist } <
        /div>
    )
};
export default App;