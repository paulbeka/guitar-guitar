import React from 'react';
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import {useRecoilState} from "recoil";
import {selectedOne} from "./States.jsx";


const Dropdown = (props) => {
    const [selectedItem, setSelectedItem] = useRecoilState(selectedOne);
    const options = props.options.map((value, index) =>
        <MenuItem key={"option-"+ index} value={value}>{value}</MenuItem>
    );
    const handleChange = (event) => {
        setSelectedItem(event.target.value);
    }
    return (
        <FormControl fullWidth>
            <InputLabel>{props.inputLabel}</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                className={"dropdown"}
                value={selectedItem}
                label={props.inputLabel}
                onChange={handleChange}
            >
                {options}
            </Select>
        </FormControl>
    )
}

export default Dropdown;