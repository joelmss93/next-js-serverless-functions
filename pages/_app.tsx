import ThemeContainer from "../contexts/theme/themeContainer"

function MyApp({ Component, pageProps }) {
  return (
  <ThemeContainer>
    <Component {...pageProps} />
  </ThemeContainer>
  );
}

export default MyApp;
