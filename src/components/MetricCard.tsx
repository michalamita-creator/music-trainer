type MetricCardProps = {
  label: string
  value: string
  description: string
  accent?: 'purple' | 'green' | 'teal' | 'orange'
}

const accentMap: Record<NonNullable<MetricCardProps['accent']>, string> = {
  purple: '#8d6dff',
  green: '#3bd192',
  teal: '#4bd1ff',
  orange: '#ffb56a',
}

export default function MetricCard({ label, value, description, accent = 'purple' }: MetricCardProps) {
  return (
    <article className="metric-card" style={{ borderColor: accentMap[accent] }}>
      <div>
        <p>{label}</p>
        <strong>{value}</strong>
      </div>
      <span>{description}</span>
    </article>
  )
}
