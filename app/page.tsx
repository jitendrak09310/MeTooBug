import Image from "next/image";

export default function Home() {
  return (
    <section>
      <h1>MeTooBug</h1>
      <p>A simple platform to report, track and manage software bugs.</p>
      <div>
        <a href="/login">Login</a> <a href="/register">Create Account</a>
      </div>
    </section>
  );
}
