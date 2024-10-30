import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

export interface Banner {
  image: ImageWidget;
  alt: string;
  url?: string;
  title: string;
  description: string;
}

interface Props {
  /**@maxItems 4 */
  infoBanner: Banner[];
}

export default function InformationBar({ infoBanner }: Props) {
  return (
    <div class="w-[1080px] mt-[53px] mx-auto flex space-x-12 items-center">
      {infoBanner.map((info) => (
        <a href={info.url} target="blank" class=" flex items-center space-x-4">
          <Image
            src={info.image}
            alt={info.title}
            width={50}
            height={50}
            class="object-cover rounded-lg space-x-0"
          />

          <div class=" text-secondary font-[Montserrat] text-base w-[250px] h-[40px] ">
            <p>{info.title}</p>
            <p>{info.description}</p>
          </div>
        </a>
      ))}
    </div>
  );
}
