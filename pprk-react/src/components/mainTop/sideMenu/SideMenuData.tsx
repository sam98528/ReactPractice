import {
  Bone,
  Brain,
  Car,
  Laptop,
  Rocket,
  Shirt,
  Sofa,
  Tablet,
  Utensils,
  Videotape,
  Volleyball,
  WashingMachine,
} from "lucide-react";
import type { ReactNode } from "react";

interface SideMenuProps {
  name: string;
  details: SideMenuDetailProps[];
  tip: SideMenuTip[];
  component?: ReactNode;
}

interface SideMenuDetailProps {
  category: string;
  menu: [string, string][];
}

interface SideMenuTip {
  name: string;
  link: string;
}
const menus: SideMenuProps[] = [
  {
    name: "AI",
    details: [
      {
        category: "AI 도구",
        menu: [
          ["AI 챗봇", ""],
          ["AI 이미지 생성", ""],
          ["AI 음성 변환", ""],
          ["AI 번역 도구", ""],
          ["AI 코딩 어시스턴트", ""],
          ["AI 문서 작성", ""],
        ],
      },
      {
        category: "AI 하드웨어",
        menu: [
          ["AI 노트북", ""],
          ["AI 스마트폰", ""],
          ["AI 스피커", ""],
          ["AI 카메라", ""],
        ],
      },
    ],
    tip: [
      {
        name: "2025년 최고의 AI는 무엇인지 궁금하시나요, CursorAI가 개발자를 위한 최고의 선택인 이유",
        link: "/ai",
      },
      {
        name: "ChatGPT vs Claude vs Gemini, AI 챗봇 성능 비교 분석으로 알아보는 각각의 장단점",
        link: "/ai",
      },
      {
        name: "AI 이미지 생성 도구 Midjourney vs DALL-E vs Stable Diffusion 실제 사용 후기와 팁",
        link: "/ai",
      },
      {
        name: "AI 코딩 어시스턴트 GitHub Copilot vs Cursor vs CodeWhisperer 개발 생산성 비교 분석",
        link: "/ai",
      },
      {
        name: "AI 음성 변환 기술의 발전, 자연스러운 음성 합성과 번역 서비스 추천",
        link: "/ai",
      },
      {
        name: "AI 문서 작성 도구 Notion AI vs Grammarly vs QuillBot 업무 효율성 향상 방법",
        link: "/ai",
      },
      {
        name: "AI 노트북 구매 가이드, NPU 탑재 제품으로 더 빠른 AI 작업 환경 구축하기",
        link: "/ai",
      },
      {
        name: "AI 스마트폰 카메라 기술 분석, 구글 픽셀 vs 아이폰 vs 갤럭시 AI 성능 비교",
        link: "/ai",
      },
    ],
    component: <Brain size={22} strokeWidth={1} />,
  },
  {
    name: "가전 · TV",
    details: [
      {
        category: "TV/영상",
        menu: [
          ["TV", ""],
          ["프로젝터", ""],
          ["블루레이 플레이어", ""],
          ["TV 액세서리", ""],
        ],
      },
      {
        category: "주방가전",
        menu: [
          ["냉장고", ""],
          ["세탁기/건조기", ""],
          ["식기세척기", ""],
          ["인덕션", ""],
          ["전자레인지", ""],
          ["커피머신", ""],
        ],
      },
      {
        category: "생활가전",
        menu: [
          ["청소기", ""],
          ["에어컨", ""],
          ["공기청정기", ""],
          ["가습기", ""],
          ["선풍기", ""],
        ],
      },
    ],
    tip: [
      {
        name: "2025년 OLED vs QLED vs Mini LED, TV 구매 전 반드시 알아야 할 패널 기술 비교 분석",
        link: "/appliance",
      },
      {
        name: "스마트홈 시대의 필수품, IoT 가전제품으로 더 편리해지는 일상생활의 변화",
        link: "/appliance",
      },
      {
        name: "에너지 효율 1등급 가전제품으로 전기세 절약하는 방법과 추천 제품 리스트",
        link: "/appliance",
      },
      {
        name: "냉장고 구매 가이드, 도어인도어 vs 사이드바이사이드 vs 프렌치도어 선택법",
        link: "/appliance",
      },
      {
        name: "세탁기 건조기 일체형 vs 분리형, 공간 활용도와 세탁 효율성 비교 분석",
        link: "/appliance",
      },
      {
        name: "식기세척기 사용법과 관리 팁, 전기세 절약하면서 깨끗한 설거지 하기",
        link: "/appliance",
      },
      {
        name: "인덕션 vs 가스레인지, 요리 효율성과 안전성을 모두 만족하는 주방가전 선택",
        link: "/appliance",
      },
      {
        name: "커피머신 종류별 비교, 드립 vs 에스프레소 vs 캡슐 머신 선택 가이드",
        link: "/appliance",
      },
    ],
    component: <WashingMachine size={22} strokeWidth={1} />,
  },
  {
    name: "컴퓨터 · 노트북 · 조립PC",
    details: [
      {
        category: "노트북",
        menu: [
          ["게이밍 노트북", ""],
          ["업무용 노트북", ""],
          ["학생용 노트북", ""],
          ["맥북", ""],
        ],
      },
      {
        category: "데스크탑",
        menu: [
          ["조립PC", ""],
          ["브랜드PC", ""],
          ["미니PC", ""],
          ["워크스테이션", ""],
        ],
      },
      {
        category: "주변기기",
        menu: [
          ["모니터", ""],
          ["키보드", ""],
          ["마우스", ""],
          ["스피커", ""],
          ["웹캠", ""],
        ],
      },
    ],
    tip: [
      {
        name: "RTX 4090 vs RTX 4080 vs RTX 4070, 게이밍 그래픽카드 성능 비교와 가성비 분석",
        link: "/computer",
      },
      {
        name: "맥북 M3 vs M2 vs M1, 애플 실리콘 칩 성능 비교와 업무용 노트북 선택 가이드",
        link: "/computer",
      },
      {
        name: "조립PC 초보자를 위한 부품 선택 가이드, 예산별 추천 사양과 조립 팁",
        link: "/computer",
      },
      {
        name: "게이밍 노트북 vs 데스크탑, 휴대성과 성능을 모두 고려한 게이밍 PC 선택법",
        link: "/computer",
      },
      {
        name: "모니터 구매 가이드, 해상도와 주사율에 따른 게이밍 모니터 선택 팁",
        link: "/computer",
      },
      {
        name: "기계식 키보드 vs 멤브레인 키보드, 타이핑 감도와 소음 비교 분석",
        link: "/computer",
      },
      {
        name: "게이밍 마우스 선택 가이드, DPI와 센서 성능에 따른 추천 제품 리스트",
        link: "/computer",
      },
      {
        name: "워크스테이션 vs 일반 PC, 전문 작업을 위한 고성능 컴퓨터 구축 방법",
        link: "/computer",
      },
    ],
    component: <Laptop size={22} strokeWidth={1} />,
  },
  {
    name: "태블릿 · 모바일 · 디카",
    details: [
      {
        category: "태블릿",
        menu: [
          ["아이패드", ""],
          ["갤럭시탭", ""],
          ["안드로이드 태블릿", ""],
          ["태블릿 액세서리", ""],
        ],
      },
      {
        category: "스마트폰",
        menu: [
          ["아이폰", ""],
          ["갤럭시", ""],
          ["안드로이드폰", ""],
          ["폰 액세서리", ""],
        ],
      },
      {
        category: "카메라",
        menu: [
          ["DSLR", ""],
          ["미러리스", ""],
          ["액션캠", ""],
          ["카메라 액세서리", ""],
        ],
      },
    ],
    tip: [
      {
        name: "아이폰 15 Pro vs 갤럭시 S24 Ultra, 2025년 최고의 스마트폰 카메라 성능 비교 분석",
        link: "/mobile",
      },
      {
        name: "아이패드 Pro vs 갤럭시탭 S9 Ultra, 태블릿 구매 전 반드시 비교해야 할 기능들",
        link: "/mobile",
      },
      {
        name: "미러리스 vs DSLR, 초보자를 위한 카메라 선택 가이드와 추천 모델 리스트",
        link: "/mobile",
      },
      {
        name: "스마트폰 배터리 관리법, 수명 연장을 위한 충전 습관과 관리 팁",
        link: "/mobile",
      },
      {
        name: "액션캠 고프로 vs DJI vs 인스타360, 모험과 여행을 위한 최고의 액션캠 선택",
        link: "/mobile",
      },
      {
        name: "태블릿 액세서리 필수품, 키보드와 펜슬로 태블릿을 노트북처럼 활용하기",
        link: "/mobile",
      },
      {
        name: "스마트폰 카메라 활용 팁, 전문가 수준의 사진을 찍을 수 있는 기법들",
        link: "/mobile",
      },
      {
        name: "폰 액세서리 추천, 케이스와 보호필름으로 스마트폰 수명 연장하기",
        link: "/mobile",
      },
    ],
    component: <Tablet size={22} strokeWidth={1} />,
  },
  {
    name: "녹음기",
    details: [
      {
        category: "녹음장비",
        menu: [
          ["보이스레코더", ""],
          ["마이크", ""],
          ["오디오 인터페이스", ""],
          ["믹서", ""],
        ],
      },
      {
        category: "음향장비",
        menu: [
          ["헤드폰", ""],
          ["스피커", ""],
          ["앰프", ""],
          ["이퀄라이저", ""],
        ],
      },
    ],
    tip: [
      {
        name: "팟캐스트 제작을 위한 최고의 마이크 추천, USB vs XLR 마이크 선택 가이드",
        link: "/audio",
      },
      {
        name: "노이즈 캔슬링 헤드폰 vs 이어폰, 업무용 오디오 장비 선택 시 고려사항과 추천 제품",
        link: "/audio",
      },
      {
        name: "홈 레코딩 스튜디오 구축 가이드, 예산별 오디오 인터페이스와 마이크 조합 추천",
        link: "/audio",
      },
      {
        name: "보이스레코더 선택 가이드, 음질과 편의성을 모두 만족하는 녹음 장비 추천",
        link: "/audio",
      },
      {
        name: "믹서 사용법과 설정 팁, 초보자도 쉽게 따라할 수 있는 오디오 믹싱 기법",
        link: "/audio",
      },
      {
        name: "스피커 구매 가이드, 스튜디오 모니터 vs 홈 오디오 스피커 선택법",
        link: "/audio",
      },
      {
        name: "앰프와 이퀄라이저 설정법, 최적의 사운드를 위한 오디오 시스템 튜닝",
        link: "/audio",
      },
      {
        name: "오디오 인터페이스 연결법, 컴퓨터와 오디오 장비를 연결하는 방법과 팁",
        link: "/audio",
      },
    ],
    component: <Videotape size={22} strokeWidth={1} />,
  },
  {
    name: "스포츠 · 골프",
    details: [
      {
        category: "골프",
        menu: [
          ["골프클럽", ""],
          ["골프공", ""],
          ["골프백", ""],
          ["골프웨어", ""],
          ["골프용품", ""],
        ],
      },
      {
        category: "운동용품",
        menu: [
          ["운동복", ""],
          ["운동화", ""],
          ["헬스용품", ""],
          ["요가용품", ""],
        ],
      },
    ],
    tip: [
      {
        name: "골프 초보자를 위한 클럽 선택 가이드, 드라이버부터 퍼터까지 완벽한 세트 구성법",
        link: "/sports",
      },
      {
        name: "홈트레이닝 시대의 필수품, 홈짐 구축 가이드와 추천 운동용품 리스트",
        link: "/sports",
      },
      {
        name: "골프 스코어 단축을 위한 필수 골프용품과 연습 방법, 프로 골퍼들의 비밀 팁",
        link: "/sports",
      },
      {
        name: "골프공 선택 가이드, 거리와 스핀을 모두 만족하는 최고의 골프공 추천",
        link: "/sports",
      },
      {
        name: "골프웨어 선택법, 기능성과 스타일을 모두 만족하는 골프 의류 추천",
        link: "/sports",
      },
      {
        name: "운동화 구매 가이드, 러닝 vs 워킹 vs 크로스핏 운동화 선택법",
        link: "/sports",
      },
      {
        name: "헬스용품 추천, 홈트레이닝을 위한 필수 운동 도구와 장비 리스트",
        link: "/sports",
      },
      {
        name: "요가용품 선택 가이드, 요가매트와 블록으로 완성하는 홈 요가 환경",
        link: "/sports",
      },
    ],
    component: <Volleyball size={22} strokeWidth={1} />,
  },
  {
    name: "자동차 · 용품 · 공구",
    details: [
      {
        category: "자동차용품",
        menu: [
          ["자동차 액세서리", ""],
          ["네비게이션", ""],
          ["블랙박스", ""],
          ["카오디오", ""],
        ],
      },
      {
        category: "공구",
        menu: [
          ["수동공구", ""],
          ["전동공구", ""],
          ["측정기", ""],
          ["안전용품", ""],
        ],
      },
    ],
    tip: [
      {
        name: "전기차 시대의 필수품, 홈 충전기 설치 가이드와 추천 충전기 모델 비교 분석",
        link: "/car",
      },
      {
        name: "DIY 정비를 위한 필수 공구 세트, 초보자도 쉽게 사용할 수 있는 전동공구 추천",
        link: "/car",
      },
      {
        name: "블랙박스 선택 가이드, 야간 촬영과 충돌 감지 기능을 모두 만족하는 최고의 제품들",
        link: "/car",
      },
      {
        name: "네비게이션 vs 스마트폰 앱, 정확성과 편의성을 모두 만족하는 내비게이션 선택",
        link: "/car",
      },
      {
        name: "카오디오 업그레이드 가이드, 사운드 품질 향상을 위한 오디오 시스템 개선법",
        link: "/car",
      },
      {
        name: "자동차 액세서리 필수품, 안전과 편의를 모두 만족하는 차량용품 추천",
        link: "/car",
      },
      {
        name: "전동공구 vs 수동공구, 작업 효율성과 정밀도를 모두 고려한 공구 선택법",
        link: "/car",
      },
      {
        name: "측정기 사용법과 선택 가이드, 정확한 측정을 위한 필수 측정 도구 추천",
        link: "/car",
      },
    ],
    component: <Car size={22} strokeWidth={1} />,
  },
  {
    name: "가구 · 조명",
    details: [
      {
        category: "가구",
        menu: [
          ["침실가구", ""],
          ["거실가구", ""],
          ["주방가구", ""],
          ["서재가구", ""],
          ["아동가구", ""],
        ],
      },
      {
        category: "조명/침구",
        menu: [
          ["조명", ""],
          ["침구", ""],
          ["커튼", ""],
          ["러그", ""],
        ],
      },
    ],
    tip: [
      {
        name: "원룸 인테리어를 위한 공간 활용 가구 추천, 작은 공간도 넓어 보이는 가구 배치 팁",
        link: "/furniture",
      },
      {
        name: "LED 조명 vs 일반 조명, 에너지 효율과 분위기 연출을 모두 만족하는 조명 선택법",
        link: "/furniture",
      },
      {
        name: "침실 인테리어 완성도를 높이는 침구 선택 가이드, 계절별 이불과 베개 추천",
        link: "/furniture",
      },
      {
        name: "거실 가구 배치법, TV와 소파의 최적 거리와 공간 활용 팁",
        link: "/furniture",
      },
      {
        name: "주방가구 선택 가이드, 기능성과 디자인을 모두 만족하는 주방 인테리어",
        link: "/furniture",
      },
      {
        name: "서재가구 구성법, 업무 효율성을 높이는 책상과 의자 선택 가이드",
        link: "/furniture",
      },
      {
        name: "아동가구 안전성 체크 포인트, 아이를 위한 안전하고 실용적인 가구 선택법",
        link: "/furniture",
      },
      {
        name: "커튼과 러그 선택 가이드, 계절별 분위기 연출을 위한 텍스타일 활용법",
        link: "/furniture",
      },
    ],
    component: <Sofa size={22} strokeWidth={1} />,
  },
  {
    name: "식품 · 유아 · 완구",
    details: [
      {
        category: "식품",
        menu: [
          ["신선식품", ""],
          ["가공식품", ""],
          ["건강식품", ""],
          ["음료", ""],
        ],
      },
      {
        category: "유아용품",
        menu: [
          ["유아식품", ""],
          ["유아용품", ""],
          ["유아의류", ""],
          ["유아가구", ""],
        ],
      },
      {
        category: "완구",
        menu: [
          ["교육완구", ""],
          ["놀이완구", ""],
          ["퍼즐", ""],
          ["모형", ""],
        ],
      },
    ],
    tip: [
      {
        name: "유기농 식품 vs 일반 식품, 아이 건강을 위한 식품 선택 가이드와 추천 브랜드",
        link: "/food",
      },
      {
        name: "아이 발달에 좋은 교육용 완구 추천, 연령별 놀이용품 선택법과 안전성 체크 포인트",
        link: "/food",
      },
      {
        name: "홈베이킹 초보자를 위한 필수 재료와 도구, 건강한 간식 만들기 레시피 모음",
        link: "/food",
      },
      {
        name: "신선식품 보관법, 냉장고 정리와 식품 신선도 유지를 위한 관리 팁",
        link: "/food",
      },
      {
        name: "건강식품 선택 가이드, 영양소와 기능성을 모두 만족하는 건강기능식품 추천",
        link: "/food",
      },
      {
        name: "유아식품 만들기 레시피, 영양 균형을 맞춘 건강한 유아식 조리법",
        link: "/food",
      },
      {
        name: "교육용품 선택 가이드, 연령별 학습 도구와 교재로 아이 발달 촉진하기",
        link: "/food",
      },
      {
        name: "유아의류 선택법, 편안함과 안전성을 모두 만족하는 아이 옷 고르기 팁",
        link: "/food",
      },
    ],
    component: <Utensils size={22} strokeWidth={1} />,
  },
  {
    name: "패션 · 잡화 · 뷰티",
    details: [
      {
        category: "의류",
        menu: [
          ["남성의류", ""],
          ["여성의류", ""],
          ["아동의류", ""],
          ["언더웨어", ""],
        ],
      },
      {
        category: "신발/가방",
        menu: [
          ["신발", ""],
          ["가방", ""],
          ["지갑", ""],
          ["벨트", ""],
        ],
      },
      {
        category: "뷰티",
        menu: [
          ["화장품", ""],
          ["향수", ""],
          ["헤어케어", ""],
          ["스킨케어", ""],
        ],
      },
    ],
    tip: [
      {
        name: "2025년 봄/여름 패션 트렌드 분석, 올해의 핫 아이템과 코디 팁 완벽 가이드",
        link: "/fashion",
      },
      {
        name: "피부 타입별 스킨케어 루틴, 민감성 피부를 위한 화장품 선택법과 추천 제품",
        link: "/fashion",
      },
      {
        name: "지속가능한 패션의 중요성, 친환경 소재를 활용한 브랜드와 제품 추천 리스트",
        link: "/fashion",
      },
      {
        name: "남성의류 코디 가이드, 비즈니스 캐주얼부터 정장까지 완벽한 남성 패션",
        link: "/fashion",
      },
      {
        name: "여성의류 스타일링 팁, 체형별 코디와 트렌디한 패션 아이템 활용법",
        link: "/fashion",
      },
      {
        name: "신발 선택 가이드, 편안함과 스타일을 모두 만족하는 신발 고르기 팁",
        link: "/fashion",
      },
      {
        name: "가방 선택법, 용도별 가방 선택과 스타일링을 위한 가방 코디 팁",
        link: "/fashion",
      },
      {
        name: "향수 선택 가이드, 계절별 향수 선택법과 개인 맞춤 향수 찾기 팁",
        link: "/fashion",
      },
    ],
    component: <Shirt size={22} strokeWidth={1} />,
  },
  {
    name: "반려동물 · 취미 · 완구",
    details: [
      {
        category: "반려동물",
        menu: [
          ["강아지용품", ""],
          ["고양이용품", ""],
          ["반려동물식품", ""],
          ["반려동물의류", ""],
        ],
      },
      {
        category: "취미용품",
        menu: [
          ["게임", ""],
          ["퍼즐", ""],
          ["모형", ""],
          ["수집품", ""],
        ],
      },
    ],
    tip: [
      {
        name: "반려견 건강을 위한 최고의 사료 선택 가이드, 연령별 영양소와 브랜드 비교 분석",
        link: "/pet",
      },
      {
        name: "집에서 즐기는 보드게임 추천, 가족과 함께하는 재미있는 보드게임 TOP 10",
        link: "/pet",
      },
      {
        name: "반려묘 행동 이해하기, 고양이 심리와 함께 알아보는 고양이용품 선택 가이드",
        link: "/pet",
      },
      {
        name: "반려동물 의류 선택법, 계절별 반려동물 옷 고르기와 사이즈 측정 팁",
        link: "/pet",
      },
      {
        name: "퍼즐 선택 가이드, 난이도별 퍼즐 추천과 퍼즐 조립 팁",
        link: "/pet",
      },
      {
        name: "모형 조립 가이드, 초보자를 위한 모형 조립법과 추천 모형 리스트",
        link: "/pet",
      },
      {
        name: "수집품 관리법, 수집품 보관과 전시를 위한 관리 팁과 추천 도구",
        link: "/pet",
      },
      {
        name: "반려동물 건강관리, 정기 검진과 예방접종을 위한 반려동물 케어 가이드",
        link: "/pet",
      },
    ],
    component: <Bone size={22} strokeWidth={1} />,
  },
  {
    name: "식품 · 유아 · 완구",
    details: [
      {
        category: "식품",
        menu: [
          ["신선식품", ""],
          ["가공식품", ""],
          ["건강식품", ""],
          ["유아식품", ""],
        ],
      },
      {
        category: "유아용품",
        menu: [
          ["유아용품", ""],
          ["교육용품", ""],
          ["유아의류", ""],
          ["유아가구", ""],
        ],
      },
      {
        category: "완구",
        menu: [
          ["교육완구", ""],
          ["놀이완구", ""],
          ["퍼즐", ""],
          ["모형", ""],
        ],
      },
    ],
    tip: [
      {
        name: "아이 발달에 좋은 유기농 유아식품 추천, 알레르기 주의사항과 영양소 가이드",
        link: "/food",
      },
      {
        name: "홈스쿨링을 위한 교육용품 선택법, 연령별 학습 도구와 교재 추천 리스트",
        link: "/food",
      },
      {
        name: "아이 방 인테리어 완성도를 높이는 유아가구, 안전성과 실용성을 모두 만족하는 제품들",
        link: "/food",
      },
      {
        name: "유아 완구 안전성 체크, 연령별 안전한 완구 선택법과 관리 팁",
        link: "/food",
      },
      {
        name: "교육완구 활용법, 아이 발달을 촉진하는 교육용 완구 사용 팁",
        link: "/food",
      },
      {
        name: "놀이완구 정리법, 아이 방 정리를 위한 완구 보관 아이디어와 추천 제품",
        link: "/food",
      },
      {
        name: "퍼즐 교육 효과, 아이 두뇌 발달을 위한 퍼즐 놀이법과 난이도별 추천",
        link: "/food",
      },
      {
        name: "모형 조립 교육, 아이 창의력과 집중력 향상을 위한 모형 조립 가이드",
        link: "/food",
      },
    ],
    component: <Rocket size={22} strokeWidth={1} />,
  },
];

export default menus;
