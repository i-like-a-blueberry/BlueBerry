export const Day = () => {
    const d = new Date();
    const year = d.getFullYear();
    const month = d.getMonth() + 1;
    const day = d.getDate();
    const hour = d.getHours();
    const minutes = d.getMinutes();
    const nowDay: string = `${year}年${month}月${day}日  ${hour}時${minutes}分`
    return(
    <div>
        {nowDay}
    </div>
)}