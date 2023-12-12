import React from 'react';

const style = {
  display: 'flex',
  alignItems: 'center',
  whiteSpace: 'pre-wrap',
};

interface TextProps {
  children: React.ReactNode;
  fontType: string;
  align?: string;
  color?: string;
  width?: number;
}


const FontTypeValue = {
  title: {
    size: 28,
    weight: 700,
  },
  subTitle: {
    size: 22,
    weight: 700,
  },
  content: {
    size: 16,
    weight: 400,
  },
  description: {
    size: 14,
    weight: 400,
  },
};

export const FontType = {
  title: 'title',
  subTitle: 'subTitle',
  content: 'content',
  description: 'description',
};

export const FontAlignType = {
  center: 'center',
  right: 'flex-start',
  left: 'flex-end',
};

export const FontColor = {
  black: '#000000',
  white: '#ffffff',
  green: '#478A30',
  darkGray: '#495056',
  gray: '#868B91',
};

export const Text = ({ children, fontType, align, color, width }: TextProps) => {
  return (
    <div
      style={{
        ...style,
        fontSize: FontTypeValue[fontType].size,
        fontWeight: FontTypeValue[fontType].weight,
        justifyContent: align ? FontAlignType[align] : FontAlignType.right,
        color: color ? FontColor[color] : FontColor.black,
        lineHeight: fontType == FontType.description ? '150%' : '',
        width,
      }}
    >
      {children}
    </div>
  );
};

Text.FontAlignType = FontAlignType;
Text.FontType = FontType;
Text.FontColor = FontColor;
