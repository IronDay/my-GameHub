import axios, {AxiosRequestConfig, CanceledError} from "axios";

export interface FetchResponse<T> {
    count: number;
    next?: string | null;
    results: T[];
}

const axiosInstance = axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "e23a6e04439e496a8813729210a9a38b",
    },
});

class ApiClient<T> {
    private _endpoint: string;

    constructor(endpoint: string) {
        this._endpoint = endpoint;
    }

    getAll = (config?: AxiosRequestConfig) => {
        return axiosInstance
            .get<FetchResponse<T>>(this._endpoint, config)
            .then((res) => res.data);
    };

    get = (id: string | number) => {
        return axiosInstance.get<T>(this._endpoint + "/" + id).then(res => res.data);
    }
}

export default ApiClient;
export {CanceledError};
