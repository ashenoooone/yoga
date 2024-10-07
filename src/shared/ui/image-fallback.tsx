import { cn } from "@/shared/utils";

type ImageFallbackProps = {
  className?: string;
  fallback?: string;
};

export const ImageFallback = (
  props: ImageFallbackProps
) => {
  const { className, fallback } = props;
  return (
    <div
      className={cn(
        "bg-mainColor/10 p-4 rounded-xl select-none text-gray-600 font-bold aspect-square flex items-center justify-center",
        className
      )}
    >
      {fallback}
    </div>
  );
};
