import SectionHeader from '../components/SectionHeader'

const lessonDeck = [
  { title: 'תרגול ריתמיקה חיונית', subtitle: '12 דקות • אוזן', progress: 75 },
  { title: 'סקיילים בליווי תופים', subtitle: '18 דקות • גיטרה', progress: 56 },
  { title: 'קורדיו והסברים', subtitle: '22 דקות • תיאוריה', progress: 40 },
]

const progressCards = [
  { title: 'קורס גיטרה מתקדם', value: '82%', accent: 'green' },
  { title: 'תיאוריה מוזיקלית', value: '67%', accent: 'purple' },
  { title: 'תרגול יצירתיות', value: '48%', accent: 'orange' },
]

function Home() {
  return (
    <section className="page-layout">
      <header className="home-hero card">
        <div>
          <p className="eyebrow">שלום מיכל!</p>
          <h1>גלה את המסלול המתקדם שלך במוזיקה</h1>
          <p className="hero-copy">
            כל יום יש לך תרגול מותאם, ניתוח ביצועים ונתיב אישי עד להצלחה מקצועית.
          </p>
        </div>

        <div className="hero-chips">
          <span className="hero-chip">סטreak: 12 ימים</span>
          <span className="hero-chip">XP 1,240</span>
          <span className="hero-chip">80% התחייבות חודשית</span>
        </div>
      </header>

      <SectionHeader eyebrow="אתגר יומי" title="מלא את האתגר ותקבל נקודות בונוס" actionLabel="הצג אתגר" actionLink="/guitar" />

      <div className="card-grid">
        <article className="card feature-card">
          <div className="card-header">
            <p>🎯 אתגר</p>
            <span>הגיע הזמן למקד</span>
          </div>
          <h2>זיהוי תווים בתוך 30 שניות</h2>
          <p className="card-text">שפרי את כישורי השמיעה עם חמש תרגילים אינטנסיביים.</p>
          <button className="primary-button">התחל את האתגר</button>
        </article>

        <article className="card stats-card">
          <div className="stats-grid">
            <div>
              <p className="eyebrow">התקדמות</p>
              <strong>76%</strong>
            </div>
            <div>
              <p className="eyebrow">כלי</p>
              <strong>גיטרה</strong>
            </div>
            <div>
              <p className="eyebrow">קצב</p>
              <strong>5 שיעורים היום</strong>
            </div>
          </div>
        </article>
      </div>

      <section className="continue-learning">
        <div className="section-title">
          <div>
            <p className="eyebrow">המשך ללמוד</p>
            <h2>שיעורים בולטים לשבוע</h2>
          </div>
          <button className="text-button">הצג הכל</button>
        </div>

        <div className="lesson-list">
          {lessonDeck.map((lesson) => (
            <article key={lesson.title} className="lesson-card">
              <div>
                <h3>{lesson.title}</h3>
                <p>{lesson.subtitle}</p>
              </div>
              <div className="lesson-progress lesson-progress-wide">
                <span className="progress-dot active" style={{ width: `${lesson.progress}%` }} />
                <strong>{lesson.progress}%</strong>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="progress-section">
        <div className="section-title">
          <div>
            <p className="eyebrow">התקדמות</p>
            <h2>כרטיסי מסלול</h2>
          </div>
          <span className="progress-summary">300 נקודות נותרו לדרגה הבאה</span>
        </div>

        <div className="progress-cards">
          {progressCards.map((card) => (
            <article key={card.title} className={`progress-card ${card.accent}`}>
              <div>
                <p>{card.title}</p>
                <strong>{card.value}</strong>
              </div>
              <div className="progress-bar">
                <span style={{ width: card.value }} />
              </div>
            </article>
          ))}
        </div>
      </section>
    </section>
  )
}

export default Home
