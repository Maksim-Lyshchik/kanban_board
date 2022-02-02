import { TypesButton } from '../../constants/TypesButton';
import { colors } from '../../constants/colors';

const colorByType = {
  [TypesButton.PRIMARY]: colors.white,
  [TypesButton.OUTLINE]: colors.grayDark,
};

export const applyColor = ({ color }) => `color: ${colorByType[color]}`;
