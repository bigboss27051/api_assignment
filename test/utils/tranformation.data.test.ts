import { PersonModel } from '../../models/person.model'
import { transformToDepartmentData } from '../../utils/tranformation.data'


const persons: PersonModel[] = [
  {
    "id": 1,
    "firstName": "Emily",
    "lastName": "Johnson",
    "maidenName": "Smith",
    "age": 28,
    "gender": "female",
    "email": "emily.johnson@x.dummyjson.com",
    "phone": "+81 965-431-3024",
    "username": "emilys",
    "password": "emilyspass",
    "birthDate": "1996-5-30",
    "image": "https://dummyjson.com/icon/emilys/128",
    "bloodGroup": "O-",
    "height": 193.24,
    "weight": 63.16,
    "eyeColor": "Green",
    "hair": {
        "color": "Brown",
        "type": "Curly"
    },
    "ip": "42.48.100.32",
    "address": {
        "address": "626 Main Street",
        "city": "Phoenix",
        "state": "Mississippi",
        "stateCode": "MS",
        "postalCode": "29112",
        "coordinates": {
            "lat": -77.16213,
            "lng": -92.084824
        },
        "country": "United States"
    },
    "macAddress": "47:fa:41:18:ec:eb",
    "university": "University of Wisconsin--Madison",
    "bank": {
        "cardExpire": "03/26",
        "cardNumber": "9289760655481815",
        "cardType": "Elo",
        "currency": "CNY",
        "iban": "YPUXISOBI7TTHPK2BR3HAIXL"
    },
    "company": {
        "department": "Engineering",
        "name": "Dooley, Kozey and Cronin",
        "title": "Sales Manager",
        "address": {
            "address": "263 Tenth Street",
            "city": "San Francisco",
            "state": "Wisconsin",
            "stateCode": "WI",
            "postalCode": "37657",
            "coordinates": {
                "lat": 71.814525,
                "lng": -161.150263
            },
            "country": "United States"
        }
    },
    "ein": "977-175",
    "ssn": "900-590-289",
    "userAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.93 Safari/537.36",
    "crypto": {
        "coin": "Bitcoin",
        "wallet": "0xb9fc2fe63b2a6c003f1c324c3bfa53259162181a",
        "network": "Ethereum (ERC20)"
    },
    "role": "admin"
},
{
  "id": 1,
  "firstName": "Micheal",
  "lastName": "Johnson",
  "maidenName": "Smith",
  "age": 28,
  "gender": "male",
  "email": "emily.johnson@x.dummyjson.com",
  "phone": "+81 965-431-3024",
  "username": "emilys",
  "password": "emilyspass",
  "birthDate": "1996-5-30",
  "image": "https://dummyjson.com/icon/emilys/128",
  "bloodGroup": "O-",
  "height": 193.24,
  "weight": 63.16,
  "eyeColor": "Green",
  "hair": {
      "color": "Black",
      "type": "Curly"
  },
  "ip": "42.48.100.32",
  "address": {
      "address": "626 Main Street",
      "city": "Phoenix",
      "state": "Mississippi",
      "stateCode": "MS",
      "postalCode": "29112",
      "coordinates": {
          "lat": -77.16213,
          "lng": -92.084824
      },
      "country": "United States"
  },
  "macAddress": "47:fa:41:18:ec:eb",
  "university": "University of Wisconsin--Madison",
  "bank": {
      "cardExpire": "03/26",
      "cardNumber": "9289760655481815",
      "cardType": "Elo",
      "currency": "CNY",
      "iban": "YPUXISOBI7TTHPK2BR3HAIXL"
  },
  "company": {
      "department": "Engineering",
      "name": "Dooley, Kozey and Cronin",
      "title": "Sales Manager",
      "address": {
          "address": "263 Tenth Street",
          "city": "San Francisco",
          "state": "Wisconsin",
          "stateCode": "WI",
          "postalCode": "37657",
          "coordinates": {
              "lat": 71.814525,
              "lng": -161.150263
          },
          "country": "United States"
      }
  },
  "ein": "977-175",
  "ssn": "900-590-289",
  "userAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.93 Safari/537.36",
  "crypto": {
      "coin": "Bitcoin",
      "wallet": "0xb9fc2fe63b2a6c003f1c324c3bfa53259162181a",
      "network": "Ethereum (ERC20)"
  },
  "role": "admin"
},
{
  "id": 2,
  "firstName": "Jack",
  "lastName": "Johnson",
  "maidenName": "Smith",
  "age": 28,
  "gender": "female",
  "email": "emily.johnson@x.dummyjson.com",
  "phone": "+81 965-431-3024",
  "username": "emilys",
  "password": "emilyspass",
  "birthDate": "1996-5-30",
  "image": "https://dummyjson.com/icon/emilys/128",
  "bloodGroup": "O-",
  "height": 193.24,
  "weight": 63.16,
  "eyeColor": "Green",
  "hair": {
      "color": "Brown",
      "type": "Curly"
  },
  "ip": "42.48.100.32",
  "address": {
      "address": "626 Main Street",
      "city": "Phoenix",
      "state": "Mississippi",
      "stateCode": "MS",
      "postalCode": "29112",
      "coordinates": {
          "lat": -77.16213,
          "lng": -92.084824
      },
      "country": "United States"
  },
  "macAddress": "47:fa:41:18:ec:eb",
  "university": "University of Wisconsin--Madison",
  "bank": {
      "cardExpire": "03/26",
      "cardNumber": "9289760655481815",
      "cardType": "Elo",
      "currency": "CNY",
      "iban": "YPUXISOBI7TTHPK2BR3HAIXL"
  },
  "company": {
      "department": "Marketing",
      "name": "Dooley, Kozey and Cronin",
      "title": "Sales Manager",
      "address": {
          "address": "263 Tenth Street",
          "city": "San Francisco",
          "state": "Wisconsin",
          "stateCode": "WI",
          "postalCode": "37657",
          "coordinates": {
              "lat": 71.814525,
              "lng": -161.150263
          },
          "country": "United States"
      }
  },
  "ein": "977-175",
  "ssn": "900-590-289",
  "userAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.93 Safari/537.36",
  "crypto": {
      "coin": "Bitcoin",
      "wallet": "0xb9fc2fe63b2a6c003f1c324c3bfa53259162181a",
      "network": "Ethereum (ERC20)"
  },
  "role": "admin"
},
{
  "id": 3,
  "firstName": "Jack",
  "lastName": "Johnson",
  "maidenName": "Smith",
  "age": 28,
  "gender": "male",
  "email": "emily.johnson@x.dummyjson.com",
  "phone": "+81 965-431-3024",
  "username": "emilys",
  "password": "emilyspass",
  "birthDate": "1996-5-30",
  "image": "https://dummyjson.com/icon/emilys/128",
  "bloodGroup": "O-",
  "height": 193.24,
  "weight": 63.16,
  "eyeColor": "Green",
  "hair": {
      "color": "Chestnut",
      "type": "Curly"
  },
  "ip": "42.48.100.32",
  "address": {
      "address": "626 Main Street",
      "city": "Phoenix",
      "state": "Mississippi",
      "stateCode": "MS",
      "postalCode": "29112",
      "coordinates": {
          "lat": -77.16213,
          "lng": -92.084824
      },
      "country": "United States"
  },
  "macAddress": "47:fa:41:18:ec:eb",
  "university": "University of Wisconsin--Madison",
  "bank": {
      "cardExpire": "03/26",
      "cardNumber": "9289760655481815",
      "cardType": "Elo",
      "currency": "CNY",
      "iban": "YPUXISOBI7TTHPK2BR3HAIXL"
  },
  "company": {
      "department": "Finance",
      "name": "Dooley, Kozey and Cronin",
      "title": "Sales Manager",
      "address": {
          "address": "263 Tenth Street",
          "city": "San Francisco",
          "state": "Wisconsin",
          "stateCode": "WI",
          "postalCode": "37657",
          "coordinates": {
              "lat": 71.814525,
              "lng": -161.150263
          },
          "country": "United States"
      }
  },
  "ein": "977-175",
  "ssn": "900-590-289",
  "userAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.93 Safari/537.36",
  "crypto": {
      "coin": "Bitcoin",
      "wallet": "0xb9fc2fe63b2a6c003f1c324c3bfa53259162181a",
      "network": "Ethereum (ERC20)"
  },
  "role": "admin"
}
];



