import {useAppDispatch} from "../../hooks";
import {ChangeEvent, useEffect, useState} from "react";
import {themeActions} from "../../redux";
import {FormControlLabel, Switch} from "@mui/material";

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

    // if (!checking) {
    //     document.body.classList.add('theme');
    // } else {
    //     document.body.classList.remove('theme');
    // }
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