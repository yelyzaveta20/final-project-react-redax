import {FC, PropsWithChildren} from "react";
import {IGenre} from "../../interface";
import {NavLink} from "react-router-dom";

interface IProps{
    genre:IGenre
}

const Genre : FC<IProps> = ({genre}) => {
    const {id, name}=genre

     return (
      <div>
          <NavLink to={`moviesgenres/${id}`}>{name}</NavLink>
      </div>
     );
    };

export {Genre};