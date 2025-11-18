/**
 * @summary
 * Main API router
 * Handles API versioning and route distribution
 *
 * @module routes
 */

import { Router } from 'express';
import v1Routes from './v1';

const router = Router();

router.use('/v1', v1Routes);

export default router;
