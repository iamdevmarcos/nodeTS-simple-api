import { Router } from 'express';

import * as ApiController from '../controllers/apiController';
import * as PhrasesController from '../controllers/phrasesController';

const router = Router();

router.get('/ping', ApiController.ping);
router.get('/random', ApiController.randomNumber);
router.get('/name/:name', ApiController.getName);

router.post('/phrases', PhrasesController.createPhrase);
router.get('/phrases', PhrasesController.listPhrases);
router.get('/phrase/random', PhrasesController.randomPhrase);

router.get('/phrase/:id', PhrasesController.getPhrase);
router.put('/phrase/:id', PhrasesController.updatePhrase);
router.delete('/phrase/:id', PhrasesController.deletePhrase);

export default router;