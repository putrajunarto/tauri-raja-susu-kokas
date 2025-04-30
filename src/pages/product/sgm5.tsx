/* eslint-disable @next/next/no-img-element */
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import { useState } from "react";

export default function SGM5() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Link href={'/product/sgm'}
        className={styles.btnBack}
      >
        Back
      </Link>
      <img src="/DetailProduct/SGM5+1.png" className="img-fluid" alt="placeholder" />
      <img src="/DetailProduct/SGM5+2.png" className="img-fluid" onClick={() => setShowModal(!showModal)} alt="placeholder" />
      <img src="/DetailProduct/SGM5+3.png" className="img-fluid" alt="placeholder" />
      <div id="myModal" className={`modal ${showModal ? '' : 'd-none'}`}>
        <div className="modal-content">
          <span className="close" onClick={() => setShowModal(!showModal)}>&times;</span>
          <img src="/DetailProduct/sgmsoya.webp" className="img-fluid" alt="image" />
        </div>
      </div>
    </>
  );
}
