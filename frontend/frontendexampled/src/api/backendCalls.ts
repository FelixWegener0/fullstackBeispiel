import axios from "axios";

const baseUrl = "http://localhost:4000"

export type responceType = [
    {
        id: number;
        created_at: string;
        first_name: string;
        last_name: string;
    }
]

export const callAllUser = async () => {
    const result = await axios.get<responceType>(baseUrl + "/getAllUser");

    console.log(result.data);
    return result.data;
}
