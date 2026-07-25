import { useMemo } from 'react'
import { getNoteName, playNote } from '../utils/audio'

type FretboardProps = {
  activeNote?: string
  highlight?: Record<string, string>
  onSelect: (note: string) => void
}

const stringNames = ['E', 'B', 'G', 'D', 'A', 'E']

export default function Fretboard({ activeNote, highlight = {}, onSelect }: FretboardProps) {
  const frets = useMemo(() => Array.from({ length: 25 }, (_, index) => index), [])

  const handleClick = (note: string) => {
    playNote(note)
    onSelect(note)
  }

  return (
    <div className="fretboard-shell">
      <div className="fretboard-header">
        <span />
        {frets.map((fret) => (
          <span key={fret} className="fret-label">
            {fret}
          </span>
        ))}
      </div>

      <div className="fretboard-board">
        {stringNames.map((stringName, stringIndex) => (
          <div key={stringName} className="fretboard-string">
            <div className="string-name">{stringName}</div>
            {frets.map((fret) => {
              const note = getNoteName(stringIndex, fret)
              const isActive = note === activeNote
              const noteType = highlight[note] || ''
              return (
                <button
                  key={`${stringName}-${fret}`}
                  type="button"
                  className={`fret-cell ${isActive ? 'active' : ''} ${noteType}`}
                  onClick={() => handleClick(note)}
                >
                  <span>{noteType ? noteType : ''}</span>
                </button>
              )
            })}
          </div>
        ))}
      </div>
    </div>
  )
}
