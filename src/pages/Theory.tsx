import SectionHeader from '../components/SectionHeader'

const theoryModules = [
  { title: 'הרמוניה מודרנית', badge: 'מתקדמים', time: '20 דקות' },
  { title: 'מבנה שיר', badge: 'יסודות', time: '14 דקות' },
  { title: 'מקצבים מתקדמים', badge: 'אתגר', time: '18 דקות' },
]

function Theory() {
  return (
    <section className="page-layout">
      <SectionHeader eyebrow="תיאוריה" title="להבין את המוסיקה מאחורי הכל" actionLabel="בקר בספרייה" actionLink="/" />

      <article className="card feature-card">
        <div>
          <p className="eyebrow">שיפור מהירות חשיבה</p>
          <h2>זיהוי סולמות ותבניות מהר יותר</h2>
          <p className="card-text">תרגילים קצרים שמחזקים את הסמנטיקה המוסיקלית בכל שיעור.</p>
        </div>
        <button className="primary-button">התחל מודול</button>
      </article>

      <div className="stats-strip">
        <div>
          <p className="eyebrow">למידה שבועית</p>
          <strong>4 שיעורים</strong>
        </div>
        <div>
          <p className="eyebrow">הישג</p>
          <strong>98%</strong>
        </div>
        <div>
          <p className="eyebrow">קצב</p>
          <strong>11 דקות</strong>
        </div>
      </div>

      <section className="section-block">
        <div className="section-title">
          <div>
            <p className="eyebrow">מודולים אקדמיים</p>
            <h2>מה ללמוד היום</h2>
          </div>
          <button className="text-button">לוח תרגול</button>
        </div>

        <div className="module-grid">
          {theoryModules.map((module) => (
            <article key={module.title} className="module-card">
              <div>
                <span className="pill-badge">{module.badge}</span>
                <h3>{module.title}</h3>
              </div>
              <p>{module.time}</p>
            </article>
          ))}
        </div>
      </section>
    </section>
  )
}

export default Theory
