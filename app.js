const I18N = {
  ko: {
    hero_title: "일상을 편하게 만드는 실용적인 앱",
    hero_desc: "복잡함은 덜어내고 꼭 필요한 기능만 담은 안드로이드 유틸리티 앱을 만듭니다.",
    apps_title: "앱 목록",
    store_btn: "Google Play",
    privacy_link: "개인정보처리방침",
    footer_rights: "All rights reserved.",
    footer_contact: "문의:"
  },
  en: {
    hero_title: "Simple & Practical Utility Apps",
    hero_desc: "Lightweight Android utility apps focused on essential features without the clutter.",
    apps_title: "Apps",
    store_btn: "Google Play",
    privacy_link: "Privacy Policy",
    footer_rights: "All rights reserved.",
    footer_contact: "Contact:"
  }
};

const APPS = [
  {
    icon: "assets/icons/easyshift.png",
    screenshot: {
      ko: "assets/screenshots/easyshift_ko.png",
      en: "assets/screenshots/easyshift_en.png"
    },
    packageId: "com.muhons.easyshift",
    privacyUrl: "privacy_policy_easyshift.html",
    ko: {
      name: "쉬운 교대근무 (Easy Shift)",
      category: "생산성 / 일정",
      desc: "교대근무 패턴과 근무 일정을 캘린더에서 한눈에 확인하고 관리하는 앱입니다.",
      features: [
        "3조 2교대, 4조 3교대 등 다양한 근무 패턴 간편 설정",
        "근무 형태별 맞춤 알람 및 위젯/캘린더 확인",
        "커스텀 근무 유형 추가 및 일정 메모 지원"
      ]
    },
    en: {
      name: "Easy Shift",
      category: "Productivity",
      desc: "Manage and view your shift work patterns and schedules at a glance.",
      features: [
        "Easy setup for various shift rotation patterns",
        "Custom alarms per shift type and calendar overview",
        "Support for custom shift types and schedule notes"
      ]
    }
  },
  {
    icon: "assets/icons/easypedometer.png",
    screenshot: {
      ko: "assets/screenshots/easypedometer_ko.png",
      en: "assets/screenshots/easypedometer_en.png"
    },
    packageId: "com.muhons.easypedometer",
    privacyUrl: "privacy_policy_easypedometer.html",
    ko: {
      name: "만보기 (Easy Pedometer)",
      category: "건강 / 피트니스",
      desc: "매일의 걸음 수를 간편하게 측정하고 기록하는 만보기 앱입니다.",
      features: [
        "실시간 걸음 수 측정 및 일별 기록 확인",
        "배터리 소모를 최소화한 가벼운 백그라운드 동작",
        "목표 걸음 수 설정 및 달성 현황 표시"
      ]
    },
    en: {
      name: "Easy Pedometer",
      category: "Health & Fitness",
      desc: "A simple pedometer app to track and record your daily steps.",
      features: [
        "Real-time step counting and daily history",
        "Battery-friendly lightweight background tracking",
        "Daily step goal setting and progress view"
      ]
    }
  },
  {
    icon: "assets/icons/easyconverter.png",
    screenshot: {
      ko: "assets/screenshots/easyconverter_ko.png",
      en: "assets/screenshots/easyconverter_en.png"
    },
    packageId: "com.muhons.easyconverter",
    privacyUrl: "privacy_policy_easyconverter.html",
    ko: {
      name: "단위 변환 (Easy Converter)",
      category: "유틸리티",
      desc: "길이, 무게, 온도 등 다양한 단위를 빠르고 쉽게 변환합니다.",
      features: [
        "길이, 무게, 넓이, 부피, 온도 등 핵심 단위 지원",
        "입력과 동시에 실시간 변환 결과 제공",
        "직관적이고 깔끔한 화면 구성"
      ]
    },
    en: {
      name: "Easy Converter",
      category: "Utilities",
      desc: "Convert length, weight, temperature, and everyday units quickly.",
      features: [
        "Supports length, weight, area, volume, temperature, and more",
        "Instant conversion results as you type",
        "Clean and intuitive interface"
      ]
    }
  },
  {
    icon: "assets/icons/ledscroll.png",
    screenshot: {
      ko: "assets/screenshots/ledscroll_ko.png",
      en: "assets/screenshots/ledscroll_en.png"
    },
    packageId: "com.muhons.ledscroll",
    privacyUrl: "privacy_policy_ledscroll.html",
    ko: {
      name: "전광판 (LED Scroll)",
      category: "엔터테인먼트 / 도구",
      desc: "원하는 문구를 크게 띄워 보여주는 LED 전광판 앱입니다.",
      features: [
        "텍스트 크기, 색상, 배경색 자유 설정",
        "스크롤 속도 및 방향 조절 가능",
        "공연장, 응원, 안내 등 다양한 상황에서 활용"
      ]
    },
    en: {
      name: "LED Scroll",
      category: "Tools & Entertainment",
      desc: "Display custom scrolling LED text banners on your screen.",
      features: [
        "Customizable text size, text color, and background",
        "Adjustable scrolling speed and direction",
        "Great for concerts, cheering, and quick announcements"
      ]
    }
  },
  {
    icon: "assets/icons/smartlight.png",
    screenshot: {
      ko: "assets/screenshots/smartlight_ko.png",
      en: "assets/screenshots/smartlight_en.png"
    },
    packageId: "com.muhons.easylight",
    privacyUrl: "privacy_policy_smartlight.html",
    ko: {
      name: "손전등 (Smart Light)",
      category: "도구",
      desc: "어두운 곳에서 즉시 켜고 끌 수 있는 가볍고 빠른 손전등입니다.",
      features: [
        "원터치 즉시 점등 및 소등",
        "화면 밝기 조명 및 SOS 점멸 모드 지원",
        "불필요한 권한 없는 심플한 구성"
      ]
    },
    en: {
      name: "Smart Light",
      category: "Tools",
      desc: "A fast, lightweight flashlight app for instant illumination.",
      features: [
        "One-tap instant on/off flashlight",
        "Screen light mode and SOS blinking support",
        "Simple design with minimal permissions"
      ]
    }
  },
  {
    icon: "assets/icons/easymagnifier.png",
    screenshot: {
      ko: "assets/screenshots/easymagnifier_ko.png",
      en: "assets/screenshots/easymagnifier_en.png"
    },
    packageId: "com.muhons.easymagnifier",
    privacyUrl: "privacy_policy_easymagnifier.html",
    ko: {
      name: "돋보기 (Easy Magnifier)",
      category: "도구",
      desc: "작은 글씨나 사물을 크게 확대해서 볼 수 있는 돋보기 앱입니다.",
      features: [
        "부드러운 배율 확대/축소 조절",
        "어두운 환경에서도 볼 수 있는 플래시 연동",
        "화면 정지(프리즈) 기능으로 편하게 읽기"
      ]
    },
    en: {
      name: "Easy Magnifier",
      category: "Tools",
      desc: "Zoom in easily to read small text and inspect fine details.",
      features: [
        "Smooth zoom in and zoom out control",
        "Built-in flashlight toggle for low-light reading",
        "Freeze frame option to inspect details comfortably"
      ]
    }
  },
  {
    icon: "assets/icons/easycounter.png",
    screenshot: {
      ko: "assets/screenshots/easycounter_ko.png",
      en: "assets/screenshots/easycounter_en.png"
    },
    packageId: "com.muhons.easycounter",
    privacyUrl: "privacy_policy_easycounter.html",
    ko: {
      name: "카운터 (Easy Counter)",
      category: "기타",
      desc: "터치 한 번으로 숫자를 세고 관리할 수 있는 간편 카운터입니다.",
      features: [
        "큰 버튼으로 실수 없이 증가/감소 카운팅",
        "초기화 및 여러 항목 카운트 관리",
        "운동 횟수, 인원 체크, 재고 파악 등에 유용"
      ]
    },
    en: {
      name: "Easy Counter",
      category: "Others",
      desc: "A simple tap counter to keep track of numbers effortlessly.",
      features: [
        "Large tap area for accurate increment/decrement",
        "Easy reset and multiple counter support",
        "Useful for workouts, headcounts, and inventory"
      ]
    }
  },
  {
    icon: "assets/icons/easylevel.png",
    screenshot: {
      ko: "assets/screenshots/easylevel_ko.png",
      en: "assets/screenshots/easylevel_en.png"
    },
    packageId: "com.muhons.easylevel",
    privacyUrl: "privacy_policy_easylevel.html",
    ko: {
      name: "수평계 (Easy Level)",
      category: "기타",
      desc: "기울기와 수평을 직관적으로 확인할 수 있는 수평계 앱입니다.",
      features: [
        "가로·세로 수평 및 각도 실시간 표시",
        "직관적인 물방울(버블) UI",
        "가구 배치, 액자 걸기 등 생활 속 수평 측정"
      ]
    },
    en: {
      name: "Easy Level",
      category: "Others",
      desc: "An intuitive bubble level tool to check surface alignment and tilt.",
      features: [
        "Real-time horizontal and vertical angle display",
        "Intuitive bubble level indicator",
        "Handy for hanging frames and leveling furniture"
      ]
    }
  }
];

