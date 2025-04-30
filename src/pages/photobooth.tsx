import styles from "@/styles/Home.module.css";
import Link from "next/link";
import { useUser } from "@/contexts/UserContext";

export default function Kuman() {
  const { user } = useUser();
  const id = user ? user.id : "123";
  return (
    <>
      <Link href={'/home'}
        className={styles.btnBack}
      >
        Back
      </Link>
      <iframe src={`https://nutrilon.qyubit.com/raja-susu-2?id=${id}`} allow="camera; microphone"></iframe>
    </>
  );
}
