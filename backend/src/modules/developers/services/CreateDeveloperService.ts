import { injectable, inject } from 'tsyringe';

import IDevelopersRepository from '../repositories/IDevelopersRepository';

import Developer from '../infra/typeorm/entities/Developer';

interface IRequest {
  name: string;
  sex: string;
  age: number;
  hobby: string;
  birth_date: Date;
}

@injectable()
class CreateDeveloperService {
  constructor(
    @inject('DevelopersRepository')
    private developersRepository: IDevelopersRepository,
  ) {}

  public async execute({ name, sex, age, hobby, birth_date }: IRequest): Promise<Developer> {

    const developer = await this.developersRepository.create({
      name,
      sex,
      age,
      hobby,
      birth_date,
    });

    return developer;
  }
}

export default CreateDeveloperService;
