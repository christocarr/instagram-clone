import { connect } from 'react-redux';
import { toggleTheme } from '../../store/themeReducer/action';
import { ImageContainer, Image } from './ThemeToggler.Styles';
import ThemeIcon from '../../assets/icons/Scan.svg';

function ThemeToggler({ theme, toggleTheme }) {
  return (
    <ImageContainer to="#" onClick={() => toggleTheme()}>
      <Image src={ThemeIcon} alt="toggle theme" />
    </ImageContainer>
  );
}

const mapDispatchToProps = {
  toggleTheme,
};

const mapStateToProps = ({ theme }) => ({ theme });

export default connect(mapStateToProps, mapDispatchToProps)(ThemeToggler);
