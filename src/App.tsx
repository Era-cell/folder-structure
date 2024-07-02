import React from 'react';
import ProjectList from './components/ProjectList';
import { SelectedProvider } from './context/SelectedContext.tsx';

const App: React.FC = () => {
  return (
    <SelectedProvider>
      <ProjectList />
    </SelectedProvider>
  );
};

export default App;
