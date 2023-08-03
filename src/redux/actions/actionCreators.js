import { SET_USER,CLEAR_USER,SET_COURSES } from "./actionTypes";

export const set_user=(user)=>{
    return{
        type:SET_USER,
        payload:user
    }
}
export const clear_user=()=>{
    return{
        type:CLEAR_USER
    }
}
export const set_courses=(courses)=>{
    return{
        type:SET_COURSES,
        payload:courses
    }
}
