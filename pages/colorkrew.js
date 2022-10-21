import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@nytimes" />
        <meta name="twitter:creator" content="@SarahMaslinNir" />
        <meta name="twitter:title" content="ColorKrew" />
        <meta name="twitter:description" content="Our First Company" />
        <meta
          name="twitter:image"
          content="https://firebasestorage.googleapis.com/v0/b/matcha-6262b/o/employer%2Fcolorkrew%20-company.jpg?alt=media&token=f57574d4-1cf0-4e28-83b7-0cd95430d381"
        />
      </Head>

      <main>ColorKrew</main>
    </div>
  );
}
