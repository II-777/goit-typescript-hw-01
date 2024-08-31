// Оголошення інтерфейсу Page
interface Page {
  title: string;
  likes: number;
  accounts: string[];
  status: 'open' | 'close';
  details?: {
    createAt: Date;
    updateAt: Date;
  };
}

// Оголошення об'єкта page1 з типом Page
const page1: Page = {
  title: 'The awesome page',
  likes: 100,
  accounts: ['Max', 'Anton', 'Nikita'],
  status: 'open',
  details: {
    createAt: new Date('2021-01-01'),
    updateAt: new Date('2021-05-01'),
  }
};

// Оголошення об'єкта page2 з типом Page
const page2: Page = {
  title: 'Python or Js',
  likes: 5,
  accounts: ['Alex'],
  status: 'close',
};
