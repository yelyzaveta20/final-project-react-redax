import {TypedUseSelectorHook, useSelector} from "react-redux";

import {RootState} from "../types";

const useAppSelector:TypedUseSelectorHook<RootState>=useSelector
export {useAppSelector}