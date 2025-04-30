/* eslint-disable @next/next/no-img-element */
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import useIdleTimer from "../../libs/useIdleTimer";
import { useRouter } from "next/router";

export default function Nutrilon3() {
  const router = useRouter();

  const handleIdle = () => {
    router.push("/");
  };

  useIdleTimer(handleIdle, 30000); // 30 detik iddle auto redirect
  return (
    <>
      <Link href={'/product/nutrilon'}
        className={styles.btnBack}
      >
        Back
      </Link>
      <img src="/product/01.Nutrilon3.png" style={{ height: 'auto', width: '100%' }} alt="placeholder" />
    </>
  );
}
