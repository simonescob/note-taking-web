import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { RootState } from '../store'; // Adjust the path based on your project structure

// Create a typed version of the useSelector hook
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector; 