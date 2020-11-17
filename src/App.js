import React from 'react';
import './App.css';
import Vehicle from './Vehicle/vehicle';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            vehicles: [
                { Vehicletype: "Car", Name: "Altroz", Manufacturer: "Tata", Fueltype: "Petrol" },
                { Vehicletype: "Car", Name: "Seltos", Manufacturer: "Kia", Fueltype: "Diesel" },
                { Vehicletype: "Car", Name: "Ballero", Manufacturer: "Mahindra", Fueltype: "Diesel" },
                { Vehicletype: "Car", Name: "Safari", Manufacturer: "Strome", Fueltype: "Petrol" },
            ]
        };
    }

    updatehandler = () => {
        this.state = {
            vehicles: [
                { Vehicletype: "Car", Name: "Altroz", Manufacturer: "Tata", Fueltype: "Petrol" },
                { Vehicletype: "Car", Name: "Seltos", Manufacturer: "Kia", Fueltype: "Diesel" },
                { Vehicletype: "Car", Name: "Ballero", Manufacturer: "Mahindra", Fueltype: "Diesel" },
                { Vehicletype: "Car", Name: "Safari", Manufacturer: "Strome", Fueltype: "Petrol" },
            ]
        };
    }


    render() {
        return ( <
            div className = "App container-fluid" >
            <
            div className = "row" >
            <
            h1 > List of Vehicles. < /h1> <
            button className = "btn btn-primary btn buttonDiv buttonUpdate"
            onClick = { this.updatehandler } > UPDATE LIST < /button> <
            /div> <
            div className = "row" >
            <
            Vehicle Vehicletype = { this.state.vehicles[0].Vehicletype }
            Name = { this.state.vehicles[0].Name }
            Manufacturer = { this.state.vehicles[0].Manufacturer }
            Fueltype = { this.state.vehicles[0].Fueltype }
            /> <
            Vehicle Vehicletype = { this.state.vehicles[1].Vehicletype }
            Name = { this.state.vehicles[1].Name }
            Manufacturer = { this.state.vehicles[1].Manufacturer }
            Fueltype = { this.state.vehicles[1].Fueltype }
            /> <
            Vehicle Vehicletype = { this.state.vehicles[2].Vehicletype }
            Name = { this.state.vehicles[2].Name }
            Manufacturer = { this.state.vehicles[2].Manufacturer }
            Fueltype = { this.state.vehicles[2].Fueltype }
            /> <
            Vehicle Vehicletype = { this.state.vehicles[3].Vehicletype }
            Name = { this.state.vehicles[3].Name }
            Manufacturer = { this.state.vehicles[3].Manufacturer }
            Fueltype = { this.state.vehicles[3].Fueltype }
            /> <
            /div> <
            /div>
        );
    };

}

export default App;