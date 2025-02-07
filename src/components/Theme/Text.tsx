import React from 'react';
import { Text } from 'react-native';
import { StyleConstants } from '~/utils/theme/constants';
import { themeColors } from '~/utils/theme/themes';
import type { TextProps, TextStyle } from 'react-native';

type Props = {
  style?: Omit<TextStyle, 'color'>;
  variant?: keyof typeof StyleConstants.Font.Variant;
  color?: string;
};

const ThemeText: React.FC<Props & TextProps> = ({
  children,
  style,
  variant = 'MediumRegular',
  color = themeColors.black.light,
  ...rest
}) => {
  return (
    <Text
      style={[
        { ...( variant && StyleConstants.Font.Variant[variant] ) },
        { ...{ color } },
        { includeFontPadding: false },
        style,
      ]}
      children={children}
      {...rest}
    />
  );
};

export default ThemeText;
