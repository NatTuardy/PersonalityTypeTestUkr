
import { useHistory } from 'react-router-dom';
import { useCounter } from '../hooks/useCounter';
import './Test.css'

const Result = () => {
    const {counter} = useCounter()
    const history = useHistory();
    const getType = (letter)=> {
        const options = {
            typeLetter: letter,
        }
        history.replace('/type', options)
    }
    

    return ( <div className='wrapper'>
        <h1 className="title">Результат тесту</h1>
        <button className="double-border-button" onClick={()=>getType('d')} > D-dominance = {counter.d}</button>
        <button className="double-border-button" onClick={()=>getType('i')}> I-influence = {counter.i}</button>
        <button className="double-border-button"onClick={()=>getType('s')}> S-stability = {counter.s}</button>
        <button className="double-border-button"onClick={()=>getType('c')}> C-compliance = {counter.c}</button>
        </div> );
}
 
export default Result;