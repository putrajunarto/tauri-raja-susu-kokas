/* eslint-disable @next/next/no-img-element */
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import useIdleTimer from "../../libs/useIdleTimer";
import { useRouter } from "next/router";

export default function SGM() {
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
          <div className={styles.col6} style={{ marginBottom: '20px' }}>
            <Link href="/product/sgm1">
              <img src="/product/SGM1.webp" style={{ height: 'auto', width: '80%', margin: '0px auto', display: 'block' }} alt="placeholder" />
              <span
                className={styles.btnWhiteProduct}
              >
                SGM 1+
              </span>
            </Link>
          </div>
          <div className={styles.col6} style={{ marginBottom: '20px' }}>
            <Link href="/product/sgm3">
              <img src="/product/SGM3.webp" style={{ height: 'auto', width: '80%', margin: '0px auto', display: 'block' }} alt="placeholder" />
              <span
                className={styles.btnWhiteProduct}
              >
                SGM 3+
              </span>
            </Link>
          </div>
          <div className={styles.col6} style={{ marginBottom: '20px' }}>
            <Link href="/product/sgm5">
              <img src="/product/SGM5.webp" style={{ height: 'auto', width: '80%', margin: '0px auto', display: 'block' }} alt="placeholder" />
              <span
                className={styles.btnWhiteProduct}
              >
                SGM 5+
              </span>
            </Link>
          </div>
          <div className={styles.col6} style={{ marginBottom: '20px' }}>
            <Link href="/product/sgm1soya">
              <img src="/product/SGM1soya.webp" style={{ height: 'auto', width: '70%', margin: '0px auto', display: 'block' }} alt="placeholder" />
              <span
                className={styles.btnWhiteProduct}
                style={{ marginTop: '0px' }}
              >
                SGM Soya 1+
              </span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
