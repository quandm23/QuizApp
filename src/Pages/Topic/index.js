import { useEffect, useState } from 'react';
import { getTopics } from '../../FetAPI/topicjson';
import {Link} from 'react-router-dom'
function Topic() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fet = async () => {
      const data = await getTopics();
      setData(data);
    }
    fet();
  }, [])
  return (
  <>
  {data && 
  (<div className='container'>
    <table>
    <tr>
      <th>ID</th>
      <th>Topics Name</th>
      <th>Action</th>
    </tr>
    {data.map(item => 
      (<tr key={item.id}>
        <td>{item.id}</td>
        <td>{item.name}</td>
        <td><button><Link to={"/quiz/"+item.id}>Làm Bài</Link></button></td>
      </tr>))}
  </table>
  </div>)}
  </>
  );
}
      export default Topic;