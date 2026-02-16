/* eslint-disable @next/next/no-img-element */
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import useIdleTimer from "../../libs/useIdleTimer";
import { useRouter } from "next/router";

export default function Bebelac() {
  const router = useRouter();

  const handleIdle = () => {
    router.push("/");
  };

  useIdleTimer(handleIdle, 30000); // 30 detik iddle auto redirect
  return (
    <>
      <Link href={'/infoproduct'}
        className={styles.btnBack}
        style={{
          "position": "absolute",
          "width": "100vw"
        }}
      >
        Back
      </Link>
      <div className={`${styles.home} ${styles.dFlex} ${styles.alignItemsCenter} ${styles.justifyContentCenter}`}>
        <div className={`${styles.row} ${styles.justifyContentCenter} ${styles.alignItemsEnd}`}>
          <div className={styles.col5} style={{ marginBottom: '20px' }}>
            <Link href="/product/bebelac3">
              <img src="/images/1+.png" style={{ height: 'auto', width: '88%', margin: '0px auto', display: 'block' }} alt="placeholder" />
              <span
                className={styles.btnWhiteProduct}
              >
                Bebelac 1+
              </span>
            </Link>
          </div>
          <div className={styles.col5} style={{ marginBottom: '20px' }}>
            <Link href="/product/bebelac4">
              <img src="/images/3+.png" style={{ height: 'auto', width: '88%', margin: '0px auto', display: 'block' }} alt="placeholder" />
              <span
                className={styles.btnWhiteProduct}
              >
                Bebelac 3+
              </span>
            </Link>
          </div>
          <div className={styles.col5} style={{ marginBottom: '20px' }}>
            <Link href="/product/bebelacGold">
              <img src="/product/bbgold.png" style={{ height: 'auto', width: '70%', margin: '0px auto', display: 'block' }} alt="placeholder" />
              <span
                className={styles.btnWhiteProduct}
              >
                Bebelac Gold
              </span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
