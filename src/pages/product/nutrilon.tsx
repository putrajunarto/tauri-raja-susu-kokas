/* eslint-disable @next/next/no-img-element */
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import useIdleTimer from "../../libs/useIdleTimer";
import { useRouter } from "next/router";

export default function Nutrilon() {
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
            <Link href="/product/nutrilon3">
              <img src="/product/nt3.png" style={{ height: 'auto', width: '88%', margin: '0px auto', display: 'block' }} alt="placeholder" />
              <span
                className={styles.btnWhiteProduct}
                style={{ width: '100%' }}
              >
                Nutrilon Royal 3
              </span>
            </Link>
          </div>
          <div className={styles.col5} style={{ marginBottom: '20px' }}>
            <Link href="/product/nutrilon4">
              <img src="/product/nt4.png" style={{ height: 'auto', width: '88%', margin: '0px auto', display: 'block' }} alt="placeholder" />
              <span
                className={styles.btnWhiteProduct}
                style={{ width: '100%' }}
              >
                Nutrilon Royal 4
              </span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
