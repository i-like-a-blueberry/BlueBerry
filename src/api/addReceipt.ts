import { collection, addDoc } from "@firebase/firestore";
import { db } from "../config/firebase";

export const addReceipt = async (languages: object, name: string) => {
  try {
    const docRef = await addDoc(collection(db, "receipts", name), {
      ...languages
    });
    console.log("Document written with ID:", name, docRef);
  } catch (e) {
    console.error("Error adding document:", e);
  }
}