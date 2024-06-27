import express , {Request , Response} from "express";
import{ findGamesController } from"./Controllers/FindGameController";

const app = express();
app.use(express.json());

app.get("/", async (req:Request, res:Response) => {
	res.send(await findGamesController())

});
app.listen(3000);
