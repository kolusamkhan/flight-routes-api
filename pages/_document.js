import Document, { Html, Head, Main, NextScript } from 'next/document'
import {getLanguageDirection, getMessageContent, getPageName} from '../utils/helper';
import RenderClientDataAsJSON from '../utils/render-json';
const ldJSON = require("../data/ld-json.json");
class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps}
  }

  render() {
   const content = getMessageContent(this.props);
   const htmlClass = content?.seo?.htmlClass;
   const myLanguageType = content?.seo?.myLanguageType;
   const title = content?.common?.title;
   const copyright = content?.seo?.copyright;
   const keywords = content?.seo?.keywords;
   const languageDirection = getLanguageDirection(this.props?.locale);    

   const pageName = getPageName(this.props);
   const section = content?.[pageName]?.section;
   const pageTitle = content?.[pageName]?.title;
   const description = content?.[pageName]?.description;
   

   return (
      <Html className={htmlClass} dir={languageDirection}>
        <Head>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />

            <meta charSet="utf-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />

            <meta name="myLanguageType" content={myLanguageType} />
            <meta name="Copyright" content={copyright} />
            <meta name="Keywords" content={keywords} />
            <meta name="Description" content={description} />

            <meta name="Section" content={section} />
            <meta name="Title" content={title} />
            <meta name="PageTitle" content={pageTitle} />
            <meta name="Robots" content="INDEX, FOLLOW" />
            <meta name="Rating" content="General" />

            <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
            <link href="/favicon.ico" rel="shortcut icon" />
            <RenderClientDataAsJSON  type="application/ld+json" data={ldJSON}/>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument;