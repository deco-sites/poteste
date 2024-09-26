import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

interface Props {
  image: ImageWidget;
  alt: string;
}

export default function LongBanner({ image, alt }: Props) {
  return (
    <div class="w-full">
      <Image
        src={image}
        alt={alt}
        width={1143}
        height={256}
        class="w-full object-cover mx-auto"
      />
      <p>Oi</p>
    </div>
  );
}
