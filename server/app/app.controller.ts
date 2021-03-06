import { Controller, Get } from '@nestjs/common';

@Controller('api')
export class AppController {
  @Get(['speakers'])
  findAllSpeakers(): any[] {
    return [
      {
        name: 'Name Dudeman s',
        talk: 'Angular for your face',
        image: 'http://via.placeholder.com/50x50'
      },
      {
        name: 'Some Person',
        talk: 'High-five typescript',
        image: 'http://via.placeholder.com/50x50'
      },
      {
        name: 'Samwise Gamgee',
        talk: 'Lord of the Angular',
        image: 'http://via.placeholder.com/50x50'
      }
    ];
  }
}
