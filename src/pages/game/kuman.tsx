import styles from "@/styles/Home.module.css";
import Link from "next/link";
import { useUser } from "@/contexts/UserContext";

export default function Kuman() {
  const { user } = useUser();
  const id = user ? user.id : "123";
  return (
    <>
      <Link href={'/game'}
        className={styles.btnBack}
      >
        Back
      </Link>
      <iframe src={`http://beatshield.nutrilon.qyubit.com?id=${id}`} allow="camera; microphone"></iframe>
    </>
  );
}
