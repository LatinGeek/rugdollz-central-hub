'use client'

import { NoteDetails } from '@/types/FormattedData/note-details'
import { SendHorizonal } from 'lucide-react'



interface NotesProps {
  notes: NoteDetails[]
  newNote: string
  onNoteChange: (note: string) => void
  onAddNote: () => void
}

export function Notes({ notes, newNote, onNoteChange, onAddNote }: NotesProps) {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium text-[rgb(var(--text-primary))]">Admin Notes</h3>
      
      {/* Add Note Form */}
      <div className="flex gap-4">
        <input
          type="text"
          value={newNote}
          onChange={(e) => onNoteChange(e.target.value)}
          placeholder="Add a note..."
          className="w-full sm:w-1/2 flex-1 sm:flex-none text-sm bg-[rgb(var(--bg-dark))] text-[rgb(var(--text-primary))] border border-[rgb(var(--border-dark))] rounded-lg px-3 py-2"
        />
        <button
          onClick={onAddNote}
          className="px-0 py-2 text-4xl bg-[rgb(var(--accent))] text-white rounded-lg hover:bg-[rgb(var(--accent-dark))]"
        >
          <SendHorizonal />
        </button>
      </div>

      {/* Notes List */}
      <div className="space-y-4">
        {notes.map(note => (
          <div
            key={note.note.id}
            className="p-4 bg-[rgb(var(--bg-darker))] rounded-lg"
          >
            <div className="flex justify-between items-start mb-2">
              <span className="text-sm font-medium text-[rgb(var(--text-primary))]">
                {note.user.username}
              </span>
              <span className="text-xs text-[rgb(var(--text-secondary))]">
                {new Date(note.note.createdAt).toLocaleString()}
              </span>
            </div>
            <p className="text-sm text-[rgb(var(--text-secondary))]">
              {note.note.content}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
} 