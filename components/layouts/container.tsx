import type { PropsWithChildren } from "react";
import { cn } from "@/lib/utils";

type ContainerProps = PropsWithChildren<{
  className?: string;
}>;

export const Container = ({ children, className }: ContainerProps) => (
  <div className={cn("mx-auto w-full max-w-[1200px] px-[var(--container-padding)]", className)}>
    {children}
  </div>
);
