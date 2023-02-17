import React from 'react';
import s from './Patron.module.css';

export const PatronTwo = () => {
  return (
    <div className={s.wrapperDiv}>
      <div className={s.wrapper}>
        <div className={s.dog}>
          <div className={s.dogBody}>
            <div className={s.dogTail}>
              <div className={s.dogTail}>
                <div className={s.dogTail}>
                  <div className={s.dogTail}>
                    <div className={s.dogTail}>
                      <div className={s.dogTail}>
                        <div className={s.dogTail}>
                          <div className={s.dogTail}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={s.dogTorso}></div>
          <div className={s.dogHead}>
            <div className={s.dogEars}>
              <div className={s.dogEar}></div>
              <div className={s.dogEar}></div>
            </div>
            <div className={s.dogEyes}>
              <div className={s.dogEye}></div>
              <div className={s.dogEye}></div>
            </div>
            <div className={s.dogMuzzle}>
              <div className={s.dogTongue}></div>
            </div>
          </div>
        </div>

        <div className={s.ball}></div>
      </div>
    </div>
  );
};
