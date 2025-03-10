export interface UserModel {
  male: number;
  female: number;
  ageRange: string;
  hair: {
      [key: string]: number;
  };
  addressUser: {
      [key: string]: string;
  };
}

export interface DepartmentModel {
  [department: string]: UserModel;
}
