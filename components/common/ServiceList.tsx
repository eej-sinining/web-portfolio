interface Service {
  title: string;
  description: string;
}

export default function ServiceList({ services }: { services: Service[] }) {
  return (
    <dl className="grid gap-4 sm:grid-cols-2">
      {services.map(({ title, description }) => (
        <div key={title}>
          <dt className="text-sm font-semibold text-foreground">{title}</dt>
          <dd className="mt-1 text-sm text-muted leading-relaxed">{description}</dd>
        </div>
      ))}
    </dl>
  );
}
