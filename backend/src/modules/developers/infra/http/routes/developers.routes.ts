import { Router } from 'express';

import DeveloperController from '../controllers/DeveloperController';

const developerRouter = Router();
const developerController = new DeveloperController();

developerRouter.post('/', developerController.create);
developerRouter.put('/:id', developerController.update);
developerRouter.get('/:id', developerController.show);
developerRouter.get('/', developerController.list);
developerRouter.delete('/:id', developerController.delete);

export default developerRouter;
