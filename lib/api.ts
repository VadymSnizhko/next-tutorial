import axios from "axios"

import type {Note} from "@/types/note"

const API = axios.create({
    baseURL: "https://next-v1-notes-api.goit.study"
})

export type Category = {
  id: string;
  name: string;
  description: string;
  createdAt: string;
  updatedAt: string;
};

export async function getNotes(categoryId?: string): Promise<{notes: Note[]; total: number }> {
    //return new Promise(async (resolve, reject) => {
    //    try {
           const {data} = await API.get<{notes: Note[]; total: number}>("/notes",{
            params:{
                categoryId
            }
           } ) 
    //       resolve(data)
    //    }
    //    catch(error) {
    //       reject(error)
    //   }
    //}
    //)
    //const {data} = await API.get<{notes: Note[]; total: number}>("/notes")
    return data
}

export const getCategories = async () => {
  console.log("Start")
  const res = await API.get<Category[]>('/categories');

  console.log(res)
  return res.data;
};

export async function getNote(id: Note["id"]): Promise<Note> {
    const {data} = await API.get<Note>(`/notes/${id}`)
    return data
}