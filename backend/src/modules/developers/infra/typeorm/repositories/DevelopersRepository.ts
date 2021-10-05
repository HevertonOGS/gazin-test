import { getRepository, Repository, Not } from 'typeorm';

import IDevelopersRepository from '@modules/developers/repositories/IDevelopersRepository';
import ICreateDeveloperDTO from '@modules/developers/dtos/ICreateDeveloperDTO';

import Developer from '../entities/Developer';

class DevelopersRepository implements IDevelopersRepository {
  private ormRepository: Repository<Developer>;

  constructor() {
    this.ormRepository = getRepository(Developer);
  }

  public async findById(id: string): Promise<Developer | undefined> {
    const developer = await this.ormRepository.findOne(id);

    return developer;
  }

  public async find(): Promise<Developer[] | undefined> {
    const developers = await this.ormRepository.find();

    return developers;
  }

  public async create(developerData: ICreateDeveloperDTO): Promise<Developer> {
    const developer = this.ormRepository.create(developerData);

    await this.ormRepository.save(developer);

    return developer;
  }

  public async save(developer: Developer): Promise<Developer> {
    return this.ormRepository.save(developer);
  }

  public async delete(id: string): Promise<Developer | undefined> {
    const developer = await this.ormRepository.findOne(id);

    this.ormRepository.delete(id);

    return developer;
  }
}

export default DevelopersRepository;
