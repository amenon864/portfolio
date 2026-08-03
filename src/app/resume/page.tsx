import { redirect } from "next/navigation";
import { routes } from "@/data/navigation";

export default function ResumeRedirect() {
  redirect(routes.activity);
}
