import { connect } from 'react-redux';
import { toggleTheme } from '../../store/themeReducer/action';
import { ImageContainer, Image } from './ThemeToggler.Styles';
import ThemeIconDark from '../../assets/icons/Scan_dark.svg';
import ThemeIconLight from '../../assets/icons/Scan_light.svg';

function ThemeToggler({ theme, toggleTheme }) {
  return (
    <ImageContainer to="#" onClick={() => toggleTheme()}>
      {theme.theme === 'light' ? (
        <Image src={ThemeIconLight} alt="toggle theme" />
      ) : (
        <Image src={ThemeIconDark} alt="toggle theme" />
      )}
    </ImageContainer>
  );
}

const mapDispatchToProps = {
  toggleTheme,
};

const mapStateToProps = ({ theme }) => ({ theme });

export default connect(mapStateToProps, mapDispatchToProps)(ThemeToggler);
