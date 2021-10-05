import AppError from "@shared/errors/AppError";

import FakeDevelopersRepository from "../repositories/fakes/FakeDevelopersRepository";
import ShowDeveloperService from "./ShowDeveloperService";

let fakeDevelopersRepository: FakeDevelopersRepository;
let showDeveloper: ShowDeveloperService;

describe('ShowDeveloper', () => {
  beforeEach(() => {
    fakeDevelopersRepository = new FakeDevelopersRepository();

    showDeveloper = new ShowDeveloperService(
      fakeDevelopersRepository,
    );
  });

  it('should be able show the developer', async() => {
    const developer = await fakeDevelopersRepository.create({
      name: 'John Cena',
      sex: 'M',
      age: 35,
      hobby: 'WWE',
      birth_date: new Date(1986, 5, 20),
    });

    const developerCheck = await showDeveloper.execute({
      developer_id: developer.id,
    });

    expect(developerCheck.name).toBe('John Cena');
    expect(developerCheck.sex).toBe('M');
    expect(developerCheck.age).toBe(35);
  });

  it('should not be able show the developer from non-existing developer', async() => {
    await expect(
      showDeveloper.execute({
        developer_id: 'non-existing-developer-id'
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
