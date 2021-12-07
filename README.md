# Prism Studio

![image](https://user-images.githubusercontent.com/40906871/144601334-d84a102f-6679-4dd3-8586-ffce91f747b5.png)


## About the Project

### Purpose
- 자기 표현 욕구가 증가하고 있는 요즈음, 셀프 스튜디오 시장이 빠르게 성장하고 있다.
  - 전국 기준, 2018년 10개 -> 2021년 300개
- 셀프 스튜디오 정보 검색 과정의 Pain Point를 해소하고자 함.
  - 일반 사진 스튜디오 혼재, 가격 및 위치 종합 비교가 불편함.
- 서울시내 셀프스튜디오만을 추려서, 세부 정보 크롤링 후 DB에 저장
  - 주소, 연락처, 예약 가격, 좌표 등
- 정제된 정보를 지도 API를 통해 확인하고 비교할 수 있도록 함.

### Deploy
- Tool : Vercel
- https://prism-station.vercel.app/

### Built with

- Typescript
- Reactjs
- Firebase
- MaterialUI
- Naver Map API
- Channel talk

### Performance

- Google Analytics를 통해 사용자 지표 측정
- 여성커뮤니티 위주의 non-paid 홍보
- 첫 1주일 MVP test 결과, 방문자 약 1,800명 및 서비스 업체 연결 약 9,000회 
- 고객 건의 : 지역 확장 요청, 누락 업체 보완 요청 등 총 5건

## Detail

### App
- <GlobalStyles/> : 기본 css를 초기화하고, 태그별 초기 상태값 지정
- <MainController/> : firebase에 저장된 shop들을 모두 불러와 shopList 상태변수에 저장후 mode에 맞는 View 출력
  - mode : map(지도 api위에 마커 표시), list(리스트 형태로 shop 출력)
- channel talk : 서비스 이용자 응대를 위한 채널톡 모듈 삽입

### Map
- Naver Map API를 요청하여 100vh, 100vw로 배경 삽입
- 서울 지역이 한눈에 보이도록 zoom level 적절히 설정
- 불러온 shop들의 좌표들 각각에 대응되는 마커 설정
  - 마커 클릭시 shop의 세부 정보 표시(연락처, 가격, 주소 등)
  - 마커 클릭수 집계를 위해 firebase DB내 mapMarketCount 변수 increment event 추가

### List
- firebase DB에서 불러온 shop들을 list로 나열
- 리스트 각 항목은 material UI 라이브러리 사용하여 아코디언으로 표시
  - 접힘 상태에서는 별점, 상호명, 주소, 연결 링크 확인 가능
  - 펼침 상태에서는 그 외 가격, 연락처, 리뷰 수, 기준 인원 확인 가능
- 각 업체 공식 웹사이트, 예약 사이트로 연결되는 링크 버튼

### Filter
- 기준 가격, 네이버 평점 - slider 활용
  - slider 값은 상태변수로 저장. 
- 지역구 - check box 활용
  - check 클릭된 box는 아래와 같이 select
    - const query = 'input[name="local"]:checked';
- 적용 버튼 클릭시, 위 조건들에 해당하는 shop들을 filtering하여 filteredShop 배열에 저장

### Shop
  address : "서울특별시 서대문구 XX동 XXX"   
  basePeople : "2"   
  basePrice : "40000"    
  contact : "010-1234-5678"   
  grade : "4.96"   
  lat : "37.55674"    
  lng : "126.9366"  
  name : "셀프스튜디오 성동점"  
  reservationLink : "https://naver.me/xxxx"  
  reviewNum : "23"  
  website : "https://www.ootmode.com"  
