import { useEffect, useMemo, useState } from 'react'
import SectionHeader from '../components/SectionHeader'
import MetricCard from '../components/MetricCard'
import ProgressRing from '../components/ProgressRing'
import Fretboard from '../components/Fretboard'
import { getNoteName, getRandomNote, playNote } from '../utils/audio'

const practiceTracks = [
  { title: 'אקורדי פתיחה', subtitle: '15 שיעורים • ביצוע חזק', progress: 82 },
  { title: 'סינגלים מתקדמים', subtitle: '10 שיעורים • מהירות וקצב', progress: 56 },
  { title: 'פרזנטציה קצבית', subtitle: '8 שיעורים • דינמיקה', progress: 71 },
]

const intervals = [
  { label: 'מינור 3', semitones: 3 },
  { label: 'מייג׳ור 3', semitones: 4 },
  { label: 'פרפקט 5', semitones: 7 },
]

function getHighlightMap(root: string, exercise: string) {
  const index = ['E2', 'F2', 'Fs2', 'G2', 'Gs2', 'A2', 'As2', 'B2', 'C3', 'Cs3', 'D3', 'Ds3', 'E3', 'F3', 'Fs3', 'G3', 'Gs3', 'A3', 'As3', 'B3', 'C4', 'Cs4', 'D4', 'Ds4', 'E4', 'F4', 'Fs4', 'G4', 'Gs4', 'A4', 'As4', 'B4', 'C5', 'Cs5', 'D5', 'Ds5', 'E5'].indexOf(root)
  const map: Record<string, string> = {}
  if (index < 0) return map

  const triad = [0, 4, 7]
  const intervalSteps = exercise === 'interval' ? [3, 4, 7] : []
  const chordSteps = exercise === 'triad' ? triad : []

  if (exercise === 'note') {
    map[root] = 'root'
  }
  if (exercise === 'interval') {
    map[root] = 'root'
    intervalSteps.forEach((step) => {
      const note = getNoteName(0, index + step - 24 >= 0 ? index + step - 24 : index + step)
      map[note] = 'interval'
    })
  }
  if (exercise === 'triad') {
    map[root] = 'root'
    chordSteps.forEach((step, idx) => {
      if (idx > 0) {
        const note = getNoteName(0, index + step - 24 >= 0 ? index + step - 24 : index + step)
        map[note] = 'chord'
      }
    })
  }
  return map
}

function Guitar() {
  const [selectedNote, setSelectedNote] = useState('E2')
  const [exercise, setExercise] = useState<'note' | 'interval' | 'triad'>('note')
  const [score, setScore] = useState(420)
  const [streak, setStreak] = useState(5)
  const [timeLeft, setTimeLeft] = useState(90)
  const [targetNote, setTargetNote] = useState(getRandomNote())
  const [message, setMessage] = useState('בחר תו כדי להציג את האימון')

  const highlight = useMemo(() => getHighlightMap(selectedNote, exercise), [selectedNote, exercise])

  useEffect(() => {
    const timer = window.setInterval(() => {
      setTimeLeft((current) => (current > 0 ? current - 1 : 0))
    }, 1000)
    return () => window.clearInterval(timer)
  }, [])

  const handleSelect = (note: string) => {
    playNote(note)
    setSelectedNote(note)
    setScore((prev) => prev + 3)
    setStreak((prev) => prev + 1)
    if (note === targetNote) {
      setMessage('נכון! המשך כך 🎸')
      setTargetNote(getRandomNote())
    } else {
      setMessage('נסה שוב, תתמקד ברעש ובגובה')
    }
  }

  const handlePlayTarget = () => {
    if (targetNote) playNote(targetNote)
  }

  return (
    <section className="page-layout guitar-page">
      <SectionHeader eyebrow="גיטרה" title="אימון גיטרה חכם" actionLabel="אתגר כשרון" actionLink="/ear-training" />

      <div className="dashboard-grid">
        <MetricCard label="ציון" value={`${score}`} description="נקודות אקטיביות" accent="purple" />
        <MetricCard label="סטreak" value={`${streak} ימים`} description="הרצף הנוכחי" accent="green" />
        <MetricCard label="שעון" value={`${timeLeft}s`} description="זמן לאימון" accent="teal" />
      </div>

      <article className="card feature-card">
        <div>
          <p className="eyebrow">תרגיל גיטרה</p>
          <h2>מצא תו, רווח או טריאדה בלוח</h2>
          <p className="card-text">
            בחרי שיטה והתחל לזהות תווים על גבי לוח ה-6 מיתרים. כל הקשה תשמע את הצליל.
          </p>
        </div>
        <div className="exercise-tools">
          <div className="exercise-target">
            <p className="eyebrow">תו יעד</p>
            <strong>{targetNote}</strong>
          </div>
          <button className="primary-button" type="button" onClick={handlePlayTarget}>
            נגן תו יעד
          </button>
        </div>
      </article>

      <article className="card feature-card">
        <div className="exercise-buttons">
          {(['note', 'interval', 'triad'] as const).map((type) => (
            <button
              key={type}
              type="button"
              className={`secondary-button ${exercise === type ? 'selected' : ''}`}
              onClick={() => setExercise(type)}
            >
              {type === 'note' ? 'מצא תו' : type === 'interval' ? 'מצא רווח' : 'מצא טריאדה'}
            </button>
          ))}
        </div>
        <p className="card-text">{message}</p>
      </article>

      <article className="fretboard-card card">
        <div className="fretboard-header-main">
          <div>
            <p className="eyebrow">לוח פרקט</p>
            <h3>6 מיתרי גיטרה, 24 פרטים נוחים לנגיעה</h3>
            <p className="card-text">הקש על כל תו כדי לשמוע אותו ולשפר את ההתקדמות שלך.</p>
          </div>
          <div className="fret-selection">
            <p>תו נבחר</p>
            <strong>{selectedNote}</strong>
          </div>
        </div>
        <Fretboard highlight={highlight} activeNote={selectedNote} onSelect={handleSelect} />
      </article>

      <div className="section-block">
        <div className="section-title">
          <div>
            <p className="eyebrow">תרגולים</p>
            <h2>תוצאות מהירות</h2>
          </div>
          <button className="text-button">פתח מאמן</button>
        </div>

        <div className="track-cards">
          {practiceTracks.map((track) => (
            <article key={track.title} className="lesson-card wide-card">
              <div>
                <h3>{track.title}</h3>
                <p>{track.subtitle}</p>
              </div>
              <div className="lesson-progress lesson-progress-wide">
                <span className="progress-dot active" style={{ width: `${track.progress}%` }} />
                <strong>{track.progress}%</strong>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="progress-grid">
        <ProgressRing label="דיוק" value={78} color="#8d6dff" />
        <ProgressRing label="קצב" value={82} color="#57c7ff" />
        <ProgressRing label="הבנה" value={90} color="#3bd192" />
      </div>
    </section>
  )
}

export default Guitar
