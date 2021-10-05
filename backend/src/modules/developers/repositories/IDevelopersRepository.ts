import Developer from "../infra/typeorm/entities/Developer";
import ICreateDeveloperDTO from "../dtos/ICreateDeveloperDTO";

export default interface IDevelopersRepository {
  findById(id: string): Promise<Developer | undefined>;
  find(): Promise<Developer[] | undefined>;
  create(data: ICreateDeveloperDTO): Promise<Developer>;
  save(user: Developer): Promise<Developer>;
  delete(id: string): Promise<Developer | undefined>;
}
