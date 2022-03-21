import { colors } from '../../constants/colors';
import { TypesButton } from '../../constants/TypesButton';

const colorBgByType = {
  [TypesButton.PRIMARY]: colors.blueMain,
  [TypesButton.OUTLINE]: 'transparent',
};

export const applyBgColor = ({ color }) => `background: ${colorBgByType[color]}`;
