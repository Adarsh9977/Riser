import axios from 'axios';

export const api = axios.create({
    baseURL: import.meta.env.REACT_APP_API_URL
})

export const signup = async(userData)=>{
    console.log(userData);
    const response = await api.post('/auth/signup', userData);
    console.log(response);
    return response.data
}

export const login = async(userData)=>{
    console.log(userData);
    const response = await api.post('/auth/login', userData);
    return response.data
}

export const dashboard= async(token)=>{
    const response = await api.get('/goal/long-goals',{
        headers:{
            Authorization:token,
        }});
    return response.data
}

export const completedTodo= async(id, token)=>{
    
    const goalId= id.goal._id;
    console.log(goalId);
    const response= await api.delete(`/goal/long-goal/${goalId}` ,{
        headers:{
            Authorization:token,
        }
    })
    return response.data
}