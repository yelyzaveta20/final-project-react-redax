import {ChangeEvent, useEffect, useState} from "react";
import {themeActions} from "../../redux";
import {FormControlLabel, Switch} from "@mui/material";

import {useAppDispatch} from "../../hooks";

const ThemeSwicher = () => {
    const theme = JSON.parse(localStorage.getItem('theme')) || false
    const [checking, setChecking] = useState(theme);

    const dispatch = useAppDispatch();

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setChecking(event.target.checked);
        localStorage.setItem('theme', JSON.stringify(event.target.checked))
    };
    useEffect(() => {
        dispatch(themeActions.changer(theme))
        localStorage.setItem('theme', JSON.stringify(theme))
        document.body.style.backgroundColor = theme ? "#8d8888" : "#0a3a62";
    }, [checking, dispatch, theme]);

    return (
        <div>
            <FormControlLabel
                control={<Switch
                    checked={checking}
                    onChange={handleChange}
                    color="default"
                    inputProps={{'aria-label': 'controlled'}}
                />}
                label=""
                labelPlacement="end"
            />
        </div>
    );
};

export {ThemeSwicher};