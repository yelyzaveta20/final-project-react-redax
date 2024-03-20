import {FC, PropsWithChildren} from "react";
import {IMovie} from "../../interface";
import {useNavigate} from "react-router-dom";
import {poster} from "../../constans";
import {Rating} from "@mui/material";

interface IProps {
    movie:IMovie,
    poster:string
}

const Serche : FC<IProps> = ({movie}) => {
    let navigate = useNavigate();

    const {id, title, poster_path, vote_average}=movie

    // const {state:{movie}}=useLocation()
    const posterurl=`${poster}${poster_path}`
    const handle = () => {
        navigate(`/details/${id}`)
    }

    return (
        <div onClick={handle} >
            <div >
                <div>
                    <h3>{title}</h3>
                </div>

                {poster_path?(
                    <img src={posterurl} alt={title}/>
                ): (
                    <img src={`https://th.bing.com/th?id=OIF.s1S%2fxuarov%2fLtVlIpIFzaQ&rs=1&pid=ImgDetMain`} alt='none'/>
                )}
                <Rating name="customized-10" defaultValue={vote_average} precision={0.5} max={10.0} readOnly />
            </div>

        </div>
    );
};

export {Serche};