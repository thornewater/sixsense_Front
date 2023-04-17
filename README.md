### 44-6ixSense-FrontEnd

# Team 6ixSense -osulloc Clone coding
<br />
프로젝트 기간: 2023.04.03 ~ 2023.04.14

## FrontEnd

- <a href="https://github.com/Hyomins-013">신효민<img src="https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=GitHub&logoColor=white&link=https://github.com/hongyeollee"/></a>
- <a href="https://github.com/alchogh">조건호<img src="https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=GitHub&logoColor=white&link=https://github.com/hongyeollee"/></a>
- <a href="https://github.com/Hyoster">박효성<img src="https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=GitHub&logoColor=white&link=https://github.com/hongyeollee"/></a>


|                                             JavaScript                                             |                                                 React                                                 |                                                                              Sass                                                                               |                                                 esLint                                                 |                                                 Prettier                                                  |
| :------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------: |
| <img src="https://techstack-generator.vercel.app/js-icon.svg" alt="icon" width="65" height="65" /> | <img src="https://techstack-generator.vercel.app/react-icon.svg" alt="icon" width="65" height="65" /> | <div style="display: flex; align-items: flex-start;"><img src="https://techstack-generator.vercel.app/sass-icon.svg" alt="icon" width="65" height="65" /></div> | <img src="https://techstack-generator.vercel.app/eslint-icon.svg" alt="icon" width="65" height="65" /> |<div style="display: flex; align-items: flex-start;"><img src="https://techstack-generator.vercel.app/prettier-icon.svg" alt="icon" width="65" height="65" /></div> |




<br />



## BackEnd

- <a href="https://github.com/parkseyik">박세익 <img src="https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=GitHub&logoColor=white&link=https://github.com/minseoya"/></a>
- <a href="https://github.com/thornewater">김원종<img src="https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=GitHub&logoColor=white&link=https://github.com/lsg622"/></a>
- <a href="https://github.com/songsong95">송석준<img src="https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=GitHub&logoColor=white&link=https://github.com/Dongrang072"/></a>

<br />


|                                             JavaScript                                             |                                                Nodejs                                                 |                                                 MySql                                                 |                                                  Rest                                                   |
| :------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------: |
| <img src="https://techstack-generator.vercel.app/js-icon.svg" alt="icon" width="65" height="65" /> | <img src="https://techstack-generator.vercel.app/nginx-icon.svg" alt="icon" width="65" height="65" /> | <img src="https://techstack-generator.vercel.app/mysql-icon.svg" alt="icon" width="65" height="65" /> | <img src="https://techstack-generator.vercel.app/restapi-icon.svg" alt="icon" width="65" height="65" /> |

  
<br/>

# 오설록 -  클론 코딩 프로젝트



1. 회원가입, 로그인 (효성)
2. 메인페이지(효민)
3. productListPage  (건호)
4. productDetailPage (건호)
5. 장바구니(효민)
6. 결제페이지(건호)

<br/>
<br/>

## 회원가입, 로그인


## 메인페이지

메인 페이지에 들어간 기능 구현은 크게 3가지 이다. mainBanner 자동 캐러셀 기능, 추천 제품 리스트의 자동 캐러셀 기능, 추천 상품 타이머 기능 이렇게 3가지 이다.

**1. mainBanner 자동 캐러셀 기능**

