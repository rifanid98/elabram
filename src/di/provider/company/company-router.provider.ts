import { Router } from "express";
import { ProviderRegistry } from "../../type";
import {
  CompanyController,
  CompanyControllerImpl,
} from "../../../interface/extl/v1/company";
import {
  AuthMiddleware,
  AuthMiddlewareImpl,
} from "../../../interface/extl/v1/router";

export const CompanyHandlerProvider: ProviderRegistry[] = [
  {
    token: CompanyController,
    useClass: CompanyControllerImpl,
  },
  {
    token: AuthMiddleware,
    useClass: AuthMiddlewareImpl,
  },
  {
    token: "Router",
    useValue: Router(),
  },
];
