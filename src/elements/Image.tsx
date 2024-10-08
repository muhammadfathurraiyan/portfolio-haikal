import { LazyLoadImage, ScrollPosition } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/opacity.css";

export default function Image(props: {
  alt: string;
  src: string;
  className: string;
  scrollPosition?: ScrollPosition;
}) {
  return (
    <LazyLoadImage
      alt={props.alt}
      effect="opacity"
      className={props.className}
      scrollPosition={props.scrollPosition}
      wrapperProps={{
        style: { transitionDelay: "1s" },
      }}
      src={props.src}
    />
  );
}
