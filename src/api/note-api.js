import axios from "axios"
const BASE_URL="http://localhost:3200/notes"

export class NoteAPI{

    static async create(note){
        return await axios.post(`${BASE_URL}`,note).data
    }
    static async fecthAll(){
        return await axios.get(`${BASE_URL}`).data
    }
    static async fetchId(noteId){
        return await axios.get(`${BASE_URL}/${noteId}`).data
    }
    static async delete(noteId){
        return await axios.get(`${BASE_URL}/${noteId}`).data
    }
    static async update(note){
        return await axios.patch(`${BASE_URL}/${note.id}`,note).data
    }
}