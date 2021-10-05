import { v4 as uuid } from 'uuid';

import IDevelopersRepository from '@modules/developers/repositories/IDevelopersRepository';
import ICreateDeveloperDTO from '@modules/developers/dtos/ICreateDeveloperDTO';

import Developer from '../../infra/typeorm/entities/Developer';

class FakeDevelopersRepository implements IDevelopersRepository {
  private developers: Developer[] = [];

  public async findById(id: string): Promise<Developer | undefined> {
    const findDeveloper = this.developers.find(developer => developer.id === id);

    return findDeveloper;
  }

  public async find(): Promise<Developer[] | undefined> {
    return this.developers;
  }

  public async create(developerData: ICreateDeveloperDTO): Promise<Developer> {
    const developer = new Developer();

    Object.assign(developer, { id: uuid() }, developerData);

    this.developers.push(developer);

    return developer;
  }

  public async save(developer: Developer): Promise<Developer> {
    const findIndex = this.developers.findIndex(findDeveloper => findDeveloper.id === developer.id);

    this.developers[findIndex] = developer;

    return developer;
  }

  public async delete(id: string): Promise<Developer> {
    const findIndex = this.developers.findIndex(findDeveloper => findDeveloper.id === id);
    const developer = this.developers[findIndex];

    this.developers.splice(findIndex, 1);

    return developer;
  }
}

export default FakeDevelopersRepository;
