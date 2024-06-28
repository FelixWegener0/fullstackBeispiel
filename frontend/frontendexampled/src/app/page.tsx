import Image from "next/image";
import styles from "./page.module.css";
import { useEffect, useState } from "react";
import { callAllUser } from "@/api/backendCalls";
import { UserPanal } from "@/components/UserPanal";

export default function Home() {
  return (
    <main className={styles.main}>
      <UserPanal />
    </main>
  );
}
