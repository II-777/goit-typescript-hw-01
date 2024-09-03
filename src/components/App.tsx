import React from 'react';
import styles from './App.module.css';

const files = {
  basics: [
    '1.ts',
    '2.ts',
    '3.ts',
    '4.ts',
    '5.ts',
    '6.ts',
    '7.ts'
  ],
  generics: [
    '1.ts',
    '2.ts',
    '3.ts',
    '4.ts',
    '5.ts',
    '6.ts'
  ]
};

const App: React.FC = () => {
  return (
    <div className={styles.app}>
      <h1>goit-typescript-hw-01</h1>
      <h2>Basics</h2>
      <ul>
        {files.basics.map((file) => (
          <li key={file}>
            <a href={`/files/basics/${file}`} download>{file}</a>
          </li>
        ))}
      </ul>
      <h2>Generics</h2>
      <ul>
        {files.generics.map((file) => (
          <li key={file}>
            <a href={`/files/generics/${file}`} download>{file}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
