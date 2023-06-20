export async function fetchVehicles() {
    const response = await fetch("assets/vehicles.json");
    return await response.json();
}