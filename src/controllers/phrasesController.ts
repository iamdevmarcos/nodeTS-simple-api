import { Request, Response } from 'express';
import { Sequelize } from 'sequelize';
import { Phrase } from '../models/Phrase';

export const createPhrase = async (req: Request, res: Response) => {
    if(req.body.author && req.body.txt) {
        let { author, txt } = req.body;
        
        let newPhrase = await Phrase.create({author, txt});

        res.status(201).json({
            id: newPhrase.id,
            author,
            txt
        }); 
    } else {
        res.status(406).json({
            error: "author e txt precisam ser enviados"
        });
    }
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

export const updatePhrase = async (req: Request, res: Response) => {
    let { id } = req.params;
    let { author, txt } = req.body;
    
    let phrase = await Phrase.findByPk(id);
    if(phrase) {
        if(author !== '' && txt !== '') {
            phrase.author = author;
            phrase.txt = txt;
            await phrase.save();
    
            res.json({ phrase });
        } else {
            res.status(406).json({ error: 'Author e txt não podem ser vazios' });
        }
    } else {
        res.json({ error: 'Frase não encontrada...' });
    }
}

export const deletePhrase = async (req: Request, res: Response) => {
    let { id } = req.params;
    await Phrase.destroy({
        where: { id }
    });
    res.status(200).json({});
}

export const randomPhrase = async (req: Request, res: Response) => {
    let phrase = await Phrase.findOne({
        order: [
            Sequelize.fn('RAND')
        ]
    });

    if(phrase) {
        res.status(200).json({ phrase });
    } else {
        res.json({ error: 'Não há frases cadastradas' });
    }
}