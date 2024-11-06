import { AppContext } from "../../apps/site.ts";
import Icon from "../../components/ui/Icon.tsx";
import Section from "../../components/ui/Section.tsx";
import { clx } from "../../sdk/clx.ts";
import { usePlatform } from "../../sdk/usePlatform.tsx";
import { useComponent } from "../Component.tsx";
import { type SectionProps } from "@deco/deco";
interface NoticeProps {
  title?: string;
  description?: string;
}
export interface Props {
  empty?: NoticeProps;
  success?: NoticeProps;
  failed?: NoticeProps;
  /** @description Texto no campo do nome */
  placeholderName?: string;
  /** @description Texto no campo do email */
  placeholder?: string;
  /** @hide true */
  status?: "success" | "failed";
}
export async function action(props: Props, req: Request, ctx: AppContext) {
  const platform = usePlatform();
  const form = await req.formData();
  const email = `${form.get("email") ?? ""}`;
  if (platform === "vtex") {
    // deno-lint-ignore no-explicit-any
    await (ctx as any).invoke("vtex/actions/newsletter/subscribe.ts", {
      email,
    });
    return { ...props, status: "success" };
  }
  return { ...props, status: "failed" };
}
export function loader(props: Props) {
  return { ...props, status: undefined };
}
function Notice({
  title,
  description,
}: {
  title?: string;
  description?: string;
}) {
  return (
    <div class="flex flex-col justify-center items-center gap-4 text-base-200">
      <span class="uppercase text-base">newsletter</span>
      <span class="text-2xl font-semibold text-center uppercase">{title}</span>
      <span class="text-base text-center mt-4">{description}</span>
    </div>
  );
}
function Newsletter({
  empty = {
    title: "Get top deals, latest trends, and more.",
    description: "",
  },
  success = {
    title: "",
    description: "",
  },
  failed = {
    title: "Sinto muito, algo deu errado. Tente novamente!",
    description: "",
  },
  placeholderName = "",
  placeholder = "Enter your email address",
  status,
}: SectionProps<typeof loader, typeof action>) {
  if (status === "success" || status === "failed") {
    console.log(failed);

    return (
      <Section.Container class="bg-primary mt-20">
        <div class="p-14 flex flex-col items-center justify-center gap-5 ">
          <Icon
            size={80}
            class="text-base-200"
            id={status === "success" ? "check-circle" : "error"}
          />
          <Notice {...(status === "success" ? success : failed)} />
        </div>
      </Section.Container>
    );
  }
  return (
    <Section.Container class="bg-primary mt-20">
      <div class="flex flex-col justify-center items-center  gap-10">
        <Notice {...empty} />

        <form
          hx-target="closest section"
          hx-swap="outerHTML"
          hx-post={useComponent(import.meta.url)}
          class="flex"
        >
          <input
            name="name"
            class="input input-bordered w-[365px] h-14 rounded-lg mr-8"
            type="text"
            placeholder={placeholderName}
          />

          <input
            name="email"
            class="input input-bordered w-[551px] h-14 rounded-lg mr-2"
            type="text"
            placeholder={placeholder}
          />

          <button
            class="btn btn-base-200  w-[189px] h-14 rounded-lg"
            type="submit"
          >
            <span class="[.htmx-request_&]:inline hidden loading loading-spinner" />
            <span>Enviar</span>
          </button>
        </form>
      </div>
    </Section.Container>
  );
}
export const LoadingFallback = () => <Section.Placeholder height="412px" />;
export default Newsletter;
