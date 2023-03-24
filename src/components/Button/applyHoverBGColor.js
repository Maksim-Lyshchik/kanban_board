import { TypesButton } from '../../constants/TypesButton';
import { colors } from '../../constants/colors';

const colorByType = {
  [TypesButton.PRIMARY]: colors.blue,
  [TypesButton.OUTLINE]: colors.white,
};

export const applyHoverBGColor = ({ color }) => `
  &:hover {
    background-color: ${colorByType[color]}
  }
`;
