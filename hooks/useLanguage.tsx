"use client"
import { useAppSelector } from "@/redux/app/hooks"

const useLanguage = () => {
    const dics = useAppSelector(state => state.lang.lang) 
    const getLanguage = (lng : any) => {
        return dics?.lang as keyof typeof lng ?? 'en'
    }
    return{
        getLanguage
    }
}
export default useLanguage