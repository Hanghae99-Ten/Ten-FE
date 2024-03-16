import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    Title_48_bold: RuleSet<object>;
    Header_18_bold: RuleSet<object>;
    Body_700_24: RuleSet<object>;
    Body_500_24: RuleSet<object>;
    Body_700_16: RuleSet<object>;
    Header_500_16: RuleSet<object>;
    Body_500_14: RuleSet<object>;
    WH100: RuleSet<object>;
    FlexCol: RuleSet<object>;
    FlexRow: RuleSet<object>;
    FlexCenter: RuleSet<object>;
    BoxCenter: RuleSet<object>;
    bgColor: string;
    bgColor2: string;
    color: string;
    color2: string;
    colors: {
      white: string;
      black: string;
      blue: string;
      purple: string;
      pink: string;
      yellow: string;
      gray1: string;
      gray2: string;
      gray3: string;
      gray4: string;
      gray5: string;
    };
    shadow: { boxshadow1: string; boxshadow2: string };
  }
}
