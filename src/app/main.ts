import "./styles.sass";

import {fetchVehicles} from "../assets/utils";
import {Vehicle} from "./vehicle";

function createVehicleCards(vehicles: Vehicle[]) {
    const vehiclesDom = document.getElementById("vehicles");
    if (vehiclesDom) {
        vehicles.forEach((vehicle) => {
            const card = document.createElement("div");
            card.classList.add("card");

            const image = document.createElement("img");
            image.src = `assets/images/${vehicle.type.toLowerCase()}.png`;

            const cardBody = document.createElement("div");
            cardBody.classList.add("card-body");

            const cardTitle = document.createElement("h5");
            cardTitle.classList.add("card-title");
            cardTitle.innerText = vehicle.type;

            const cardText = document.createElement("p");
            cardText.classList.add("card-text");
            cardText.innerText = `Brakes: ${vehicle.status.brakes}\nFluids: ${vehicle.status.fluids}\nGas: ${vehicle.status.gas}`;

            card.appendChild(image);
            cardBody.appendChild(cardTitle);
            cardBody.appendChild(cardText);
            card.appendChild(cardBody);
            vehiclesDom.appendChild(card);
        });
    }
}

fetchVehicles().then((vehicles) => {
    createVehicleCards(vehicles);
}).catch((error) => console.error(error));
