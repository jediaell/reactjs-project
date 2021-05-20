import React, { memo } from 'react';
import Demo from './Demo';

const DemoContainer: React.FC = () => {
  const selectValues = [
    { label: 'Label 1', value: 'valor1' },
    { label: 'Label 2', value: 'valor2' },
    { label: 'Label 3', value: 'valor2' },
  ];

  const handlePress = () => null;

  const handleChangeInput = () => null;

  const handleChangeSelect = () => null;

  return (
    <Demo
      selectValues={selectValues}
      handlePress={handlePress}
      handleChangeInput={handleChangeInput}
      handleChangeSelect={handleChangeSelect}
    />
  );
};

export default memo(DemoContainer);
