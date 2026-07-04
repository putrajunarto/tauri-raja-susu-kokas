import Link from "next/link";

export default function Home() {
  return (
    <>
      <Link href={'/home'}>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%" }}>
          <video
            autoPlay
            loop
            playsInline
            // muted
            style={{ height: "100%", width: "auto", borderRadius: "8px" }}
          >
            <source src="/SGM_Traffic_916_Motion.mp4" type="video/mp4" />
          </video>
        </div>
      </Link>
    </>
  );
}
