import { Controller, Get, Param, NotFoundException } from '@nestjs/common';
import { MessageService } from './message.service';
@Controller('messages')
export class MessagesController {
  constructor(public messageService: MessageService) {}

  @Get()
  getAllMessages() {
    return this.messageService.find();
  }

  @Get('/:id')
  async getSingleMessage(@Param('id') id: string) {
    const message = await this.messageService.findOne(id);

    if (!message) {
      throw new NotFoundException('message not found');
    }
    return message;
  }
}
