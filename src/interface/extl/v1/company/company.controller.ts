import { Response as HttpResponse } from "../../../../utils";
import { autoInjectable, registry, singleton } from "tsyringe";
import { Request, Response } from "express";
import { CompanyControllerProvider } from "../../../../di/provider/company/company-controller.provider";
import { Logger, Validator } from "../../../../core/port/infrastructure";
import { HttpStatus } from "../../../../core/constant";
import { GlobalResponse } from "../../../../core/constant/resp.constant";
import { Company } from "../../../../core/entity/company.entity";
import { CompanyService } from "../../../../core/port/service/company.service";
import {
  CompanyCreateDto,
  CompanyDeleteDto,
  CompanyUpdateDto,
  CompanyViewDto,
} from "./company.dto";

export class CompanyController {
  async create(req: Request, res: Response): Promise<GlobalResponse> {
    return res.send(HttpResponse.success());
  }

  async view(req: Request, res: Response): Promise<GlobalResponse> {
    return res.send(HttpResponse.success());
  }

  async edit(req: Request, res: Response): Promise<GlobalResponse> {
    return res.send(HttpResponse.success());
  }

  async delete(req: Request, res: Response): Promise<GlobalResponse> {
    return res.send(HttpResponse.success());
  }
}

@singleton()
@autoInjectable()
@registry(CompanyControllerProvider)
export class CompanyControllerImpl implements CompanyController {
  constructor(
    private service: CompanyService,
    private logger: Logger,
    private validator: Validator,
  ) {}

  async create(req: Request, res: Response): Promise<GlobalResponse> {
    const { body } = req;
    const payload = new CompanyCreateDto().bind(body);
    payload.created_by = res.locals.id;

    const validate = await this.validator.validate<CompanyCreateDto>(payload);
    if (validate.error) {
      return res
        .status(HttpStatus.BAD_REQUEST)
        .send(HttpResponse.badrequest({ errors: validate.messages }));
    }

    const result = await this.service.create(new Company(payload));
    if (result.error) {
      return res
        .status(HttpStatus.UNPROCESSABLE_ENTITY)
        .send(HttpResponse.unprocessableentity({ error: result.error }));
    }

    this.logger.Info({ message: "company create success" });

    return res
      .status(HttpStatus.CREATED)
      .send(HttpResponse.created({ data: result.company }));
  }

  async view(req: Request, res: Response): Promise<GlobalResponse> {
    const { params } = req;
    const payload = new CompanyViewDto().bindObject({
      id: params["id"].toString(),
    });

    const validate = await this.validator.validate<CompanyViewDto>(payload);
    if (validate.error) {
      return res
        .status(HttpStatus.BAD_REQUEST)
        .send(HttpResponse.badrequest({ errors: validate.messages }));
    }

    const result = await this.service.view(new Company(payload));
    if (result.error) {
      return res
        .status(HttpStatus.UNPROCESSABLE_ENTITY)
        .send(HttpResponse.unprocessableentity({ error: result.error }));
    }

    this.logger.Info({ message: "company view success" });

    return res
      .status(HttpStatus.CREATED)
      .send(HttpResponse.created({ data: result.company }));
  }

  async edit(req: Request, res: Response): Promise<GlobalResponse> {
    const { body, params } = req;
    const payload = new CompanyUpdateDto().bind(body);
    payload.id = parseInt(params["id"].toString());

    const validate = await this.validator.validate<CompanyUpdateDto>(payload);
    if (validate.error) {
      return res
        .status(HttpStatus.BAD_REQUEST)
        .send(HttpResponse.badrequest({ errors: validate.messages }));
    }

    const result = await this.service.edit(new Company(payload));
    if (result.error) {
      return res
        .status(HttpStatus.UNPROCESSABLE_ENTITY)
        .send(HttpResponse.unprocessableentity({ error: result.error }));
    }

    this.logger.Info({ message: "company edit success" });

    return res
      .status(HttpStatus.CREATED)
      .send(HttpResponse.created({ data: result.company }));
  }

  async delete(req: Request, res: Response): Promise<GlobalResponse> {
    const { params } = req;
    const payload = new CompanyDeleteDto().bindObject({
      id: params["id"].toString(),
    });

    const validate = await this.validator.validate<CompanyDeleteDto>(payload);
    if (validate.error) {
      return res
        .status(HttpStatus.BAD_REQUEST)
        .send(HttpResponse.badrequest({ errors: validate.messages }));
    }

    const result = await this.service.delete(new Company(payload));
    if (result.error) {
      return res
        .status(HttpStatus.UNPROCESSABLE_ENTITY)
        .send(HttpResponse.unprocessableentity({ error: result.error }));
    }

    this.logger.Info({ message: "company delete success" });

    return res
      .status(HttpStatus.CREATED)
      .send(HttpResponse.created({ data: result.company }));
  }
}
