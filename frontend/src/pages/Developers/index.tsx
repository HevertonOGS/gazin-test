import React, { useState, useEffect } from 'react';

import { FiEdit, FiTrash, FiCheck, FiX } from 'react-icons/fi';

import Button from '../../components/Button';

import {
  MainMenu,
  Container,
  FormContainer,
  FormControl,
  RadioGroup,
  RadioItem,
  ListContainer
} from './styles';

import api from '../../services/api';

interface Developer {
  id: string;
  name: string;
  sex: string;
  age: number;
  hobby: string;
  birth_date: string;
}

const Developers: React.FC = () => {
  const [idField, setIdField] = useState('');
  const [nameField, setNameField] = useState('');
  const [sexField, setSexField] = useState('M');
  const [ageField, setAgeField] = useState('');
  const [hobbyField, setHobbyField] = useState('');
  const [birthDateField, setBirthDateField] = useState('');

  const [developers, setDevelopers] = useState<Developer[]>([]);

  const [isRemove, setIsRemove] = useState(false);

  useEffect(() => {
    api.get(`/developers`)
        .then((response) => {
          setDevelopers(response.data);
        });
  }, []);

  const getDevelopers = () => {
    api.get(`/developers`)
        .then((response) => {
          setDevelopers(response.data);
        });
  }

  const clearFields = () => {
    setIdField('');
    setNameField('');
    setSexField('M');
    setAgeField('');
    setHobbyField('');
    setBirthDateField('');
  }

  const postDeveloper = (event: any) => {
    event.preventDefault();

    if(idField === '') {
      api
        .post(`/developers`, {
          name: nameField,
          sex: sexField,
          age: ageField,
          hobby: hobbyField,
          birth_date: birthDateField
        })
        .then(() => {
          clearFields();
          getDevelopers();
        });
    } else {
      api
        .put(`/developers/${idField}`, {
          name: nameField,
          sex: sexField,
          age: ageField,
          hobby: hobbyField,
          birth_date: birthDateField
        })
        .then(() => {
          clearFields();
          getDevelopers();
        });
    }
  }

  const editDeveloper = (id: string) => {
    if(id === 'undefined')
      return false

    api.get(`/developers/${id}`)
      .then((response) => {
        const { id, name, sex, age, hobby, birth_date } = response.data;

        const parseBirthDate = new Date(birth_date);
        const year = parseBirthDate.getFullYear();
        const month = parseBirthDate.getMonth() + 1;
        const day = parseBirthDate.getDate() + 1;
        const splitBirthDate = `${year}-${month < 10 ? '0' + month : month }-${day < 10 ? '0' + day : day}`;

        setIdField(id);
        setNameField(name);
        setSexField(sex);
        setAgeField(age);
        setHobbyField(hobby);
        setBirthDateField(splitBirthDate);
      });
  }

  const handleRemoveDeveloper = () => {
    setIsRemove(!isRemove);
  }

  const removeDeveloper = (activeButton: boolean, id?: string) => {
    setIsRemove(activeButton);

    if(id === 'undefined')
      return false

    api.delete(`/developers/${id}`)
      .then(() => {
        clearFields();
        getDevelopers();
      });
  }

  return (
    <>
      <MainMenu>
        <h1>Desenvolvedores</h1>

        <p>Lista de desenvolvedores</p>
      </MainMenu>

      <Container>
        <FormContainer>
          <form onSubmit={postDeveloper}>
            <FormControl>
              <label htmlFor="name">Nome</label>
              <input name="name"
                     type="text"
                     placeholder="Nome"
                     onChange={(e) => setNameField(e.target.value)}
                     value={nameField}
                     required />
            </FormControl>

            <FormControl>
              <label htmlFor="name">Sexo</label>
              <RadioGroup>
                <RadioItem>
                  <input type="radio"
                         name="sex"
                         onChange={() => setSexField('M')}
                         checked={sexField === 'M' || false}/> Masculino
                </RadioItem>
                <RadioItem>
                  <input type="radio"
                         name="sex"
                         onChange={() => setSexField('F')}
                         checked={sexField === 'F' || false}/> Feminino
                </RadioItem>
                <RadioItem>
                  <input type="radio"
                         name="sex"
                         onChange={() => setSexField('-')}
                         checked={sexField === '-' || false}/> Prefiro não dizer
                </RadioItem>
              </RadioGroup>
            </FormControl>

            <FormControl>
              <label htmlFor="age">Idade</label>
              <input name="age"
                     type="number"
                     placeholder="Idade"
                     onChange={(e) => setAgeField(e.target.value)}
                     value={ageField}
                     required />
            </FormControl>

            <FormControl>
              <label htmlFor="hobby">Hobby</label>
              <input name="hobby"
                     type="text"
                     placeholder="Hobby"
                     onChange={(e) => setHobbyField(e.target.value)}
                     value={hobbyField}
                     required />
            </FormControl>

            <FormControl>
              <label htmlFor="birthDate">Data de nascimento</label>
              <input name="birthDate"
                     type="date"
                     onChange={(e) => setBirthDateField(e.target.value)}
                     value={birthDateField}
                     required />
            </FormControl>

            <div>
              <Button backgroundColor="#0c66d3" type="submit">Salvar</Button>
            </div>
          </form>
        </FormContainer>

        <ListContainer>
          <table>
            <thead>
              <tr>
                <th>Nome</th>
                <th>Sexo</th>
                <th>Idade</th>
                <th>Hobby</th>
                <th>Data de nascimento</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {developers.length > 0 ?
              (developers.map((developer, index) => {
                const parseBirthDate = new Date(developer.birth_date);
                const year = parseBirthDate.getFullYear();
                const month = parseBirthDate.getMonth() + 1;
                const day = parseBirthDate.getDate() + 1;
                const splitBirthDate = `${day < 10 ? '0' + day : day}/${month < 10 ? '0' + month : month }/${year}`;

                return (
                  <tr key={index}>
                    <td>{developer.name}</td>
                    <td>{developer.sex}</td>
                    <td>{developer.age}</td>
                    <td>{developer.hobby}</td>
                    <td>{splitBirthDate}</td>
                    <td className="actions">
                      {!isRemove ? (
                        <>
                          <Button type="button"
                                  backgroundColor="#53B8BB"
                                  onClick={() => editDeveloper(developer.id)}>
                            <FiEdit />
                          </Button>
                          <Button type="button"
                                  backgroundColor="#eb4034"
                                  onClick={() => handleRemoveDeveloper()}>
                            <FiTrash />
                          </Button>
                        </>
                      ) : (
                        <>
                          <Button type="button"
                                  backgroundColor="#43aa8b"
                                  onClick={() => removeDeveloper(true, developer.id)}>
                            <FiCheck />
                          </Button>
                          <Button type="button"
                                  backgroundColor="#eb4034"
                                  onClick={() => removeDeveloper(false)}>
                            <FiX />
                          </Button>
                        </>
                      )}
                    </td>
                  </tr>
                )
              })) : (
                <tr>
                  <td className="empty-list" colSpan={6}>Sem desenvolvedores no momento.</td>
                </tr>
              )}
            </tbody>
          </table>
        </ListContainer>
      </Container>
    </>
  )
}

export default Developers;
