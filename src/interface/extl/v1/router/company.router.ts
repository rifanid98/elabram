import { Router } from "express";
import { autoInjectable, inject, registry, singleton } from "tsyringe";
import { AppRouter } from "./router.config";
import { CompanyControllerImpl } from "../company";
import { CompanyHandlerProvider } from "../../../../di/provider/company/company-router.provider";
import { AuthMiddlewareImpl } from "./middleware";

@singleton()
@autoInjectable()
@registry(CompanyHandlerProvider)
export class CompanyRouter extends AppRouter {
  constructor(
    @inject("Router") public router?: Router,
    private controller?: CompanyControllerImpl,
    private middleware?: AuthMiddlewareImpl,
  ) {
    super();
    this.name = "company";
    this.routes();
  }

  public routes() {
    this.router.use(this.middleware.authenticate.bind(this.middleware));
    this.router.post("/", this.controller.create.bind(this.controller));
    this.router.get("/:id", this.controller.view.bind(this.controller));
    this.router.put("/:id", this.controller.edit.bind(this.controller));
    this.router.delete("/:id", this.controller.delete.bind(this.controller));
  }
}
