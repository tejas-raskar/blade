import { Svg, Path } from '../_Svg';
import type { IconComponent } from '..';
import useIconProps from '../useIconProps';

const InternationalPaymentsIcon: IconComponent = ({ size, color, ...styledProps }) => {
  const { height, width, iconColor } = useIconProps({ size, color });

  return (
    <Svg {...styledProps} width={width} height={height} viewBox="0 0 24 24" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.72571 3.28983C6.16881 4.21597 3.46801 7.26324 3.05493 11H7.05009C7.2743 8.23681 8.1991 5.58442 9.72571 3.28983ZM12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1ZM14.2743 3.28983C15.8009 5.58442 16.7257 8.23681 16.9499 11H20.9451C20.532 7.26324 17.8312 4.21597 14.2743 3.28983ZM14.9424 11C14.6912 8.28683 13.6697 5.70193 12 3.5508C10.3303 5.70193 9.30879 8.28683 9.05759 11H14.9424ZM9.05759 13H14.9424C14.6912 15.7132 13.6697 18.2981 12 20.4492C10.3303 18.2981 9.30879 15.7132 9.05759 13ZM7.05009 13H3.05493C3.46801 16.7368 6.16881 19.784 9.72571 20.7102C8.1991 18.4156 7.2743 15.7632 7.05009 13ZM14.2743 20.7102C15.8009 18.4156 16.7257 15.7632 16.9499 13H20.9451C20.532 16.7368 17.8312 19.784 14.2743 20.7102Z"
        fill={iconColor}
      />
    </Svg>
  );
};

export default InternationalPaymentsIcon;
