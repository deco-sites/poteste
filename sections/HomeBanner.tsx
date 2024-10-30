import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

interface Props {
  image: ImageWidget;
  alt: string;
}

export default function HomeBanner({ image, alt }: Props) {
  return (
    <div class="w-[1440px] h-[437px] mx-auto">
      <Image
        src={image}
        alt={alt}
        width={1440}
        height={437}
        class="object-cover w-[1440px] h-[437px]"
      />
    </div>
  );
}
