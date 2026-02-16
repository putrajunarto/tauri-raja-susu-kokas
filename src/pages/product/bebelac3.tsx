/* eslint-disable @next/next/no-img-element */
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import { useState } from "react";

// Componrnt iframe
const iframeComponent = (
  <iframe
    id="myIframe"
    className="youtube"
    src="https://www.youtube.com/embed/-NuKXqkfGdQ?si=iw_7uuTK2yZSjsxo"
    title="YouTube video player"
    allow="accelerometer; autoplay=1; stop; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    referrerPolicy="strict-origin-when-cross-origin"
    allowFullScreen>
  </iframe>
);

export default function Bebelac3() {
  const [showModal, setShowModal] = useState(false);
  const [showGizi, setShowGizi] = useState(false);

  const playVideo = () => {
    setShowModal(true);
  };

  return (
    <>
      <Link href={'/product/bebelac'}
        className={styles.btnBack}
      >
        Back
      </Link>
      <img src="/product/bebelac1/section-1.png" className="img-fluid" alt="placeholder" />
      <img src="/product/bebelac1/section-2.png" className="img-fluid" onClick={playVideo} alt="placeholder" />
      <img src="/product/bebelac1/section-3.png" className="img-fluid" alt="placeholder" />
      <img src="/product/bebelac1/section-4.png" className="img-fluid" onClick={() => setShowGizi(true)} alt="placeholder" />
      {/* Modal Video */}
      <div id="myModal" className={`modal ${showModal ? 'flex items-center z-100' : 'd-none'}`}
        onClick={() => {
          setShowModal(false)
        }}
      >
        <div className="mx-auto">
          {showModal && iframeComponent}
        </div>
      </div>
      {/* Modal gizi */}
      <div id="myModal" className={`modal ${showGizi ? '' : 'd-none'}`}>
        <div className="modal-content">
          <span className="close" onClick={() => setShowGizi(!showGizi)}>&times;</span>
          {/* <div className="titleBebelac">
            <h3 className="text-center">Informasi Nilai Gizi</h3>
          </div> */}
          <div>
            <img src="/product/bebelac1/popupGizi.png" className="img-fluid" alt="detail bebelac" />
          </div>
        </div>
      </div>
    </>
  );
}
