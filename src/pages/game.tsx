/* eslint-disable @next/next/no-img-element */
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import useIdleTimer from "../libs/useIdleTimer";
import { useRouter } from "next/router";

export default function Game() {
  const router = useRouter();

  const handleIdle = () => {
    router.push("/");
  };

  useIdleTimer(handleIdle, 30000); // 30 detik iddle auto redirect

  return (
    <>
      <div className={`${styles.home} ${styles.dFlex} ${styles.alignItemsCenter} ${styles.justifyContentCenter}`}>
        <div>
          <div className={`${styles.row} ${styles.justifyContentCenter}`}>
            <div className={styles.col10}>
              <img src="/JUDULPILIHGAME.png" style={{ height: 'auto', width: '100%' }} alt="placeholder" />
            </div>
            <div className={styles.col5} style={{ marginBottom: '20px' }}>
              <Link href="/game/kuman">
                <img src="/gamekuman.png" style={{ height: 'auto', width: '100%' }} alt="placeholder" />
              </Link>
              <Link href="/game/kuman" className={styles.btnWhite} style={{ marginTop: '20px' }}>Battle For Immunity</Link>
            </div>
            <div className={styles.col5} style={{ marginBottom: '20px' }}>
              <Link href="/game/kitten">
                <img src="/gamekucing.png" style={{ height: 'auto', width: '100%' }} alt="placeholder" />
              </Link>
              <Link href="/game/kitten" className={styles.btnWhite} style={{ marginTop: '20px' }}>Happy Kitten</Link>
            </div>
            <div className={styles.col8}>
              <Link href="/home" className={styles.btnWhite} style={{ marginTop: '20px' }}>Back</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
