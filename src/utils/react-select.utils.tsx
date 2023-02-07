//React libraries
import {StylesConfig, Theme} from 'react-select';

export const reactSelectTheme = (currentTheme: Theme) => {
    return {
        ...currentTheme,
        colors: {
            ...currentTheme.colors,
            primary25: '#4e6cbd',
        },
    };
};

export const reactSelectStyles = (): StylesConfig => {
    return {
        container: (baseStyles) => ({
            ...baseStyles,
            opacity: '1',
            cursor: 'pointer'
        }),
        menu: (baseStyles) => ({
            ...baseStyles,
            zIndex: 100,
            backgroundColor: '#363537'
        }),
        control: (baseStyles) => ({
            ...baseStyles,
            backgroundColor: '#111827',
            border: 'none',
            borderRadius: '0.5rem',
            outline: 'none',
            minHeight: '40px',
            boxShadow: '0 !important',
            '&:hover': {
                boxShadow: '0px 0px 2px 2px !important'
            },
        }),
        option: (baseStyles) => ({
            ...baseStyles,
            cursor: 'pointer',
            color: 'white'
        }),
        input: (baseStyles) => ({
            ...baseStyles,
            color: 'white'
        }),
        singleValue: (baseStyles) => ({
            ...baseStyles,
            color: 'white'
        }),
        multiValue: (baseStyles) => ({
            ...baseStyles,
            backgroundColor: '#363537'
        }),
        multiValueLabel: (baseStyles) => ({
            ...baseStyles,
            color: 'white'
        }),
    };
};
