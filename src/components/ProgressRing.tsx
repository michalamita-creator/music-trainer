type ProgressRingProps = {
  label: string
  value: number
  color: string
}

export default function ProgressRing({ label, value, color }: ProgressRingProps) {
  return (
    <div className="progress-ring">
      <div className="progress-ring-track" style={{ borderColor: color }}>
        <div className="progress-ring-fill" style={{ width: `${value}%`, background: color }} />
      </div>
      <div className="progress-ring-copy">
        <strong>{value}%</strong>
        <span>{label}</span>
      </div>
    </div>
  )
}
