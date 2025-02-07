import express from 'express';

import { isAuthenticated } from '../../middlewares/authMiddleware.js';
import { isMemberPartOfWorkspaceController } from '../../controllers/memberController.js';

const router = express.Router();

router.get('/workspace/:workspace', isAuthenticated, isMemberPartOfWorkspaceController);

export default router;