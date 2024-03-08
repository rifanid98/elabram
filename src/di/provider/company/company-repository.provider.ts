import KnexInstance from "../../../infrastructure/persistence/postgresql/knex/knex";
import { ProviderRegistry } from "../../type";

export const CompanyRepositoryProvider: ProviderRegistry[] = [
  {
    token: "Knex",
    useClass: KnexInstance,
  },
];
