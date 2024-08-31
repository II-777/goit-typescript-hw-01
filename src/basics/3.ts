// Змінна, яка може містити або рядок, або число (union type)
let stringOrNumber: string | number;

// Змінна, яка може містити лише одне з двох можливих рядкових значень: 'enable' або 'disable' (literal type)
let enableOrDisable: 'enable' | 'disable';

// Приклади присвоєння значень для перевірки
stringOrNumber = 'Hello';
stringOrNumber = 123;

enableOrDisable = 'enable';
enableOrDisable = 'disable';
// enableOrDisable = 'other'; // Error
