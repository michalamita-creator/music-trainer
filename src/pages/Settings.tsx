import { useContext } from 'react'
import SectionHeader from '../components/SectionHeader'
import { ThemeContext } from '../contexts/ThemeContext'

function Settings() {
  const { theme, toggleTheme } = useContext(ThemeContext)

  return (
    <section className="page-layout">
      <SectionHeader eyebrow="הגדרות" title="התאמה אישית של חוויית המוזיקה" />

      <div className="settings-grid wide-grid">
        <article className="setting-card large-card">
          <p className="eyebrow">מצב חשיכה</p>
          <strong>{theme === 'dark' ? 'פעיל' : 'כבוי'}</strong>
          <p className="card-text">הממשק מותאם למצב לילה לגלישה נעימה לאורך זמן.</p>
          <button className="primary-button" type="button" onClick={toggleTheme}>
            {theme === 'dark' ? 'עבור לתאורה' : 'עבור לחושך'}
          </button>
        </article>

        <article className="setting-card large-card">
          <p className="eyebrow">התראות</p>
          <strong>קבל התראות בזמן אמת</strong>
          <p className="card-text">הגדר תזכורות לשיעורים יומיים ואתגרי הדרגה.</p>
        </article>
      </div>

      <div className="section-block">
        <div className="section-title">
          <div>
            <p className="eyebrow">חשבון</p>
            <h2>העדפות משתמש</h2>
          </div>
        </div>

        <div className="settings-grid">
          <article className="setting-card">
            <p className="eyebrow">אימייל</p>
            <strong>michal@example.com</strong>
          </article>
          <article className="setting-card">
            <p className="eyebrow">שפה</p>
            <strong>עברית</strong>
          </article>
          <article className="setting-card">
            <p className="eyebrow">נושא</p>
            <strong>חושך מודרני</strong>
          </article>
          <article className="setting-card">
            <p className="eyebrow">תמיכה</p>
            <strong>זמינה 24/7</strong>
          </article>
        </div>
      </div>
    </section>
  )
}

export default Settings
