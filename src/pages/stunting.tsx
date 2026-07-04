/* eslint-disable @next/next/no-img-element */
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import useIdleTimer from "../libs/useIdleTimer";
import { useRouter } from "next/router";

export default function Stunting() {
  const router = useRouter();

  const handleIdle = () => {
    router.push("/");
  };

  useIdleTimer(handleIdle, 30000); // 30 detik iddle auto redirect

  return (
    <>
      <Link href={'/home'}
        className={styles.btnBack}
        style={{
          "position": "absolute",
          "width": "100%"
        }}
      >
        Back
      </Link>
      <div className={`${styles.home} ${styles.dFlex} ${styles.alignItemsCenter} ${styles.justifyContentCenter}`} style={{ paddingTop: '50px' }}>
        <iframe src="https://www.generasimajubebasstunting.alodokter.com/nutrigrain-growth-check" style={{ width: '100%', height: '100%' }} frameBorder="0"></iframe>
      </div>
    </>
  );
}
