import { connect } from 'react-redux';
import { ThemeProvider } from 'styled-components';

function Theme({ theme, children }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

const mapStateToProps = (state) => ({
  theme: state.theme,
});

export default connect(mapStateToProps)(Theme);
