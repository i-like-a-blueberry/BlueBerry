import { collection, addDoc } from "@firebase/firestore";
import { db } from "../config/firebase";

export const addReceipt = async (devLang: string, byte: number) => {
  try {
    const docRef = await addDoc(collection(db, "receipt"), {
      devLang: devLang,
      byte: byte
    });
    console.log("Document written with ID:", docRef.id);
  } catch (e) {
    console.error("Error adding document:", e);
  }
}