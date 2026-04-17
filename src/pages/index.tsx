import Link from "next/link";

export default function Home() {
  return (
    <>
      <Link href={'/register'}>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
          <video
            autoPlay
            loop
            // muted
            playsInline
            style={{ height: "100%", width: "auto", borderRadius: "8px" }}
          >
            <source src="/new_bebelac.mp4" type="video/mp4" />
          </video>
        </div>
      </Link>
    </>
  );
}
