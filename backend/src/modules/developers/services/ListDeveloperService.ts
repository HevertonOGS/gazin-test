import { injectable, inject } from "tsyringe";

import AppError from "@shared/errors/AppError";
import IDevelopersRepository from "../repositories/IDevelopersRepository";

import Developer from "../infra/typeorm/entities/Developer";

@injectable()
class ListDeveloperService {
  constructor(
    @inject('DevelopersRepository')
    private developersRepository: IDevelopersRepository,
  ) {}

  public async execute(): Promise<Developer[]> {
    const developers = await this.developersRepository.find();

    if(!developers || developers.length === 0)
      return [];

    return developers;
  }
}

export default ListDeveloperService;
