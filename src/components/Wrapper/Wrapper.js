import { connect } from 'react-redux';
import { WrapperDiv } from './Wrapper.Styles';

function Wrapper({ theme, children }) {
  return <WrapperDiv theme={theme}>{children}</WrapperDiv>;
}

const mapStateToProps = ({ theme }) => ({ theme });

export default connect(mapStateToProps)(Wrapper);
