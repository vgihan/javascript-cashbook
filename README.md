# p1_cashbook_주간계획

웹풀스택 프로젝트#1 - 가계부

## Week 1

### 요약

메인 페이지 구성 및 데이터베이스 연동

### **진행**

Day 1. header layout 구성 및 pug 공부

- 서버에서 month_num과 month_str을 전달 받아 month_str을 header 중앙에 영어로 표시하고 year 값도 전달 받아 화면 중앙 아래에 표시한다.
- pug의 컴포넌트 분리와 상속에 대해 공부함.

Day 2. 메인 페이지 데이터 구조 설계 및 layout 구성

- 메인 페이지에 들어가는 input_bar, info_box, 내역 리스트 layout을 작성.
- 더미 데이터를 이용하여 내역 리스트 보여주는 것을 구현하면, 이후 데이터베이스와 연동했을 때 다시 처리해야 하는 일이 많이 발생하기 때문에 서버에서 클라이언트로 전달해주는 데이터의 형식을 먼저 설계한 후 진행함.

Day 3. 데이터베이스 연동 및 Create, Read 기능 구현

- input_bar form에서 데이터를 입력한 후 post method로 요청하면, 서버에서 응답하여 데이터베이스의 history table에 하나의 레코드로 저장함.
- 메인페이지 로딩 시 request parameter로 전달한 연, 월 정보와 일치하는 데이터를 내역 리스트로 만들어 보여줌.

Day 4. 수입 지출 필터링 처리 및 메인 페이지 이벤트 처리

- 헤더의 <,> 버튼을 이용한 날짜 변경 구현. 나머지 연산을 통해 12월이 넘어가면 다시 1월로 되돌아가고, 1월에서 왼쪽 버튼을 눌렀을 때와 12월에서 오른쪽 버튼을 눌렀을 때 year 값을 감소, 증가 시켜 요청하도록 구현함.
- css의 display: none 속성을 이용하여 월 별 수입과 지출 필터링을 구현함.

Day 5. +/- 토글 버튼 구현

- 수입인지 지출인지 판단하기 위해 sign을 name으로 가지는 input type=hidden을 만들어 서버에서 데이터베이스에 레코드를 추가할 때 price 값과 sign 값을 곱하여 음수인지 양수인지 판단하여 추가함.

Weekend. 프로젝트 구조 리팩토링

- 내역 리스트를 수정하는 기능을 구현하는 데 있어서 현재 프로젝트 구조가 올바르지 못하다고 판단하여 DB 컴포넌트 별로 controller, service 로직을 분리하는 리팩토링을 진행함.

### 남은 계획

1. 금액 -/+ 토글 버튼 구현
2. category 별 표시 색깔 다르게 구현
3. 결제수단 추가/삭제 구현
4. 내역 리스트 수정
5. 메인, 달력, 통계 아이콘 svg 파일로 수정

## Week 2

### 요약

달력, 통계 페이지 구현 및 메인 페이지 남은 기능 구현

### 진행

Day 6. 내역 리스트 수정 기능 및 결제수단 추가/삭제 기능 구현

- 내역 리스트 아이템 클릭 시 input_bar로 해당 내역을 옮김.
- 모달 박스 내에 form을 만들어 patch method를 이용하여 요청함.
- form 태그로 전송할 때, patch method 사용이 불가능했기 때문에, method override 방식을 사용함.
- 결제수단 추가/삭제 역시 모달 박스 내 form 태그를 사용하여 요청. 삭제 시 delete method를 override 하여 요청함. 

Day 7. 통계 페이지 layout 구성

- 통계 페이지의 원 그래프와 꺾은선 그래프에 올려줄 데이터 구조 설계
- 원 그래프 layout 구성
- 분류별 상세 내역 확인 기능 구현

Day 8. 달력 페이지 layout 구성

- 달력 페이지에 올려줄 데이터 구조 설계
- 달력 페이지 layout 구성
- canvas를 이용해 꺾은선 그래프 구현

Day 9. 완성도 높이기

- page navigator 색 변경 구현
- user input 유효성 검증
- 차트 애니메이션 삽입
- 드롭박스 및 모달 창 버블링 제어

## view - main page

![image](https://user-images.githubusercontent.com/49841765/131276981-60e48f3a-cc29-46d5-a2be-0f0b025dc8a4.png)

## view - calendar page

![image](https://user-images.githubusercontent.com/49841765/131276990-a9a7878d-6eae-4ff7-8ab9-a89abd9f54be.png)

## view - statistic page

![image](https://user-images.githubusercontent.com/49841765/131276999-c7615907-ee51-440f-9084-c880432799fe.png)

## DB Table Structure

![image](https://user-images.githubusercontent.com/49841765/131277004-fa35817a-8952-45bb-bdb4-9daacaad1186.png)