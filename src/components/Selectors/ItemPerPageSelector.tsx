//React libraries
import Select, {SingleValue} from 'react-select';

//Utils
import {reactSelectStyles, reactSelectTheme} from "../../utils/react-select.utils";

type Props = {
    name: string;
    onChange: (value: number) => void;
    value: number;
};

type Option = {
    label: string;
    value: number;
}

const itemsPerPage = [
    {id: '1', value: 4, label: '4 movies'},
    {id: '2', value: 8, label: '8 movies'},
    {id: '3', value: 12, label: '12 movies'},
];

const ItemPerPageSelector = ({name, onChange, value}: Props) => {

    const onSelectChange = (page: SingleValue<Option>) => {
        if (onChange && page) {
            onChange(page.value);
        } else if (!page) {
            onChange(12);
        }
    };

    const options = itemsPerPage.map((item) => {
        return {
            value: item.value,
            label: item.label
        };
    });

    const formattedValue = options.map((item: Option) => {
        if (item.value === value) {
            return item;
        }
        return null;
    });

    return (
        <Select
            // @ts-ignore
            onChange={onSelectChange}
            styles={reactSelectStyles()}
            name={name}
            id="itemPerPageSelector"
            isClearable
            placeholder="Select item per page"
            options={options}
            className="w-full"
            value={formattedValue}
            theme={(currentTheme) => reactSelectTheme(currentTheme)}
        />
    );
}

export default ItemPerPageSelector;