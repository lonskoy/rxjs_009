import { Module } from "@nestjs/common";
import { RxjsController } from "./app.controller";
import { AppService } from "./app.service";
import { RxjsModule } from "./rxjs/rxjs.module"; 

@Module({
  imports: [RxjsModule], 
  controllers: [RxjsController], 
  providers: [AppService], 
})
export class AppModule {}