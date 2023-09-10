import { useState, useEffect } from 'react';
import { BodyContainer } from '../ui';
import { db } from '../config/firebase';
import { collection, getDocs, query } from '@firebase/firestore';
import Receipt from '../component/Receipt';
import { orderBy } from 'lodash';

const Everyones = () => {
  const [receipts, setReceipts] = useState<string[]>([]);

  useEffect(() => {
    const receiptsCollectionRef = collection(db, 'receipts')
    const q = query(receiptsCollectionRef, orderBy('HTML'))
    getDocs(receiptsCollectionRef).then((querySnapshot) => {
      setReceipts(
      querySnapshot.docs.map((doc) => ({ ...doc.data()}))
      );
    });
  }, []);
  const data = setReceipts;
  console.log(receipts.map)
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