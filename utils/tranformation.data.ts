import { DepartmentModel } from '../models/department.model'
import { PersonModel } from '../models/person.model'

export function transformToDepartmentData(persons: PersonModel[]): DepartmentModel {
  const departmentData: DepartmentModel = {};

  for (const person of persons) {
    const { company, gender, hair, firstName, lastName, address } = person;
    const { department } = company;

    if (!departmentData.hasOwnProperty(department)) {
      departmentData[department] = {
        male: 0,
        female: 0,
        ageRange: "",
        hair: {},
        addressUser: {}
      };
    }

    if (gender === "male") {
      departmentData[department].male++;
    } else if (gender === "female") {
      departmentData[department].female++;
    }

    if (hair && departmentData[department].hair) {
      const { color } = hair;
      if (departmentData[department].hair.hasOwnProperty(color)) {
        departmentData[department].hair[color]++;
      } else {
        departmentData[department].hair[color] = 1;
      }
    }

    const fullName = firstName + lastName;
    departmentData[department].addressUser[fullName] = address.postalCode;
  }

  return departmentData;
}
