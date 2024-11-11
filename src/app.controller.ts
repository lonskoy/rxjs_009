import { Controller, Get, Query } from "@nestjs/common";
import { RxjsService } from "./rxjs/rxjs.service";
import { IParamText } from "./rxjs/interfaces/text-param";
import { get } from "https";

@Controller("rxjs")
export class RxjsController {
  constructor(private rxjsService: RxjsService) {}

  @Get("repositories/")
  async repositories(@Query() query: IParamText) {
    const { text, hub } = query;
    return await this.rxjsService.searchRepositories(text, hub);
  }
}