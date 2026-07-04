import Link from "next/link";

export default function Home() {
  return (
    <>
      <Link href={'/register'}>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%" }}>
          <video
            autoPlay
            loop
            // muted
            playsInline
            style={{ height: "100%", width: "auto", borderRadius: "8px" }}
          >
            <source src="/rjs_kokas.webm" type="video/webm" />
          </video>
        </div>
      </Link>
    </>
  );
}
