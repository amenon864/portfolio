import { redirect } from "next/navigation";
import { routes } from "@/data/navigation";

export default function ContactRedirect() {
  redirect(routes.links);
}
