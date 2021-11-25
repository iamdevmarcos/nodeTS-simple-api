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

export const listPhrases = async (req: Request, res: Response) => {
    const list = await Phrase.findAll();
    res.json({list});
}

export const getPhrase = async (req: Request, res: Response) => {
    const { id } = req.params;
    let phrase = await Phrase.findByPk(id);

    if(phrase) {
        res.json({ phrase });
    } else {
        res.json({error: "Phrase not found..."});
    }
}