let currentLang = "ko";

function detectLanguage() {
  const saved = localStorage.getItem("muhons_lang");
  if (saved === "ko" || saved === "en") return saved;
  const langs = Array.isArray(navigator.languages) && navigator.languages.length
    ? navigator.languages
    : [navigator.language || navigator.userLanguage || "en"];
  return langs.some((l) => String(l).toLowerCase().startsWith("ko")) ? "ko" : "en";
}

function openModal(app) {
  const modal = document.getElementById("app-modal");
  const info = app[currentLang];
  const storeUrl = `https://play.google.com/store/apps/details?id=${app.packageId}`;

  document.getElementById("modal-icon").innerHTML = `<img src="${app.icon}" alt="${info.name}">`;
  document.getElementById("modal-title").textContent = info.name;
  document.getElementById("modal-category").textContent = info.category;
  document.getElementById("modal-desc").textContent = info.desc;
  document.getElementById("modal-store").href = storeUrl;
  document.getElementById("modal-privacy").href = app.privacyUrl;

  const featuresEl = document.getElementById("modal-features");
  featuresEl.innerHTML = info.features.map((f) => `<li>${f}</li>`).join("");

  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  const modal = document.getElementById("app-modal");
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

function renderApps(lang) {
  const grid = document.getElementById("app-grid");
  const t = I18N[lang];
  grid.innerHTML = APPS.map((app) => {
    const info = app[lang];
    const storeUrl = `https://play.google.com/store/apps/details?id=${app.packageId}`;
    const shotUrl = typeof app.screenshot === "string" ? app.screenshot : app.screenshot[lang];
    const featuresHtml = info.features.map((f) => `<li>${f}</li>`).join("");
    const privacyHtml = app.privacyUrl
      ? `<a class="link-privacy" href="${app.privacyUrl}">${t.privacy_link}</a>`
      : "";
    return `
      <article class="app-card">
        <div class="app-main">
          <div>
            <div class="app-head">
              <div class="app-icon" aria-hidden="true"><img src="${app.icon}" alt="${info.name}" loading="lazy"></div>
              <div>
                <h3 class="app-title">${info.name}</h3>
                <span class="app-category">${info.category}</span>
              </div>
            </div>
            <p class="app-desc" style="margin-top: 16px;">${info.desc}</p>
            <ul class="app-features">${featuresHtml}</ul>
          </div>
          <div class="app-actions">
            <a class="btn-store" href="${storeUrl}" target="_blank" rel="noopener noreferrer">
              <span>▶</span>
              <span>${t.store_btn}</span>
            </a>
            ${privacyHtml}
          </div>
        </div>
        <div class="app-shot">
          <img src="${shotUrl}" alt="${info.name} screenshot" loading="lazy">
        </div>
      </article>
    `;
  }).join("");
}

function applyLanguage(lang) {
  currentLang = lang;
  document.documentElement.lang = lang;
  const t = I18N[lang];

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (t[key]) el.textContent = t[key];
  });

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.getAttribute("data-lang") === lang);
  });

  renderApps(lang);
}

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("year").textContent = new Date().getFullYear();

  const initialLang = detectLanguage();
  applyLanguage(initialLang);

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const selected = btn.getAttribute("data-lang");
      localStorage.setItem("muhons_lang", selected);
      applyLanguage(selected);
    });
  });

  const modal = document.getElementById("app-modal");
  document.getElementById("modal-close").addEventListener("click", closeModal);
  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("open")) closeModal();
  });
});
