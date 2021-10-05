import { injectable, inject } from "tsyringe";

import AppError from "@shared/errors/AppError";
import IDevelopersRepository from "../repositories/IDevelopersRepository";

import Developer from "../infra/typeorm/entities/Developer";

interface IRequest {
  developer_id: string;
}

@injectable()
class DeleteDeveloperService {
  constructor(
    @inject('DevelopersRepository')
    private developersRepository: IDevelopersRepository,
  ) {}

  public async execute({
    developer_id,
  }: IRequest): Promise<Developer> {
    const developer = await this.developersRepository.delete(developer_id);

    if(!developer)
      throw new AppError('Developer not founded.');

    return developer;
  }
}

export default DeleteDeveloperService;
