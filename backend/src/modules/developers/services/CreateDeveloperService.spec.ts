import AppError from "@shared/errors/AppError";

import FakeDevelopersRepository from "../repositories/fakes/FakeDevelopersRepository";
import CreateDeveloperService from "./CreateDeveloperService";

let fakeDevelopersRepository: FakeDevelopersRepository;
let createDeveloper: CreateDeveloperService;

describe('CreateDeveloper', () => {
  beforeEach(() => {
    fakeDevelopersRepository = new FakeDevelopersRepository();

    createDeveloper = new CreateDeveloperService(
      fakeDevelopersRepository
    );
  });

  it('should be able to create a new developer', async() => {
    const developer = await createDeveloper.execute({
      name: 'John Cena',
      sex: 'M',
      age: 35,
      hobby: 'WWE',
      birth_date: new Date(1986, 5, 20),
    });

    expect(developer).toHaveProperty('id');
  });
})
