import { Request, Response } from 'express';
import { ContactService } from '../application/contact-service';

const contactService = new ContactService();

export const handleContactForm = async (req: Request, res: Response) => {
  console.log('Body recibido:', req.body); //comprobaciones por consola


  const { name, email, message } = req.body;

  if (!name || !email) {
    return res.status(400).json({ message: 'Nombre y correo electrónico son obligatorios' });
  }

  try {
    const saved = await contactService.saveMessage(name, email, message || '');
    return res.status(201).json({ message: 'Mensaje enviado correctamente', saved });
  } catch (error) {
    return res.status(500).json({ message: 'Error al enviar el mensaje', error });
  }
};

export const getMessages = async (_req: Request, res: Response) => {
  try {
    const messages = await contactService.getAllMessages();
    res.json(messages);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener los mensajes', error });
  }
};
