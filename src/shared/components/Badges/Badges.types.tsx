export type StyleType = {
  subType: BadgeProps["subType"];
  text: BadgeProps["text"];
};

export type BadgeProps = {
  badgeType: string;
  subType: string;
  text: string;
  styleType: StyleType;
};
