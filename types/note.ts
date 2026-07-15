export interface Note {
    id: string
    title: string
    content: string
    category: {
        id: string
        name: string
    }
    createAt: string
}

export type Category = {
  id: string;
  name: string;
  description: string;
  createdAt: string;
  updatedAt: string;
};