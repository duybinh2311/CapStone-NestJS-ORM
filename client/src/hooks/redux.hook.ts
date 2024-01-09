import { useDispatch, TypedUseSelectorHook, useSelector } from 'react-redux'

import { AppDispatch, RootState } from '@/modules/redux/store'

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
