import React from 'react'
import { useTranslation } from 'react-i18next'
import Select from 'react-select'

export const MultiSelect = function (props) {
  const { onSelect, options, placeholder, value } = props
  const { t } = useTranslation()

  const handleChange = (selectedOptions) => {
    if (onSelect) onSelect(selectedOptions)
  }

  return (
    <Select
      autoFocus
      components={{
        DropdownIndicator: null
      }}
      closeMenuOnSelect={false}
      isMulti
      loadingMessage={() => t('ui.select.multiSelect.message.loading')}
      noOptionsMessage={() => t('ui.select.multiSelect.message.noOptions')}
      onChange={handleChange}
      options={options}
      placeholder={placeholder || t('ui.select.multiSelect.placeholder')}
      value={value}
    />
  )
}