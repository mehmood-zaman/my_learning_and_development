import { readFile, writeFile } from 'fs/promises';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MessageRepository {
  async findOne(id: string) {
    const content = await readFile('message.json', 'utf-8');
    const messages = JSON.parse(content);

    return messages[id];
  }
  async find() {
    const content = await readFile('message.json', 'utf-8');
    const messages = JSON.parse(content);

    return messages;
  }
  async create(content: string) {
    const contents = await readFile('message.json', 'utf-8');
    const messages = JSON.parse(contents);

    const id = Math.floor(Math.random() * 999);

    messages[id] = { id, content };

    await writeFile('message.json', JSON.stringify(messages));
  }
}
