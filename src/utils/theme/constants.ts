const Base = 4;

export enum HEADING_FONT {
  FONT = "", // for now, I will not include any HEADING FONT.
}

export enum BODY_FONT {
  LIGHT = "Poppins-Light",
  REGULAR = "Poppins-Regular",
  MEDIUM = "Poppins-Medium",
  BOLD = "Poppins-Bold",
  SEMI_BOLD = "Poppins-SemiBold"
}

export const StyleConstants = {
  Spacing: {
    XS: Base,
    S: Base * 2,
    M: Base * 4,
    L: Base * 6,
    XL: Base * 8,
    Container: 20,
  },

  Font: {
    Variant: {
      HeadingOne: {
        fontFamily: HEADING_FONT.FONT,
        fontSize: 28,
      },
      HeadingTwo: { fontFamily: HEADING_FONT.FONT, fontSize: 24 },
      HeadingThree: {
        fontFamily: HEADING_FONT.FONT,
        fontSize: 20,
      },
      ButtonLabel: {
        fontFamily: BODY_FONT.SEMI_BOLD,
        fontSize: 16,
      },
      MediumRegular: {
        fontFamily: BODY_FONT.REGULAR,
        fontSize: 14,
      },
      SmallRegular: { 
        fontFamily: BODY_FONT.REGULAR,
        fontSize: 12,
      },
      LargeSemiBold: {
        fontFamily: BODY_FONT.SEMI_BOLD,
        fontSize: 16,
      },
      MediumSemiBold: {
        fontFamily: BODY_FONT.SEMI_BOLD,
        fontSize: 14,
      },
      SmallSemiBold: {
        fontFamily: BODY_FONT.SEMI_BOLD,
        fontSize: 12,
      },
      LargeRegular: {
        fontFamily: BODY_FONT.REGULAR,
        fontSize: 16,
      },
      SmallCaption: {
        fontFamily: BODY_FONT.BOLD,
        fontSize: 12,
      }
    },
  },
};
