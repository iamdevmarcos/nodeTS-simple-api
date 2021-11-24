import { Router } from 'express';
import * as ApiController from '../controllers/apiController';

const router = Router();

router.get('/ping', ApiController.ping);

router.get('/random', ApiController.randomNumber);

router.get('/name/:name', (req, res) => {
    let name: string = req.params.name;

    res.json({name: `Você enviou o nome ${name}`});
});

export default router;