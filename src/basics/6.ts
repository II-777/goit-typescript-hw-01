// Оголошення інтерфейсу User
interface User {
  name: string;
  age: number;
  email: string;
  address?: {
    city: string;
    country: string;
  };
}

// Оголошення об'єкта mango з типом User
const mango: User = {
  name: 'Mango',
  age: 30,
  email: 'john@example.com',
  address: {
    city: 'New York',
    country: 'USA'
  }
};

// Оголошення об'єкта poly з типом User
const poly: User = {
  name: 'Poly',
  age: 30,
  email: 'john@example.com'
};
