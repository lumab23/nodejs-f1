import fastify from "fastify";
import cors from "@fastify/cors";

// logger: true -> para criar logs
const server = fastify({ logger: true});

server.register(cors, {
    origin: "*",
})

const teams = [
    { id: 1, name: "Ferrari", base: "Maranello, Italy" },
    { id: 2, name: "Mercedes", base: "Brackley, United Kingdom" },
    { id: 3, name: "Red Bull", base: "Milton Keynes, United Kingdom" },
    { id: 4, name: "McLaren", base: "Woking, United Kingdom" },
    { id: 5, name: "Aston Martin", base: "Silverstone, United Kingdom" },
    { id: 6, name: "Alpine", base: "Enstone, United Kingdom" },
    { id: 7, name: "Williams", base: "Grove, United Kingdom" },
    { id: 8, name: "Haas", base: "Kannapolis, United States" },
    { id: 9, name: "AlphaTauri", base: "Faenza, Italy" },
    { id: 10, name: "Alfa Romeo", base: "Hinwil, Switzerland" }
]

const drivers = [
    { id: 1, name: "Charles Leclerc", team: "Ferrari" },
    { id: 2, name: "Carlos Sainz", team: "Ferrari" },
    { id: 3, name: "Lewis Hamilton", team: "Mercedes" },
    { id: 4, name: "George Russell", team: "Mercedes" },
    { id: 5, name: "Max Verstappen", team: "Red Bull" },
    { id: 6, name: "Sergio Perez", team: "Red Bull" },
    { id: 7, name: "Lando Norris", team: "McLaren" },
    { id: 8, name: "Oscar Piastri", team: "McLaren" },
    { id: 9, name: "Fernando Alonso", team: "Aston Martin" },
    { id: 10, name: "Lance Stroll", team: "Aston Martin" },
    { id: 11, name: "Esteban Ocon", team: "Alpine" },
    { id: 12, name: "Pierre Gasly", team: "Alpine" },
    { id: 13, name: "Alexander Albon", team: "Williams" },
    { id: 14, name: "Logan Sargeant", team: "Williams" },
    { id: 15, name: "Kevin Magnussen", team: "Haas" },
    { id: 16, name: "Nico Hülkenberg", team: "Haas" },
    { id: 17, name: "Yuki Tsunoda", team: "AlphaTauri" },
    { id: 18, name: "Daniel Ricciardo", team: "AlphaTauri" },
    { id: 19, name: "Valtteri Bottas", team: "Alfa Romeo" },
    { id: 20, name: "Zhou Guanyu", team: "Alfa Romeo" }
]

interface DriverParams{
    id: string
}

server.get("/teams", async(req, res) => {
    res.type("application/json").code(200);
    return { teams };
})

server.get("/drivers", async(req, res) => {
    res.type("application/json").code(200);
    return { drivers };
})

server.get<{Params: DriverParams}>("/drivers/:id", async(req, res) => {
    const id = parseInt(req.params.id);
    const driver = drivers.find( d => d.id === id);

    if (!driver) {
        res.type("application/json").code(404);
        return { message: "Driver not found."}
    } else {
        res.type("application/json").code(200);
        return { driver}
    }
})

server.listen({ port: 3333 }, () => {
    console.log("Server init");
});