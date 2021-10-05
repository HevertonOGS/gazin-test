import AppError from "@shared/errors/AppError";
import Developer from "../infra/typeorm/entities/Developer";

import FakeDevelopersRepository from "../repositories/fakes/FakeDevelopersRepository";
import ListDeveloperService from "./ListDeveloperService";

let fakeDeveloperRepository: FakeDevelopersRepository;
let listDevelopers: ListDeveloperService;

describe('ListDevelopers', () => {
  beforeEach(() => {
    fakeDeveloperRepository = new FakeDevelopersRepository();

    listDevelopers = new ListDeveloperService(
      fakeDeveloperRepository,
    );
  });

  it('should be able list developer', async() => {
     await fakeDeveloperRepository.create({
      name: 'John Cena',
      sex: 'M',
      age: 35,
      hobby: 'WWE',
      birth_date: new Date(1986, 5, 20),
    });

    await fakeDeveloperRepository.create({
      name: 'Rei Mistério',
      sex: 'M',
      age: 35,
      hobby: 'WWE',
      birth_date: new Date(1986, 5, 20),
    });

    const developeres = await listDevelopers.execute();

    expect(developeres[0]).toBeInstanceOf(Developer);
    expect(developeres[1]).toBeInstanceOf(Developer);
  });

  it('should not be able show the developer list', async() => {
    await expect(
      listDevelopers.execute(),
    ).rejects.toBeInstanceOf([]);
  });
});
