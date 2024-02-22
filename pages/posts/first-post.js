import Head from "next/head";
import Link from "next/link";
import Script from "next/script";

export default function firstPost() {
  return (
    <>
      <Head>
        <title>First Post</title>
      </Head>
      {/* <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload" //controls when 3rd part script should load - lazily during browser idle  time
        onLoad={() =>
          //used to run any JS code immediately after the script finished loading
          console.log(`script loaded correctly, window.FB has been populated`)
        }
      /> */}
      <h1>First Post</h1>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
    </>
  );
}
