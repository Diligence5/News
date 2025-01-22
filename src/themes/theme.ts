interface Color {
  primary: string;
  secondary: string;
  placeholder: string;
  white: string;
  border: string;
  red: string;
  yellow: string;
  black_text: string;
  un_selected_star: string;
  line: string;
  modal_backdrop_color: string;
  selected_item_bg: string;
  green: string;
  black: string
  orange: string
  text_input_bg: string
  otp_input_bg: string;
  gray: string;
  sky_blue: string;
  lime_green: string;
  tab_bar_selected_bg: string;
  tab_bar_unselected_text: string;
}

interface FontSize {
  size2: number;
  size4: number;
  size6: number;
  size8: number;
  size10: number;
  size12: number;
  size14: number;
  size15: number;
  size16: number;
  size18: number;
  size20: number;
  size22: number;
  size24: number;
  size27: number;
  size28: number;
}

export const Color: Color = {
  primary: '#1858CA',
  secondary: '#6F767E',
  placeholder: '#D1D3D4',
  white: '#FFFFFF',
  border: '#EBEBEB',
  red: '#F1441C',
  yellow: '#FFBD2E',
  black_text: '#1A1D1F',
  un_selected_star: '#5F6368',
  line: '#EBEBEB',
  modal_backdrop_color: 'rgba(0,0,0,1.6)',
  selected_item_bg: '#F4F9FF',
  green: '#6CC068',
  black: '#1A1D1F',
  orange: '#FB9B0B',
  text_input_bg: '#F5F5F5',
  otp_input_bg: '#C2C2C2',
  gray: '#676767',
  sky_blue: '#1799AC',
  lime_green: '#DEFF09',
  tab_bar_selected_bg: 'rgba(103, 89, 255, 0.1)',
  tab_bar_unselected_text: '#1E1E1E',

};

export const FontSizes: FontSize = {
  size2: 2,
  size4: 4,
  size6: 6,
  size8: 8,
  size10: 10,
  size12: 12,
  size14: 14,
  size15: 15,
  size16: 16,
  size18: 18,
  size20: 20,
  size22: 22,
  size24: 24,
  size27: 27,
  size28: 28,
};
