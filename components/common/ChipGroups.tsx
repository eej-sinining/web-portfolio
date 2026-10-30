// Labelled groups of chips, used for the tech stack and the VA toolkit.
export default function ChipGroups({ groups }: { groups: Record<string, string[]> }) {
  return (
    <div className="space-y-4">
      {Object.entries(groups).map(([group, items]) => (
        <div key={group}>
          <h3 className="text-sm font-semibold text-foreground mb-2">{group}</h3>
          <ul className="flex flex-wrap gap-1.5">
            {items.map((item) => (
              <li key={item} className="chip">
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
