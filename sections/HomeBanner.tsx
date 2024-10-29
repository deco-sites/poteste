import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

interface Props {
  image: ImageWidget;
  alt: string;
}

export default function HomeBanner({ image, alt }: Props) {
  return (
    <div>
      <Image src={image} alt={alt} width={1950} height={437} />
    </div>
  );
}
