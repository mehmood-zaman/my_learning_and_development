import { MessageRepository } from './messages.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MessageService {
  constructor(public messageRepo: MessageRepository) {}

  findOne(id: string) {
    return this.messageRepo.findOne(id);
  }

  find() {
    return this.messageRepo.find();
  }

  create(content: string) {
    return this.create(content);
  }
}
