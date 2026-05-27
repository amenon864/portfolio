type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  children?: React.ReactNode;
};

export function SectionHeader({ eyebrow, title, children }: SectionHeaderProps) {
  return (
    <div className="max-w-3xl">
      {eyebrow ? (
        <p className="mb-2 font-mono text-xs uppercase text-accent">
          {eyebrow}
        </p>
      ) : null}
      <h1 className="text-3xl font-semibold text-text sm:text-4xl">
        {title}
      </h1>
      {children ? <div className="mt-4 text-sm leading-7 text-muted sm:text-base">{children}</div> : null}
    </div>
  );
}
