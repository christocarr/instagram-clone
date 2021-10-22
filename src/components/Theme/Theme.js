import { connect } from 'react-redux';
import { ThemeProvider } from 'styled-components';

function Theme({ currentTheme, children }) {
  return <ThemeProvider theme={currentTheme}>{children}</ThemeProvider>;
}

const mapStateToProps = (state) => ({
  currentTheme: state.theme,
});

export default connect(mapStateToProps)(Theme);
