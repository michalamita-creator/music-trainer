import { Link } from 'react-router-dom'

type SectionHeaderProps = {
  eyebrow: string
  title: string
  actionLabel?: string
  actionLink?: string
}

export default function SectionHeader({ eyebrow, title, actionLabel, actionLink }: SectionHeaderProps) {
  return (
    <div className="section-header">
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
      </div>
      {actionLabel && actionLink ? (
        <Link className="text-button" to={actionLink}>
          {actionLabel}
        </Link>
      ) : null}
    </div>
  )
}
