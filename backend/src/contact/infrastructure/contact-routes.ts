import { Router } from 'express';
import { handleContactForm, getMessages } from './contact-controller';

const router = Router();
router.post('/', handleContactForm);
router.get('/', getMessages);
export default router;
