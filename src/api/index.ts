import axios from "axios";


export const getRepos = (name: string) => {
    const url: string = `https://api.github.com/users/${name}/repos`;
    return axios.get(url);
}

export const getLangs = (langsUrl: string) => {
    return axios.get(langsUrl)
}