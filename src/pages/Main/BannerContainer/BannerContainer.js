import React, { useEffect, useState } from 'react';
import './BannerContainer.scss';
import { IoIosArrowBack } from 'react-icons/io';
import { IoIosArrowForward } from 'react-icons/io';
import { BANNER_INFO } from '../MainData';

export const BannerContainer = () => {
  const [index, setIndex] = useState(0);

  const addIndex = () => {
    index >= BANNER_INFO.length - 1 ? setIndex(0) : setIndex(index + 1);
  };

  const subIndex = () => {
    index <= 0 ? setIndex(BANNER_INFO.length - 1) : setIndex(index - 1);
  };

  const translateBanner = index => {
    return index * 100;
  };

  useEffect(() => {
    const bannerTimer = setInterval(() => {
      setIndex(index => {
        return index >= BANNER_INFO.length - 1 ? 0 : index + 1;
      });
    }, 5000);
    return () => {
      clearInterval(bannerTimer);
    };
  }, [index]);

  return (
    <div className="bannerBody">
      <div className="bannerContainer">
        {BANNER_INFO.map(function ({ id, bannerImg, bannerTitle, bannerText }) {
          return (
            <div
              key={id}
              className="mainBanner"
              style={{
                backgroundImage: `url(${bannerImg})`,
                transform: `translateX(-${translateBanner(index)}%)`,
              }}
            >
              <div className="alignText">
                <span className="bannerTitle">{bannerTitle}</span>
                <span className="bannerText">{bannerText}</span>
              </div>
            </div>
          );
        })}
      </div>
      <div className="alignBox">
        <IoIosArrowBack className="mainArrowIcon" onClick={subIndex} />
        <IoIosArrowForward className="mainArrowIcon" onClick={addIndex} />
      </div>
    </div>
  );
};
