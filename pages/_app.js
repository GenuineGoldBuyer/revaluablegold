import { ThemeProvider } from "next-themes";
import "../css/tailwind.css";
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Head>
    <meta
          name="google-site-verification"
          content="v1poXjlmMFpZq_pysN4tyfMwHQG_UXRF6S1OAOjkeWQ"
        />
    <script
          type="text/javascript" // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html:`
            var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
            (function(){
            var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
            s1.async=true;
            s1.src='https://embed.tawk.to/630f80d954f06e12d891fdc0/1gbq8ul3s';
            s1.charset='UTF-8';
            s1.setAttribute('crossorigin','*');
            s0.parentNode.insertBefore(s1,s0);
            })();`
          }}
        ></script>
        <link rel ="canonical" href="https://www.revaluablegold.money"/>
    </Head>
    <ThemeProvider attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
    </>
  );
}

export default MyApp;
