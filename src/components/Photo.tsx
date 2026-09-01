import Image from "next/image";

type PhotoProps = {
  src: string;
  alt: string;
  eager?: boolean;
  className?: string;
  sizes?: string;
  quality?: number;
};

export function Photo({
  src,
  alt,
  eager = false,
  className = "",
  sizes = "(max-width: 1023px) 100vw, 50vw",
  quality = 88,
}: PhotoProps) {
  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes={sizes}
      quality={quality}
      priority={eager}
      className={className}
    />
  );
}
