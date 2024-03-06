type CarouselType = {
  label: string;
};

export default function Carousel({ label }: CarouselType) {
  return <div>{label}</div>;
}
