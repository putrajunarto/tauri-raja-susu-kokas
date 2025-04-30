/* eslint-disable @next/next/no-img-element */
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import { useState } from "react";

export default function Bebelac3() {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <Link href={'/product/bebelac'}
        className={styles.btnBack}
      >
        Back
      </Link>
      <img src="/DetailProduct/Bebelac31.png" className="img-fluid" alt="placeholder" />
      <img src="/DetailProduct/Bebelac32.png" className="img-fluid" style={{ marginTop: '-4px' }} onClick={() => setShowModal(!showModal)} alt="placeholder" />
      <img src="/DetailProduct/Bebelac33.png" className="img-fluid" style={{ marginTop: '-4px' }} alt="placeholder" />
      <div id="myModal" className={`modal ${showModal ? '' : 'd-none'}`}>
        <div className="modal-content">
          <span className="close" onClick={() => setShowModal(!showModal)}>&times;</span>
          <div className="titleBebelac">
            <h3 className="text-center">Informasi Nilai Gizi</h3>
          </div>
          <div className="p-3">
            <img src="/product/bb3detail.png" className="img-fluid" alt="detail bebelac" />
          </div>
        </div>
      </div>
    </>
  );
}
