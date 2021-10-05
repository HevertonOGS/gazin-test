import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { classToClass } from 'class-transformer';

import CreateDeveloperService from '@modules/developers/services/CreateDeveloperService';
import UpdateDeveloperService from '@modules/developers/services/UpdateDeveloperService';
import ListDeveloperService from '@modules/developers/services/ListDeveloperService';
import ShowDeveloperService from '@modules/developers/services/ShowDeveloperService';
import DeleteDeveloperService from '@modules/developers/services/DeleteDeveloperService';

interface Developer {
  name: string;
  sex: string;
  age: number;
  hobby: string;
  birth_date: Date;
}

export default class DevelopersController {

  public async create(request: Request, response: Response): Promise<Response> {
    const { name, sex, age, hobby, birth_date } = request.body;

    const parsedBirthDate = new Date(birth_date);

    const createDeveloper = container.resolve(CreateDeveloperService);

    const developer: Developer = await createDeveloper.execute({
      name,
      sex,
      age,
      hobby,
      birth_date: parsedBirthDate,
    });

    return response.json(classToClass(developer));
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const developer_id = request.params.id;

    const showDeveloper = container.resolve(ShowDeveloperService);

    const developer: Developer = await showDeveloper.execute({ developer_id: String(developer_id) });

    return response.json(classToClass(developer));
  }

  public async list(request: Request, response: Response): Promise<Response> {
    const listDevelopers = container.resolve(ListDeveloperService);

    const developers: Developer[] = await listDevelopers.execute();

    return response.json(classToClass(developers));
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const developer_id = request.params.id;
    const { name, sex, age, hobby, birth_date } = request.body;

    const updateDeveloper = container.resolve(UpdateDeveloperService);

    const developer: Developer = await updateDeveloper.execute({
      developer_id: String(developer_id),
      name,
      sex,
      age,
      hobby,
      birth_date,
    });

    return response.json(classToClass(developer));
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const developer_id = request.params.id;

    const deleteDeveloper = container.resolve(DeleteDeveloperService);

    const developer: Developer = await deleteDeveloper.execute({ developer_id: String(developer_id) });

    return response.json(classToClass(developer));
  }
}
