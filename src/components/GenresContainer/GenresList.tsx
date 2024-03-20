import {useAppDispatch, useAppSelector} from "../../hooks";
import {useEffect} from "react";
import {genreActions} from "../../redux";
import {Genre} from "./Genre";

const GenresList = () => {
    const {genres}=useAppSelector(state => state.genres)
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(genreActions.getAllGenres())

    }, [dispatch]);
    return (
        <div>
            {genres.map(genre=><Genre key={genre.id} genre={genre}/>)}
        </div>
    );
};

export {GenresList};