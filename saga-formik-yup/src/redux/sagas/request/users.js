import axios from "axios";

export function requestGetUser() {
    return axios.request({
        method: "get",
        url: "https://5f314a5a373bc7001635f7d5.mockapi.io/api/v1/users"
    });
}
