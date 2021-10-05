import AppError from "@shared/errors/AppError";

import FakeDevelopersRepository from "../repositories/fakes/FakeDevelopersRepository";
import DeleteDeveloperService from './DeleteDeveloperService';

let fakeDevelopersRepository: FakeDevelopersRepository;
let deleteDeveloper: DeleteDeveloperService;

describe('DeleteDeveloper', () => {
  beforeEach(() => {
    fakeDevelopersRepository = new FakeDevelopersRepository();

    deleteDeveloper = new DeleteDeveloperService(
      fakeDevelopersRepository,
    );
  });

  it('should be able delete the developer', async() => {
    const developer = await fakeDevelopersRepository.create({
      name: 'John Cena',
      sex: 'M',
      age: 35,
      hobby: 'WWE',
      birth_date: new Date(1986, 5, 20),
    });

    const developerCheck = await deleteDeveloper.execute({
      developer_id: developer.id,
    });

    expect(developerCheck.name).toBe('John Cena');
    expect(developerCheck.sex).toBe('M');
    expect(developerCheck.age).toBe(35);
  });

  it('should not be able delete the developer from non-existing developer', async() => {
    await expect(
      deleteDeveloper.execute({
        developer_id: 'non-existing-developer-id'
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
