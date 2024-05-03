import { server } from "./server/Server";
import { router } from "./server/routes";

server.listen(process.env.PORT, () => console.log("oi"))
