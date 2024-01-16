import express, { Request, Response } from 'express';
import cors from 'cors';

const app = express();
const PORT = 80;

app.use(express.json() as express.Application);
app.use(
    cors({
        origin: '*',
    })
);

app.get('/example', (req: Request, res: Response) => {
    res.status(200).send({
        JSON: "javascript object notation",
    });
});

app.post('/users/:id', (req: Request, res: Response) => {
    const { id } = req.params;
    const { name, email } = req.body;

    res.status(200).send({
        id,
        name,
        email,
    });
});

app.listen(
    PORT,
    () => console.log(`listening on http://localhost:${PORT}`)
);
