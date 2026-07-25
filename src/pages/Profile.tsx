import { Link } from 'react-router-dom'
import SectionHeader from '../components/SectionHeader'
import ProgressRing from '../components/ProgressRing'

function Profile() {
  return (
    <section className="page-layout profile-page">
      <SectionHeader eyebrow="פרופיל" title="ניהול המשתמש וההתקדמות שלך" actionLabel="ערוך פרופיל" actionLink="/settings" />

      <article className="profile-card card">
        <div className="profile-top">
          <div>
            <p className="eyebrow">משתמש</p>
            <h2>מיכל איתי</h2>
            <p className="card-text">נגן, מחברת ויוצרת קורסי גיטרה מתקדמים.</p>
          </div>
          <div className="profile-avatar">מ"א</div>
        </div>

        <div className="profile-metrics">
          <div>
            <p>קצב שמירה</p>
            <strong>12 ימים</strong>
          </div>
          <div>
            <p>נקודות</p>
            <strong>1,240</strong>
          </div>
          <div>
            <p>סיום מוסמך</p>
            <strong>5</strong>
          </div>
        </div>
      </article>

      <div className="progress-grid">
        <ProgressRing label="גיטרה" value={85} color="#8d6dff" />
        <ProgressRing label="תיאוריה" value={69} color="#57c7ff" />
        <ProgressRing label="אוזן" value={78} color="#3bd192" />
      </div>

      <div className="section-block settings-block">
        <div className="section-title">
          <div>
            <p className="eyebrow">הגדרות חשובות</p>
            <h2>כלי בקרת חשבון</h2>
          </div>
          <Link className="text-button" to="/settings">
            עבור להגדרות
          </Link>
        </div>

        <div className="settings-grid">
          <article className="setting-card">
            <p className="eyebrow">שפה</p>
            <strong>עברית</strong>
          </article>
          <article className="setting-card">
            <p className="eyebrow">מצב לילה</p>
            <strong>פעיל</strong>
          </article>
          <article className="setting-card">
            <p className="eyebrow">התראות</p>
            <strong>כבוי</strong>
          </article>
        </div>
      </div>
    </section>
  )
}

export default Profile
