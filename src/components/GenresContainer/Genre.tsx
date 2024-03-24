import {FC, PropsWithChildren} from "react";
import {IGenre} from "../../interface";
import {NavLink} from "react-router-dom";
import css from './Genre.module.css'
interface IProps{
    genre:IGenre
}

const Genre : FC<IProps> = ({genre}) => {
    const {id, name}=genre

     return (
      <div className={`${css.div} `}>
          <NavLink to={`moviesgenres/${id}`}>{name}</NavLink>
      </div>
     );
    };

export {Genre};