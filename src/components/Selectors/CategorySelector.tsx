//React libraries
import Select from 'react-select';
import {useSelector} from 'react-redux';

//Redux
import {selectCategories} from "../../redux/movies/movieSlice";

//Utils
import {reactSelectStyles, reactSelectTheme} from "../../utils/react-select.utils";

type Props = {
    name: string;
    onChange: (value: string[]) => void;
    value: string[];
};

type Option = {
    label: string;
    value: string;
}


const CategorySelector = ({name, onChange, value}: Props) => {
    //Use selector
    const categories = useSelector(selectCategories);

    const onSelectChange = (values: Option[]) => {
        if (value) {
            onChange(values.map((v: Option) => v.value));
        } else {
            onChange([]);
        }
    };

    const options = categories.map((category: string) => {
        return {
            value: category,
            label: category
        };
    });

    const values = value.map((v) => {
        return {
            value: v,
            label: v
        };
    });

    return (
        <Select
            // @ts-ignore
            onChange={onSelectChange}
            styles={reactSelectStyles()}
            name={name}
            id="categorySelector"
            isClearable
            isMulti
            placeholder="Select option(s)..."
            options={options}
            className="w-full"
            value={values}
            theme={(currentTheme) => reactSelectTheme(currentTheme)}
        />
    );
}

export default CategorySelector;