describe("transformToDepartmentData", () => {
    it("should group persons by department and count gender and hair colors correctly", () => {

        const departmentData = transformToDepartmentData(persons);

        // Check if the departmentData is grouped by department
        expect(departmentData).toHaveProperty("Engineering");
        expect(departmentData).toHaveProperty("Marketing");

        // Check gender counts
        expect(departmentData["Engineering"].male).toBe(1);
        expect(departmentData["Engineering"].female).toBe(1);
        expect(departmentData["Marketing"].male).toBe(0);
        expect(departmentData["Marketing"].female).toBe(1);

        // Check hair color counts
        expect(departmentData["Engineering"].hair["Black"]).toBe(1);

        // Check address user mapping
        expect(departmentData["Engineering"].addressUser["EmilyJohnson"]).toBe("29112");
    });

    it("should initialize department data if not provided", () => {

        const departmentData = transformToDepartmentData(persons);

        expect(departmentData).toHaveProperty("Finance");

        // Check the gender and hair color counts
        expect(departmentData["Finance"].male).toBe(1);
        expect(departmentData["Finance"].hair["Chestnut"]).toBe(1);
    });

    it("should handle empty input gracefully", () => {
        const personsEmpty: PersonModel[] = [];
        const departmentData = transformToDepartmentData(personsEmpty);

        // Ensure no department data is generated for empty input
        expect(departmentData).toEqual({});
    });
});
