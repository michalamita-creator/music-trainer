import { useEffect, useState } from 'react'
import SectionHeader from '../components/SectionHeader'
import { getRandomNote, playNote } from '../utils/audio'

const noteOptions = ['E2', 'F2', 'G2', 'A2', 'B2', 'C3', 'D3', 'E3', 'F3', 'G3', 'A3', 'B3']

function EarTraining() {
  const [targetNote, setTargetNote] = useState(getRandomNote())
  const [selectedAnswer, setSelectedAnswer] = useState('')
  const [score, setScore] = useState(270)
  const [streak, setStreak] = useState(3)
  const [feedback, setFeedback] = useState('השמע תו ובחר את התשובה הנכונה.')

  useEffect(() => {
    setSelectedAnswer('')
    setFeedback('השמע תו ובחר את התשובה הנכונה.')
  }, [targetNote])

  const handleGuess = (note: string) => {
    setSelectedAnswer(note)
    if (note === targetNote) {
      setScore((prev) => prev + 15)
      setStreak((prev) => prev + 1)
      setFeedback('נכון! תו מדויק נסלח 🎧')
      setTimeout(() => setTargetNote(getRandomNote()), 800)
    } else {
      setScore((prev) => Math.max(prev - 5, 0))
      setStreak(0)
      setFeedback('לא נכון, נסה שוב. הקש על התו כדי לשמוע שוב.')
    }
  }

  const handlePlay = () => {
    playNote(targetNote)
  }

  return (
    <section className="page-layout ear-page">
      <SectionHeader eyebrow="אימון אוזן" title="למד להבדיל תווים במהירות" actionLabel="הפעל מבחן" actionLink="/" />

      <article className="card feature-card">
        <div>
          <p className="eyebrow">משימת היום</p>
          <h2>זיהוי תו שמיעתי</h2>
          <p className="card-text">הקש על הכפתור כדי לשמוע תו ונסה לבחור אותו מתוך הרשימה.</p>
        </div>
        <button className="primary-button" type="button" onClick={handlePlay}>
          השמע תו
        </button>
      </article>

      <div className="dashboard-grid">
        <div className="metric-card" style={{ borderColor: '#8d6dff' }}>
          <div>
            <p className="eyebrow">ציון</p>
            <strong>{score}</strong>
          </div>
          <span>שיפור שמיעה</span>
        </div>
        <div className="metric-card" style={{ borderColor: '#3bd192' }}>
          <div>
            <p className="eyebrow">סטreak</p>
            <strong>{streak}</strong>
          </div>
          <span>רצף תוצאות</span>
        </div>
      </div>

      <article className="card feedback-card">
        <p className="eyebrow">משוב</p>
        <h3>{feedback}</h3>
      </article>

      <section className="lesson-list answer-grid">
        {noteOptions.map((note) => (
          <button
            key={note}
            type="button"
            className={`answer-button ${selectedAnswer === note ? 'selected' : ''}`}
            onClick={() => handleGuess(note)}
          >
            {note}
          </button>
        ))}
      </section>
    </section>
  )
}

export default EarTraining
