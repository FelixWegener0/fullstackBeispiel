import { userType } from "@/models/usermodel";
import axios from "axios";

const baseUrl = "http://localhost:4000"

export const callAllUser = async () => {
    const result = await axios.get<userType[]>(baseUrl + "/getAllUser");

    console.log(result.data);
    return result.data;
}
