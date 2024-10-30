import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

interface Props {
  image: ImageWidget;
  alt: string;
  title: string;
  description: string;
  url: string;
  icon?: ImageWidget;
}

export default function BeforeAfter({
  image,
  alt,
  title,
  description,
  url,
  icon,
}: Props) {
  return (
    <div class="w-[1225px] h-[488px] flex mx-auto">
      <div>
        <Image src={image} alt={alt} width={667} height={488} />
      </div>

      <div class="block mx-auto w-[542px] h-[165px]">
        <div class="w-[542px] h-8">
          <p>{title}</p>
        </div>

        <div class="w-[461px] h-16">
          <p>{description}</p>
        </div>

        <div class="w-4 h-[15px]">{icon}</div>

        <div class-="w-[461px] h-6">
          <a>
            <p>{url}</p>
          </a>
        </div>
      </div>
    </div>
  );
}
