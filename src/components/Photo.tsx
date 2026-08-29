type PhotoProps = {
  src: string;
  alt: string;
  eager?: boolean;
  className?: string;
};

export function Photo({ src, alt, eager = false, className = "" }: PhotoProps) {
  return (
    <picture className="contents">
      <img
        src={src}
        alt={alt}
        loading={eager ? "eager" : "lazy"}
        decoding="async"
        className={className}
      />
    </picture>
  );
}
