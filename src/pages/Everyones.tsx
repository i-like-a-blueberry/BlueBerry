import { useState, useEffect } from 'react';
import { BodyContainer } from '../ui';
import { db } from '../config/firebase';
import { collection, getDocs } from '@firebase/firestore';
import Receipt from '../component/Receipt';

const Everyones = () => {
  const [receipts, setReceipts] = useState<string[]>([]);

  useEffect(() => {
    const receiptsCollectionRef = collection(db, 'receipts')
    getDocs(receiptsCollectionRef).then((querySnapshot) => {
      setReceipts(
      querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      );
    });
  }, []);
  return (
    <BodyContainer>
      <>
      {receipts.map((receipts) => (
        <Receipt langs={receipts} />
      ))}
      </>
    </BodyContainer>
  )
}

export default Everyones