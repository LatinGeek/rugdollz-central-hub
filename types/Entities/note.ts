export interface Note {
    id: string
    content: string
    userId: string
    createdAt: string
  }


  export const sampleNotes: Note[] = [ {
    id: '1',
    content: 'Purchase completed successfully',
    userId: '1',
    createdAt: '2024-03-15T10:30:00Z'
  },
  {
    id: '2',
    content: 'NFT transferred to buyer',
    userId: '1',
    createdAt: '2024-03-15T11:45:00Z'
  }]
