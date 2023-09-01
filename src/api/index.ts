import axios from "axios";

export const getRepos = () => {
    return axios.get('https://api.github.com/users/YuSa0-6/repos')
}