![main_re_1](https://user-images.githubusercontent.com/125179082/232384601-edd0d152-ecce-43e9-bac6-7c7ed5c0835b.gif)


```
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
```

배너의 개수가 5개 이면 해당 setInterval() 함수는 배너의 길이 만큼 늘어나다가 끝에 도달하면 처음으로 돌아간다.
시간을 걸어주었기 때문에 해당 페이지가 UnMount 될시 깨끗하게 처리하게 위해 clearUp 함수를 걸어줘 계속해서 Timer가 돌아가지 않도록 하였다.

**2. recommendBanner 자동 캐러셀 기능**

![main_2](https://user-images.githubusercontent.com/125179082/232386628-e461e0c2-808d-4138-8c07-c64403a6f004.gif)

```
const swipeRecommend = 78;

const addIndex = () => {
  index >= lists.length - 3 ? setIndex(0) : setIndex(index + 1);
};

const subIndex = () => {
  index <= 0 ? setIndex(lists.length - 3) : setIndex(index - 1);
};

const translateRecommend = index => {
  return index * swipeRecommend;
};

//recommendTimer
useEffect(() => {
  const recommendTimer = setInterval(() => {
    addIndex();
  }, 4000);
  return () => {
    clearInterval(recommendTimer);
  };
}, [lists, index]);
```
추천 리스트의 캐러셀 기능구현은 다음과 같다. 대체로 mainBanner의 캐러셀과 크게 다를 것은 없다. 똑같이 정해놓은 숫자마다, 계산해 놓은 index값 만큼 해당 캐러셀의
translateX 좌표값을 -${index} 만큼 이동 시킨다.
하지만 이러한 코딩에는 문제점이 있는데, 만약 캐러셀이나 추천 제품 리스트가 늘어나거나 줄어들게 된다면, 또 다시 swipeRecommend의 값을 하드코딩해서 넣어줘야 할지도 모른다.

**3. todayRecommend Timer**

![main_3](https://user-images.githubusercontent.com/125179082/232389599-ae6449a5-6a5c-4ae4-90ff-13bef592dcf1.gif)
<img src="https://user-images.githubusercontent.com/125179082/232389599-ae6449a5-6a5c-4ae4-90ff-13bef592dcf1.gif" alt="타이머사진" width="500" height="350"/>

```
const currentTime = new Date();
const timeout = false;
const [leftHour, setLeftHour] = useState(24 - currentTime.getHours());
const [leftMinute, setLeftMinute] = useState(60 - currentTime.getMinutes());
const [leftSecond, setLeftSecond] = useState(60 - currentTime.getSeconds());

useEffect(() => {
  const leftTime = setInterval(() => {
    setLeftSecond(leftSecond => {
      if (leftSecond === 0) {
        setLeftMinute(leftMinute => {
          if (leftMinute === 0) {
            setLeftHour(leftHour => leftHour - 1);
            setLeftMinute(59);
          }
          return leftMinute - 1;
        });
        setLeftSecond(59);
      }
      return leftSecond - 1;
    });
  }, 1000);
  return () => clearInterval(leftTime);
}, [timeout]);
```
오설록의 페이지에서 가장 깊은 인상을 남겼었던 기능이다. 상대방에게 평소에 생각해 두었던 제품이 있었다면, 이 하루동안 적용되는 특가를 보고 구매결정을 쉽게 해주는 기능을 보고
이 기능 만큼은 꼭 구현해 보고 싶다고 생각했었다.

JavaScript에서 현재 날짜를 가져와주는 Date() 메서드를 활용하여 현재시간을 불러와주고, 내가 필요한 기능은 오늘 하루의 남은 시간이었기 때문에 남은 시간을 담을 수 있는 새로운 useState 변수를
선언해주었다.

setInterval() 함수가 들어간 만큼 또 useEffect()의 sideEffect로 발동되게끔 로직을 구현해 놓았다.
leftTime() 함수에 60초에서 0초가 되면 1분을 깎고 59초로 초기화하고, 59분에서 0분으로 줄어들면 1시간을 깎고 59분으로 초기화 시켜주었다.
setInterval()의 주기는 초마다 실행되어야 했기에 1000ms를 주었다.

타이머가 unMount가 되어도 돌아갈 것을 방지 하기 위해 clearUp 함수에는 leftTime()을 넣어 꼭 불필요한 타이머가 가동되지 않도록 막았다.

## productListPage

![listgif](https://user-images.githubusercontent.com/122069802/232394097-8538b0b4-edc6-4007-a2ae-3448a9fa1f1c.gif)


## productDetailPage

![detailgif](https://user-images.githubusercontent.com/122069802/232394137-25f25966-2e72-4a14-a81e-367cb30e3fab.gif)


## 장바구니

## 결제페이지

![결제gif](https://user-images.githubusercontent.com/122069802/232394160-aa78df36-abff-4ef3-b707-52ee44ec20fa.gif)

* 결제방식은 포인트로 하여 상품의 가격만큼 차감되는 형식으로 진행했습니다.
* 포인트를 서버에서 받아와 상품 총 가격이 보유 포인트보다 많을 시 결제가 안되게 구현하였습니다.
* 유저에게 결제창을 계속 노출시킴으로써 구매 욕구를 증대시키게 하였습니다.



