const styleVars = {
  colors: {
    // grays: [
    //   '#F8F9FA',
    //   '#CECFD7',
    //   '#A6A6B4',
    //   '#807F91',
    //   '#5D5E6E',
    //   '#3C3E4B',
    //   '#1F2026',
    // ],
    main: ['rgb(12,22,38)', 'rgb(15,58,77)', 'rgb(15,119,122)', 'rgb(106, 180, 174)', 'rgb(204,233,227)'],
    secondary: ['rgb(28,15,16)', 'rgb(69,21,22)', 'rgb(122,32,22)', 'rgb(186,126,104)', 'rgb(236,216,204)'],
  },
  mixins: {
    // use in component with ${styleVars.mixins.mixinName}
    materialShadow: [
      `box-shadow: 0 1.5px 4px rgba(0, 0, 0, 0.24), 0 1.5px 6px rgba(0, 0, 0, 0.12)`,
      `box-shadow: 0 3px 12px rgba(0, 0, 0, 0.23), 0 3px 12px rgba(0, 0, 0, 0.16)`,
      `box-shadow: 0 6px 12px rgba(0, 0, 0, 0.23), 0 10px 40px rgba(0, 0, 0, 0.19)`,
      `box-shadow: 0 10px 20px rgba(0, 0, 0, 0.22), 0 14px 56px rgba(0, 0, 0, 0.25)`,
      `box-shadow: 0 15px 24px rgba(0, 0, 0, 0.22), 0 19px 76px rgba(0, 0, 0, 0.3)`,
    ],
  },
};

// OPACITIES (listed for reference, taken from material design guidelines)

// DividerOnLightBG: transparentize(0.88, '#000');
// DividerOnDarkBG:  transparentize(0.8, '#fff');

// IconOnLightBG-Active-Focused: transparentize(0.13, '#000');
// IconOnLightBG-Active-Unfocused: transparentize(0.46, '#000');
// IconOnLightBG-Inactive: transparentize(0.62, '#000');
// IconOnDarkBG-Active-Focused: transparentize(0, '#fff');
// IconOnDarkBG-Active-Unfocused: transparentize(0.3, '#fff');
// IconOnDarkBG-Inactive: transparentize(0.5, '#fff');

// TextOnLightBG-HighEmphasis: transparentize(0.13, '#000');
// TextOnLightBG-MedEmphasis: transparentize(0.4, '#000');
// TextOnLightBG-Disabled: transparentize(0.62, '#000');

export default styleVars;
