import React from "react";
import { TypeBadge, StatusBadge, PlaceBadge, ThemaBadge, ChatCountBadge, ChatStateBadge, AcomCountBadge} from "./Badges.style";
import { BadgeProps } from "./Badges.types";



const Badges: React.FC<BadgeProps> = ({ badgeType, subType, text, styleType }) => {
  let badgeText;
  switch (badgeType) {
    case "type":
      if(subType === "restaurant") badgeText = "식당";
      else if(subType === "trad") badgeText = "전통";
      else badgeText = "여행";
      return <TypeBadge {...styleType}> {badgeText}</TypeBadge>;

    case "status":
      if(text !== "") badgeText = text;
      else if(subType === "open") badgeText = "동행모집";
      else badgeText = "동행완료";
      return <StatusBadge {...styleType}>{badgeText}</StatusBadge>;

    case "place":
      return <PlaceBadge {...styleType}>{text}</PlaceBadge>;

    case "thema":
      return <ThemaBadge {...styleType}>{text}</ThemaBadge>;

    case "chatCount":
      return <ChatCountBadge {...styleType}>{text}</ChatCountBadge>;

    case "chatState":
      if(subType === "fix") badgeText = "동행확정";
      else if(subType === "inquiry") badgeText = "동행문의";
      else badgeText = "동행종료";
      return <ChatStateBadge {...styleType}>{text}</ChatStateBadge>;

    case "acomCount":
      return <AcomCountBadge {...styleType}>{text}</AcomCountBadge>;

    default:
      return <TypeBadge {...styleType}>{text}</TypeBadge>;
  }
};

export default Badges;