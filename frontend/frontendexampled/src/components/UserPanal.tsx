'use client'

import { callAllUser, responceType } from "@/api/backendCalls"
import { useState } from "react";

export const UserPanal = () => {
    const [data, setData] = useState<responceType>();

    const handleOnclick = async () => {
        let res = callAllUser();

        if (res != undefined) {
            setData(await res);
        }
    }

    return (
        <div>
            <div style={{ direction: "ltr" }}>
                <button style={{ color: 'black' }} onClick={() => handleOnclick()}>Get all users</button>
                <text>List of Users:</text>
            </div>
            {data && <div>
                {data.map((element, index) => {
                    return (
                        <div key={element.last_name + index}>
                            <text>{element.first_name}</text>
                            <text> </text>
                            <text>{element.last_name}</text>
                        </div>
                    )
                })}
            </div>}
        </div>
    )
}