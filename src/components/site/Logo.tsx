import logoAsset from "@/assets/sukoontalk-logo.png.asset.json";
import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <img
      src={logoAsset.url}
      alt="Sukoontalk"
      width={1000}
      height={1000}
      className={cn("object-contain", className)}
    />
  );
}
