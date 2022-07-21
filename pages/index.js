import Cookies from "js-cookie";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Home() {
  const router = useRouter();

  const logIn = (e) => {
    e.preventDefault();
    Cookies.set("loggedin", "true");
    router.push("/dashboard");
  };
  
  return (
    <div>
      <Link href="/">
        <nav>
          <h1>Home</h1>
        </nav>
      </Link>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <form onSubmit={(e) => logIn(e)}>
          <h1>Log In</h1>
          <input type="text" placeholder="Username" required />
          <input type="password" placeholder="Password" required />
          <button>Log In</button>
        </form>
      </div>
    </div>
  );
}
