import styles from "@/styles/Home.module.css";
// import useIdleTimer from "../../libs/useIdleTimer";
// import { useRouter } from "next/router";
import Link from "next/link";

export default function Kitten() {
  // const router = useRouter();

  // const handleIdle = () => {
  //   router.push("/");
  // };

  // useIdleTimer(handleIdle, 130000); // 30 detik iddle auto redirect

  return (
    <>
      <Link href={'/game'}
        className={styles.btnBack}
      >
        Back
      </Link>
      <iframe src='https://games.qyubit.io/happykittenv3/' allow="camera; microphone"></iframe>
    </>
  );
}
