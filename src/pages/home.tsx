/* eslint-disable @next/next/no-img-element */
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import useIdleTimer from "../libs/useIdleTimer";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Register() {
  const router = useRouter();
  const [showQR, setShowQR] = useState(false);

  const handleIdle = () => {
    router.push("/");
  };

  useIdleTimer(handleIdle, 30000); // 30 detik iddle auto redirect

  return (
    <>
      <div className={`${styles.home} ${styles.dFlex} ${styles.alignItemsCenter} ${styles.justifyContentCenter}`}>
        <div>
          <div className={`${styles.row} ${styles.justifyContentCenter} ${styles.alignItemsEnd}`}>
            <div className={styles.col5} style={{ marginBottom: '20px' }}>
              <Link href="/photobooth">
                <img src="/images/KVPHOTOBOOTH.png" style={{ height: 'auto', width: '100%' }} alt="placeholder" />
              </Link>
              <Link href="/photobooth" className={styles.btnWhite} style={{ marginTop: '20px' }}>Photobooth</Link>
            </div>
            <div className={styles.col5} style={{ marginBottom: '20px' }}>
              <Link href="/game">
                <img src="/images/KVGAME.png" style={{ height: 'auto', width: '88%' }} alt="placeholder" />
                <span className={styles.btnWhite} style={{ marginTop: '20px' }}>Game</span>
              </Link>
            </div>
            <div className={styles.col5} style={{ marginBottom: '20px' }}>
              <Link href="/kalkulator">
                <img src="/images/IRONCHECKKV.png" style={{ height: "auto", width: '60%', margin: '0px auto', display: 'block' }} alt="placeholder" />
              </Link>
              <Link href="" className={styles.btnWhite} style={{ marginTop: '20px' }}>Kalkulator Zat Besi</Link>
            </div>
            <div className={styles.col5} style={{ marginBottom: '20px' }}>
              <div onClick={() => setShowQR(!showQR)} style={{ cursor: 'pointer' }}>
                <img src="/images/stunting.png" style={{ height: "auto", width: '100%', margin: '0px auto', display: 'block' }} alt="placeholder" />
                <span className={styles.btnWhite} style={{ marginTop: '60px' }}>Grow Checker</span>
              </div>
            </div>
            <div className={styles.col5} style={{ marginBottom: '20px' }}>
              <Link href="/infoproduct">
                <img src="/images/Baru.png" style={{ height: "auto", width: '100%', margin: '0px auto', display: 'block' }} alt="placeholder" />
                <span className={styles.btnWhite} style={{ marginTop: '60px' }}>Info Product</span>
              </Link>
            </div>
          </div>
        </div>
        <div id="modalGizi" className={`modal ${showQR ? 'flex items-center z-100' : 'd-none'}`}
          onClick={() => {
            setShowQR(false)
          }}
        >
          <div className="modal-content">
            <span className="close" onClick={() => setShowQR(!showQR)}>&times;</span>
            <img src="/images/qrgrow.jpg" alt="detail bebelac" />
          </div>
        </div>
      </div>
    </>
  );
}
