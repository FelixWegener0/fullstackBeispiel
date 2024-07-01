'use client'

import { callAllUser } from "@/api/backendCalls"
import { userType } from "@/models/usermodel";
import { useState } from "react";
import styles from "./UserPanal.module.css";

export const UserPanal = () => {
    const [data, setData] = useState<userType[]>();

    const handleOnclick = async () => {
        let res = callAllUser();

        if (res != undefined) {
            setData(await res);
        }
    }

    return (
        <div>
            <div className={styles.body}>
                <button className={styles.button} onClick={() => handleOnclick()}>Get all users</button>
                <text>List of Users:</text>
            </div>
            {data && <div>
                {data.map((element, index) => {
                    return (
                        <div key={element.last_name + index} className={styles.divMapedNames}>
                            <text className={styles.textElements}>ID: {element.id} </text>
                            <text className={styles.textElements}>{element.first_name}</text>
                            <text> </text>
                            <text className={styles.textElements}>{element.last_name}</text>
                        </div>
                    );
                })}
            </div>}
        </div>
    );
};
