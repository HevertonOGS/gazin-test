import { injectable, inject } from "tsyringe";

import AppError from "@shared/errors/AppError";
import IDevelopersRepository from "../repositories/IDevelopersRepository";

import Developer from "../infra/typeorm/entities/Developer";

interface IRequest {
  developer_id: string;
  name: string;
  sex: string;
  age: number;
  hobby: string;
  birth_date: Date;
}

@injectable()
class UpdateDeveloperService {
  constructor(
    @inject('DevelopersRepository')
    private developersRepository: IDevelopersRepository
  ) {}

  public async execute({
    developer_id,
    name,
    sex,
    age,
    hobby,
    birth_date
  }: IRequest): Promise<Developer> {
    const developer = await this.developersRepository.findById(developer_id);

    if(!developer)
      throw new AppError('Developer not found.');

    developer.name  = name;
    developer.sex = sex;
    developer.age = age;
    developer.hobby = hobby;
    developer.birth_date = birth_date;

    return this.developersRepository.save(developer);
  }
}

export default UpdateDeveloperService;
