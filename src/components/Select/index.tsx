import React from "react";
import PropTypes from 'prop-types';

interface IOption {
    id: number;
    value: string;
    label: string;
}

interface IOptions {
    options: IOption[];
}



function Select ({ options }: IOptions) {
    return (
        <select>
            {options.map((option: IOption) => {
                return (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                );
            })}
        </select>
    );
    }

export default Select;