import { Controller, Get } from "@nestjs/common";

//Controller
@Controller(/*Define base route for these endpoints */ "/say")
export class AppController {
  @Get("/hi-there")
  hiThere() {
    return "hi there";
  }

  @Get("/bye-there")
  byeThere() {
    return "bye there";
  }
}
