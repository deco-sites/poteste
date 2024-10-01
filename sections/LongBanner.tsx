import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

interface Props {
  image: ImageWidget;
  alt: string;
}

export default function LongBanner({ image, alt }: Props) {
  return (
    <div class="w-[1440px] mx-auto ">
      <Image
        src={image}
        alt={alt}
        width={1143}
        height={256}
        class="object-cover mx-auto"
      />
    </div>
  );
}
