import { FilterMultiCategories } from './Styled';
import React from 'react';
import { hover } from '@testing-library/user-event/dist/hover';

const FilterCategories = ({ placeholder, displayValue, options, onSelect, onRemove }) => {
  return (
    <FilterMultiCategories
      placeholder={placeholder}
      displayValue={displayValue}
      options={options}
      onSelect={onSelect}
      onRemove={onRemove}
      hidePlaceholder={true}
      closeIcon="cancel"
      showArrow
      style={{
        chips: {
          background: 'grey'
        }
      }}
    />
  );
};

export default FilterCategories;
