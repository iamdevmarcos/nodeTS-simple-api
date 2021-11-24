import { Request, Response } from 'express';

export const ping = (req: Request, res: Response) => {
    res.json({
        pong: true
    });
}

export const randomNumber = (req: Request, res: Response) => {
    let nRand: number = Math.floor(Math.random() * 10);

    res.json({
        number: nRand
    });
}

export const getName = (req: Request, res: Response) => {
    let name: string = req.params.name;

    res.json({name: `Você enviou o nome ${name}`});
}