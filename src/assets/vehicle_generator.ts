import {readFileSync, writeFileSync} from "fs";
import {join} from "path";

const vehicleTypes = ["SUV", "Compact", "Sedan", "Coupe", "Van", "Convertible", "Pickup", "Hatchback"];

const vehicles = [];

for (let i = 1; i <= 100; i++) {
    const vehicle = {
        "id": i.toString().padStart(4, "0"),
        "type": vehicleTypes[Math.floor(Math.random() * vehicleTypes.length)],
        "status": {
            "brakes": Math.floor(Math.random() * 6),
            "fluids": Math.floor(Math.random() * 6),
            "gas": Math.floor(Math.random() * 6)
        }
    };
    vehicles.push(vehicle);
}

writeFileSync(join(__dirname, "vehicles.json"), JSON.stringify(vehicles), {flag: "w"});

const contents = readFileSync(join(__dirname, "vehicles.json"), "utf-8");
console.log(contents);