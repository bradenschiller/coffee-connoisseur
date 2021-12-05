import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <div>Add to every page</div>
    </>
  );
}

export default MyApp
