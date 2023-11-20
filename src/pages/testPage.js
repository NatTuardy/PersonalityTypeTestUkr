import React from 'react'
import Test from '../components/Test';
import './testPage.css';


function testPage() {
  return (
    <div className='wrapper'>
     <h1 className="title">Тест визначення особистості</h1>
     
     
     <h3 className="answer">Виберіть слово, яке, на Вашу думку, найбільш точно характеризує Вас:</h3>
     <div  className="buttonsWrap">
    <Test/>
    </div>
    </div>
  );
}

export default testPage;