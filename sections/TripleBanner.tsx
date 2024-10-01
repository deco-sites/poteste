import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

export interface Banner {
  image: ImageWidget;
  alt: string;
  url: string;
}

interface Props {
  banners: Banner[];
}

export default function TripleBanner({ banners }: Props) {
  return (
    <div class="w-[1140px] gap-6 mt-[54px] mx-auto flex">
      {banners.map((banner) => (
        <a href={banner.url} target="blank">
          <Image
            src={banner.image}
            alt={banner.alt}
            width={364}
            height={417}
            class="object-cover mx-auto rounded-lg"
          />
        </a>
      ))}
    </div>
  );
}
