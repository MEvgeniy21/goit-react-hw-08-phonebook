import PropTypes from 'prop-types';
import { RotatingLines } from 'react-loader-spinner';
import { theme } from 'theme';
import * as SC from './Loader.styled';

export default function Loader({ width = 96 }) {
  return (
    <SC.Wrap>
      <RotatingLines
        strokeColor={theme.colors.load}
        strokeWidth="5"
        animationDuration="0.75"
        width={width}
        visible={true}
      />
    </SC.Wrap>
  );
}

Loader.propTypes = {
  width: PropTypes.number,
};
