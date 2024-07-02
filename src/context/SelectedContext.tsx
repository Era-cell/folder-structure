import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';

type SelectedItem = {
  type: 'project' | 'wbs' | 'task';
  id: number | null;
};

interface SelectedContextProps {
  selectedItem: SelectedItem;
  setSelectedItem: (item: SelectedItem) => void;
  isBackgroundGrey: boolean;
  setIsBackgroundGrey: (isGrey: boolean) => void;
}

const SelectedContext = createContext<SelectedContextProps | undefined>(undefined);

export const SelectedProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [selectedItem, setSelectedItem] = useState<SelectedItem>({ type: 'project', id: null });
  const [isBackgroundGrey, setIsBackgroundGrey] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('.selectable-item')) {
        setIsBackgroundGrey(true);
      } else {
        setIsBackgroundGrey(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const handleSetSelectedItem = (item: SelectedItem) => {
    setSelectedItem(item);
    setIsBackgroundGrey(false); // Reset background grey when an item is selected
  };

  return (
    <SelectedContext.Provider value={{ selectedItem, setSelectedItem: handleSetSelectedItem, isBackgroundGrey, setIsBackgroundGrey }}>
      {children}
    </SelectedContext.Provider>
  );
};

export const useSelected = () => {
  const context = useContext(SelectedContext);
  if (!context) {
    throw new Error('useSelected must be used within a SelectedProvider');
  }
  return context;
};
