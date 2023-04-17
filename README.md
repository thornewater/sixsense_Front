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

1. mainBanner 자동 캐러셀 기능

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
시간을 걸어주었기 때문에 해당 페이지가 UnMount 될시 깨끗하게 처리하게 위해 clearUp 함수를 걸어줘 



## productListPage

## productDetailPage

## 장바구니

## 결제페이지





