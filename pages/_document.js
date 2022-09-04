 import Document, { Html, Head, Main, NextScript } from "next/document";
 import { extractCritical } from "@emotion/server";

 class MyDocument extends Document {
   static async getInitialProps(ctx) {
     const initialProps = await Document.getInitialProps(ctx);
     const page = await ctx.renderPage();
     const styles = extractCritical(page.html);
     return { ...initialProps, ...page, ...styles };
   }

   render() {
     return (
       <Html lang="en">
         <Head>
         <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400..700&display=swap"
            rel="stylesheet"
          />
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=G-EGE7CY8PXB`}
          />
          <script
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-EGE7CY8PXB', {
                  page_path: window.location.pathname,
                });
              `
            }}
          />
           <style
             data-emotion-css={this.props.ids.join(" ")}
             dangerouslySetInnerHTML={{ __html: this.props.css }}
           />
      </Head>
       <body>
         <Main />
         <NextScript />
       </body>
     </Html>
  );
  }
}

export default MyDocument;