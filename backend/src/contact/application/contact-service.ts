import { AppDataSource } from '../../config/data-source';
import { ContactMessage } from '../domain/model/ContactMessage';

export class ContactService {
  private get repo() {
    return AppDataSource.getRepository(ContactMessage);
  }

  async saveMessage(name: string, email: string, message: string): Promise<ContactMessage> {
    const contact = this.repo.create({ name, email, message });
    return await this.repo.save(contact);
  }

  async getAllMessages(): Promise<ContactMessage[]> {
    return await this.repo.find({ order: { createdAt: 'DESC' } });
  }
}
