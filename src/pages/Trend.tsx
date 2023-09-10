import { useState, useEffect } from 'react';
import { BodyContainer } from '../ui';
import { db } from '../config/firebase';
import { collection, getDocs } from '@firebase/firestore';
import Receipt from '../component/Receipt';
import TrendReceipt from "../component/TrendReceipt";




const Trend = () => {
  const [receipts, setReceipts] = useState<string[]>([]);

  useEffect(() => {
    const receiptsCollectionRef = collection(db, 'receipts')
    getDocs(receiptsCollectionRef).then((querySnapshot) => {
      setReceipts(
        querySnapshot.docs.foreach((doc) => {
          const data = doc.data();

          for (const filled in data) {
            if (filled in counts) {
              counts
            }
          }
        }
        )
      );
    });
  }, []);

  return (
    <BodyContainer>
      <TrendReceipt />
    </BodyContainer>
  )
}
export default Trend;
