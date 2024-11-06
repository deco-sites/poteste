import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

interface Props {
  image: ImageWidget;
  alt: string;
  title: string;
  description: string;
  url: string;
  icon: ImageWidget;
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
      <Image src={image} alt={alt} width={667} height={488} />

      <div class="flex-col ml-4 mx-auto my-auto  w-[542px] h-[165px] font-[Montserrat]">
        <div class="w-[542px] h-8">
          <p class="font-semibold text-2xl">{title}</p>
        </div>

        <div class="w-[461px] h-16 mt-8 mb-[13px]">
          <p class="font-light text-xs">{description}</p>
        </div>

        <div class-="w-[461px] h-6">
          <a href={url} class="flex gap-2">
            <p class="text-base font-semibold	">{url}</p>
            {icon && (
              <Image src={icon} alt={alt} width={16} height={16} class="" />
            )}
          </a>
        </div>
      </div>
    </div>
  );
}
