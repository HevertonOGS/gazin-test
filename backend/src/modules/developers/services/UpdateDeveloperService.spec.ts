import AppError from "@shared/errors/AppError";

import FakeDevelopersRepository from "../repositories/fakes/FakeDevelopersRepository";
import UpdateDeveloperService from "./UpdateDeveloperService";

let fakeDevelopersRepository: FakeDevelopersRepository;
let updateDeveloper: UpdateDeveloperService;

describe('UpdateDeveloper', () => {
  beforeEach(() => {
    fakeDevelopersRepository = new FakeDevelopersRepository();

    updateDeveloper = new UpdateDeveloperService(
      fakeDevelopersRepository,
    );
  });

  it('should be able update the profile', async() => {
    const developer = await fakeDevelopersRepository.create({
      name: 'John Cena',
      sex: 'M',
      age: 35,
      hobby: 'WWE',
      birth_date: new Date(1986, 5, 20),
    });

    const updatedDeveloper = await updateDeveloper.execute({
      developer_id: developer.id,
      name: 'Rei Mistério',
      sex: 'M',
      age: 35,
      hobby: 'WWE',
      birth_date: new Date(1986, 5, 20),
    });

    expect(updatedDeveloper.name).toBe('Rei Mistério');
    expect(updatedDeveloper.hobby).toBe('WWE');
  });

  it('should not be able update the profile from non-existing developer', async() => {
    await expect(
      updateDeveloper.execute({
        developer_id: 'non-existing-developer-id',
        name: 'John Cena',
        sex: 'M',
        age: 35,
        hobby: 'WWE',
        birth_date: new Date(1986, 5, 20),
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
