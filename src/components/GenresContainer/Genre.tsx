import {FC} from "react";
import {NavLink} from "react-router-dom";

import {IGenre} from "../../interface";
import {useAppSelector} from "../../hooks";
import css from './Genre.module.css'

interface IProps{
    genre:IGenre
}

const Genre : FC<IProps> = ({genre}) => {
    const {id, name}=genre
    const {theme}=useAppSelector(state => state.theme)
     return (
      <div className={`${css.div} ${theme? css.light :css.dark} `}>
          <NavLink  to={`moviesgenres/${id}`}>{name}</NavLink>
      </div>
     );
    };

export {Genre};