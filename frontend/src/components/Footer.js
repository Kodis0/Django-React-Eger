import React from 'react';

export default function Footer() {
  return (
    <footer>
      <div className='footerwrapper'>
        <div className='mainrectangle'>
          <div className='logofooter'></div>
          <div className='ralewaytext'>
            <div className='footcolumn'>
              <div className='footang'>
                <p>Ангарск</p>
              </div>
              <div className='footangtext'>
                <p>
                  205-й Квартал, 6/1<br />
                  +8 (924) 536-33-28<br />
                  +8 (924) 536-33-10
                </p>
              </div>
            </div>
            <div className='footcolumn'>
              <div className='footdeliv'>
                <p>Доставка</p>
              </div>
              <div className='footdelnumb'>
                <p>+8 (924) 536-33-28</p>
              </div>
            </div>
            <div className='footcolumn'>
              <div className='footcollab'>
                <p>Сотрудничество</p>
              </div>
              <div className='footcollabmail'>
                <p>
                  У вас есть предложение для нас?<br />
                  eger.eger.eger.eger@mail.ru
                </p>
              </div>
            </div>
          </div>
          <div className='footdis'>
            <p>Разработка дизайна ANASTASIA FEDORKINA</p>
          </div>
          <div className='footver'>
            <p>Верстка сайта TIMUR EKIM</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
