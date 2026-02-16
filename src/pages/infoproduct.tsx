/* eslint-disable @next/next/no-img-element */
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import useIdleTimer from "../libs/useIdleTimer";
import { useRouter } from "next/router";

export default function Infoproduct() {
  const router = useRouter();

  const handleIdle = () => {
    router.push("/");
  };

  useIdleTimer(handleIdle, 30000);

  return (
    <>
      <Link href={'/home'}
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
          <div className={styles.col8} style={{ marginBottom: '20px' }}>
            <Link href="/product/nutrilon">
              <img src="/images/KVNUTRILON.png" style={{ height: 'auto', width: '100%' }} alt="placeholder" />
              <span
                className={styles.btnWhiteProduct}
              >
                Nutrilon Royal
              </span>
            </Link>
          </div>
          <div className={styles.col8} style={{ marginBottom: '20px' }}>
            <Link href="/product/bebelac">
              <img src="/images/KVBEBELAC.png" style={{ height: 'auto', width: '88%', margin: '0px auto', display: 'block' }} alt="placeholder" />
              <span
                className={styles.btnWhiteProduct}
              >
                Bebelac
              </span>
            </Link>
          </div>
          <div className={styles.col8}>
            <Link href="/product/sgm">
              <img src="/images/KVSGM.png" style={{ height: "auto", width: '60%', margin: '0px auto', display: 'block' }} alt="placeholder" />
              <span
                className={styles.btnWhiteProduct}
              >
                SGM Eksplor
              </span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
