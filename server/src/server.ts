import express, { Application, Request, Response, NextFunction } from 'express';
import { createServer } from 'http';
const bodyParser = require('body-parser');

const app: Application = express();
const httpServer = createServer(app);
const cors = require('cors');
const PORT: number = 5001;

app.use(cors());
app.use(bodyParser.json({ limit: '3mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));

app.get('/', (req: Request, res: Response) => {
    res.send('PlusOne Assignments');
});


httpServer.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`))

