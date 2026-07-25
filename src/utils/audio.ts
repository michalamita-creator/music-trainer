const allNotes = [
  'E2', 'F2', 'Fs2', 'G2', 'Gs2', 'A2', 'As2', 'B2', 'C3', 'Cs3', 'D3', 'Ds3', 'E3',
  'F3', 'Fs3', 'G3', 'Gs3', 'A3', 'As3', 'B3', 'C4', 'Cs4', 'D4', 'Ds4', 'E4',
  'F4', 'Fs4', 'G4', 'Gs4', 'A4', 'As4', 'B4', 'C5', 'Cs5', 'D5', 'Ds5', 'E5',
]

const noteFrequencies: Record<string, number> = {
  E2: 82.41,
  F2: 87.31,
  Fs2: 92.5,
  G2: 98.0,
  Gs2: 103.83,
  A2: 110.0,
  As2: 116.54,
  B2: 123.47,
  C3: 130.81,
  Cs3: 138.59,
  D3: 146.83,
  Ds3: 155.56,
  E3: 164.81,
  F3: 174.61,
  Fs3: 185.0,
  G3: 196.0,
  Gs3: 207.65,
  A3: 220.0,
  As3: 233.08,
  B3: 246.94,
  C4: 261.63,
  Cs4: 277.18,
  D4: 293.66,
  Ds4: 311.13,
  E4: 329.63,
  F4: 349.23,
  Fs4: 369.99,
  G4: 392.0,
  Gs4: 415.3,
  A4: 440.0,
  As4: 466.16,
  B4: 493.88,
  C5: 523.25,
  Cs5: 554.37,
  D5: 587.33,
  Ds5: 622.25,
  E5: 659.25,
}

let audioContext: AudioContext | null = null

export function getAudioContext() {
  if (!audioContext) {
    audioContext = new (window.AudioContext || (window as any).webkitAudioContext)()
  }
  return audioContext
}

export function playNote(note: string, duration = 0.9) {
  const frequency = noteFrequencies[note]
  if (!frequency) return

  const context = getAudioContext()
  const oscillator = context.createOscillator()
  const gain = context.createGain()
  oscillator.frequency.value = frequency
  oscillator.type = 'sine'
  oscillator.connect(gain)
  gain.connect(context.destination)
  gain.gain.setValueAtTime(0, context.currentTime)
  gain.gain.linearRampToValueAtTime(0.16, context.currentTime + 0.02)
  oscillator.start()
  gain.gain.exponentialRampToValueAtTime(0.0001, context.currentTime + duration)
  oscillator.stop(context.currentTime + duration + 0.02)
}

export function playTone(frequency: number, duration = 0.8) {
  const context = getAudioContext()
  const oscillator = context.createOscillator()
  const gain = context.createGain()
  oscillator.frequency.value = frequency
  oscillator.type = 'triangle'
  oscillator.connect(gain)
  gain.connect(context.destination)
  gain.gain.setValueAtTime(0.18, context.currentTime)
  oscillator.start()
  oscillator.stop(context.currentTime + duration)
}

export function getNoteName(stringIndex: number, fret: number) {
  const stringOpenNotes = ['E2', 'A2', 'D3', 'G3', 'B3', 'E4']
  const stringRoot = stringOpenNotes[stringIndex]
  const openIndex = allNotes.indexOf(stringRoot)
  return allNotes[openIndex + fret] || 'E4'
}

export function getNotesForFretboard() {
  return allNotes.slice(0, 25)
}

export function getEarTrainingOptions() {
  return ['E2', 'F2', 'G2', 'A2', 'B2', 'C3', 'D3', 'E3', 'F3', 'G3', 'A3', 'B3']
}

export function getRandomNote() {
  return getEarTrainingOptions()[Math.floor(Math.random() * getEarTrainingOptions().length)]
}
