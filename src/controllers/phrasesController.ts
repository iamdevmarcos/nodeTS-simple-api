import { Request, Response } from 'express';
import { Phrase } from '../models/Phrase';

export const createPhrase = async (req: Request, res: Response) => {
    let { author, txt } = req.body;

    let newPhrase = await Phrase.create({author, txt});

    res.status(201).json({
        id: newPhrase.id,
        author,
        txt
    });
}