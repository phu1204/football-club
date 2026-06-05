"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

export type Language = "vi" | "en";

interface TranslationDictionary {
  [key: string]: {
    vi: string;
    en: string;
  };
}

const dictionary: TranslationDictionary = {
  // Navbar
  "nav.home": { vi: "Trang chủ", en: "Home" },
  "nav.matches": { vi: "Trận đấu", en: "Matches" },
  "nav.news": { vi: "Tin tức", en: "News" },
  "nav.squad": { vi: "Đội hình", en: "Squad" },
  "nav.membership": { vi: "Thành viên", en: "Membership" },
  "nav.kits": { vi: "Áo đấu", en: "Kits" },
  "nav.register": { vi: "Đăng ký", en: "Register" },
  "nav.login": { vi: "Đăng nhập", en: "Login" },

  // Hero
  "hero.welcome": { vi: "Chào mừng đến với Simple FC", en: "Welcome to Simple FC" },
  "hero.title1": { vi: "Nơi Huyền Thoại", en: "Where Legends" },
  "hero.title2": { vi: "Được Tôi Luyện", en: "Are Forged" },
  "hero.description": {
    vi: "Trải nghiệm đam mê, hào quang và tinh thần bất khuất của môn thể thao vua. Hãy đồng hành cùng chúng tôi trên hành trình vươn tới vĩ đại.",
    en: "Experience the passion, the glory, and the unyielding spirit of the beautiful game. Join us on our journey to greatness."
  },
  "hero.cta.discover": { vi: "Khám Phá Thêm", en: "Discover More" },
  "hero.cta.matches": { vi: "Trận Đấu Mới Nhất", en: "Latest Matches" },

  // Match Center
  "match.center": { vi: "Trung Tâm Trận Đấu", en: "Match Center" },
  "match.upcoming": { vi: "Các Trận Đấu Sắp Tới", en: "Upcoming Matches" },
  "match.viewFull": { vi: "Xem Lịch Thi Đấu Đầy Đủ", en: "View Full Schedule" },
  "match.completed": { vi: "ĐÃ KẾT THÚC", en: "COMPLETED" },
  "match.location": { vi: "Địa điểm", en: "Location" },

  // Latest Headlines
  "news.title": { vi: "Tin Tức & Truyền Thông", en: "News & Media" },
  "news.headline": { vi: "Tin Nổi Bật Mới Nhất", en: "Latest Headlines" },
  "news.viewAll": { vi: "Xem Tất Cả Tin Tức", en: "View All News" },
  "news.tag.club": { vi: "Câu lạc bộ", en: "Club" },
  "news.tag.match": { vi: "Trận đấu", en: "Match" },
  "news.tag.transfer": { vi: "Chuyển nhượng", en: "Transfer" },
  "news.post1.title": {
    vi: "Al Hilal khai trương trường bóng đá quốc tế đầu tiên tại Riyadh",
    en: "Al Hilal Opens First International Football School in Riyadh"
  },
  "news.post2.title": {
    vi: "Al Ittihad củng cố ngôi đầu bảng sau chiến thắng quyết định trước Al Ahli",
    en: "Al Ittihad Extends Lead at the Top with Decisive Win Over Al Ahli"
  },
  "news.post3.title": {
    vi: "Đội tuyển U20 nữ quốc gia kết thúc đợt tập huấn tại Dammam",
    en: "The Saudi Women's U-20 NT Concludes Training Camp in Dammam"
  },

  // Match Highlights
  "highlights.title": { vi: "Video nổi bật", en: "Highlights" },
  "highlights.headline": { vi: "Video Nổi Bật Trận Đấu", en: "Match Highlights" },
  "highlights.viewAll": { vi: "Xem Tất Cả Video", en: "View All Highlights" },
  "highlights.subtitle": {
    vi: "Chiêm ngưỡng những bàn thắng ngoạn mục và khoảnh khắc lịch sử từ các trận đấu gần đây.",
    en: "Stunning goals and historic moments from our recent clashes."
  },
  "highlights.watchNow": { vi: "XEM NGAY", en: "WATCH NOW" },
  "highlights.playVideo": { vi: "PHÁT VIDEO", en: "PLAY VIDEO" },
  "highlights.item1.title": { vi: "Vòng 28: Simple FC vs Al Nassr", en: "Match Day 28: Simple FC vs Al Nassr" },
  "highlights.item1.desc": { vi: "Xem lại bàn thắng kịch tính phút cuối quyết định 3 điểm trọn vẹn.", en: "Re-live the dramatic last-minute goal that secured the three points." },
  "highlights.item2.title": { vi: "Ứng Cử Viên Bàn Thắng Đẹp Nhất Tháng", en: "Goal of the Month Contender" },
  "highlights.item3.title": { vi: "Hậu Trường Buổi Tập: Tuần 12", en: "Inside Training: Week 12" },

  // Lineup Section
  "line.center": { vi: "Chiến thuật & Đội hình", en: "Tactics & Lineup" },
  "line.upcoming": { vi: "Đội hình ra sân", en: "Starting Lineup" },
  "line.substitutes": { vi: "Cầu Thủ Dự Bị", en: "Substitutes" },

  // Squad Section
  "squad.title": { vi: "Đội hình thi đấu", en: "First Team" },
  "squad.headline": { vi: "Gặp Gỡ Đội Hình", en: "Meet the Squad" },
  "squad.viewAll": { vi: "Xem Tất Cả Cầu Thủ", en: "View All Players" },
  "squad.filter.all": { vi: "Tất cả vị trí", en: "All Positions" },
  "squad.filter.gk": { vi: "Thủ Môn", en: "Goalkeeper" },
  "squad.filter.df": { vi: "Hậu Vệ", en: "Defender" },
  "squad.filter.mf": { vi: "Tiền Vệ", en: "Midfielder" },
  "squad.filter.fw": { vi: "Tiền Đạo", en: "Forward" },
  "squad.filter.mgr": { vi: "Ban huấn luyện", en: "Management" },
  "squad.manager": { vi: "Huấn luyện viên trưởng", en: "Head Coach" },
  "squad.stats.app": { vi: "Trận đấu", en: "Matches" },
  "squad.stats.goals": { vi: "Bàn thắng", en: "Goals" },
  "squad.stats.assists": { vi: "Kiến tạo", en: "Assists" },
  "squad.stats.clean": { vi: "Sạch lưới", en: "Clean Sheets" },
  "squad.label.age": { vi: "Tuổi", en: "Age" },
  "squad.label.nationality": { vi: "Quốc tịch", en: "Nationality" },
  "squad.label.height": { vi: "Chiều cao", en: "Height" },
  "squad.label.weight": { vi: "Cân nặng", en: "Weight" },

  // Stats Section
  "stats.title": { vi: "Thống Kê Cá Nhân", en: "Player Statistics" },
  "stats.headline": { vi: "Bảng Vàng Thành Tích", en: "Season Leaders" },
  "stats.goals": { vi: "Bàn thắng", en: "Goals" },
  "stats.goals.title": { vi: "Vua Phá Lưới", en: "Top Scorers" },
  "stats.assists": { vi: "Kiến tạo", en: "Assists" },
  "stats.assists.title": { vi: "Vua Kiến Tạo", en: "Top Assists" },
  "stats.player": { vi: "Cầu thủ", en: "Player" },
  "stats.matches": { vi: "Trận đấu", en: "Matches" },

  // Partner / Sponsor Section
  "partner.title": { vi: "Nhà Tài Trợ", en: "Sponsors" },
  "partner.type.main": { vi: "Nhà Tài Trợ Kim Cương", en: "Diamond Sponsor" },
  "partner.type.governing": { vi: "Cơ Quan Quản Lý", en: "Governing Body" },
  "partner.name.dongphat": { vi: "Công ty Đông Phát", en: "Dong Phat Company" },

  //Testimonial
  "test.title": {vi: "Đối thủ nói gì", en: "Rivals Say"},
  "test.headline": { vi: "Đối Thủ Lên Tiếng", en: "Hear the Rivals"},

  // Team Kits
  "kits.badge": { vi: "Mẫu Áo Thi Đấu", en: "Official Kits" },
  "kits.title": { vi: "Mẫu Áo Thi Đấu Chính Thức", en: "Official Club Kits" },
  "kits.subtitle": {
    vi: "Khoác lên mình niềm tự hào Simple FC. Khám phá các mẫu áo thi đấu sân nhà, sân khách cao cấp và tùy chỉnh in tên số của riêng bạn.",
    en: "Wear Simple FC pride. Explore premium home, away, and third kits and custom print your own name and number."
  },
  "kits.flip": { vi: "Xoay Mặt Áo (Flip)", en: "Flip Jersey" },
  "kits.personalize": { vi: "Cá nhân hóa áo đấu của bạn (In Tên & Số)", en: "Personalize Your Jersey (Name & Number)" },
  "kits.label.name": { vi: "Nhập Tên (Tối đa 12 ký tự)", en: "Enter Name (Max 12 chars)" },
  "kits.label.number": { vi: "Nhập Số Áo (0 - 99)", en: "Enter Number (0 - 99)" },
  "kits.note": {
    vi: "Áo đấu sẽ tự động lật ra mặt sau khi bạn bắt đầu tùy chỉnh in ấn tên & số áo đấu.",
    en: "The jersey will automatically flip to the back once you start customizing name & number."
  },
  "kits.official": {
    vi: "Bộ trang phục chính thức đồng hành cùng các chiến binh Simple FC trên mọi đấu trường mùa giải này.",
    en: "Official kit accompanying Simple FC warriors across all competitions this season."
  },
  "kits.front": { vi: "MẶT TRƯỚC", en: "FRONT" },
  "kits.back": { vi: "MẶT SAU", en: "BACK" },

  // Boss of Club
  "boss.badge": { vi: "Lãnh Đạo Câu Lạc Bộ", en: "Club Leadership" },
  "boss.title": { vi: "Người Kiến Tạo Tầm Nhìn", en: "The Visionary Behind" },
  "boss.quote": {
    vi: "\"Simple FC được xây dựng trên ba cột trụ: Sự thuần khiết, tính gắn kết cộng đồng và tinh thần cống hiến hết mình. Mục tiêu của chúng tôi không chỉ là giành chiến thắng trên sân cỏ, mà còn là truyền cảm hứng cho thế hệ tương lai thông qua những giá trị cao đẹp của thể thao.\"",
    en: "\"Simple FC is built on three pillars: Purity, community integration, and absolute dedication. Our goal is not only to win on the pitch, but to inspire future generations through the beautiful values of sport.\""
  },
  "boss.role": { vi: "Chủ Tịch Điều Hành & Nhà Sáng Lập", en: "Executive Chairman & Founder" },

  // About Simple FC
  "about.badge": { vi: "THÀNH LẬP 2024", en: "EST. 2024" },
  "about.title1": { vi: "Di Sản Của", en: "The Legacy of" },
  "about.title2": { vi: "Simple FC", en: "Simple FC" },
  "about.p1": {
    vi: "Simple FC không chỉ là một câu lạc bộ bóng đá. Đó là biểu tượng của sự xuất sắc, một cộng đồng của những cổ động viên nhiệt huyết và là minh chứng cho vẻ đẹp của môn thể thao vua. Được thành lập với tầm nhìn tái định nghĩa bóng đá hiện đại, chúng tôi luôn nỗ lực vươn tới sự vĩ đại cả trên sân cỏ lẫn ngoài đời thực.",
    en: "Simple FC is more than a football club. It is a symbol of excellence, a community of passionate supporters, and a testament to the beautiful game. Founded with a vision to redefine modern football, we strive for greatness on and off the pitch."
  },
  "about.p2": {
    vi: "Cơ sở vật chất hiện đại và các chương trình đào tạo đẳng cấp thế giới của chúng tôi đảm bảo rằng các cầu thủ luôn đạt phong độ đỉnh cao nhất. Hãy tham gia cùng chúng tôi trên hành trình phi thường này.",
    en: "Our state-of-the-art facilities and world-class training programs ensure that our players are always at the peak of their performance. Join us on this incredible journey."
  },
  "about.cta": { vi: "KHÁM PHÁ LỊCH SỬ CỦA CHÚNG TÔI", en: "DISCOVER OUR HISTORY" },
  "about.arena": { vi: "Ao cá Arena", en: "The Ao Cá Arena" },
  "about.capacity": { vi: "Sức chứa: 100", en: "Capacity: 100" },

  // Footer
  "footer.desc": {
    vi: "Nền tảng kỹ thuật số chính thức của Câu lạc bộ Bóng đá Simple. Luôn kết nối với câu lạc bộ yêu thích của bạn, theo dõi các trận đấu trong nước và quốc tế, và trải nghiệm bóng đá chưa từng có.",
    en: "The official digital platform of Simple Football Club. Stay connected with your favorite club, follow national and local matches, and experience football like never before."
  },
  "footer.col2.title": { vi: "Liên Kết Nhanh", en: "Quick Links" },
  "footer.fixtures": { vi: "Lịch Thi Đấu & Kết Quả", en: "Fixtures & Results" },
  "footer.clubs": { vi: "Câu Lạc Bộ", en: "Clubs" },
  "footer.competitions": { vi: "Giải Đấu", en: "Competitions" },
  "footer.news": { vi: "Tin Tức", en: "News" },
  "footer.col3.title": { vi: "Pháp Lý", en: "Legal" },
  "footer.privacy": { vi: "Chính Sách Bảo Mật", en: "Privacy Policy" },
  "footer.terms": { vi: "Điều Khoản Sử Dụng", en: "Terms of Use" },
  "footer.cookies": { vi: "Cài Đặt Cookie", en: "Cookie Settings" },
  "footer.contact": { vi: "Liên Hệ Chúng Tôi", en: "Contact Us" },
  "footer.sponsorship": { vi: "Tài Trợ", en: "Sponsorship" },
  "footer.col4.title": { vi: "Theo Dõi Chúng Tôi", en: "Follow Us" },
  "footer.copyright": {
    vi: "© 2024 Câu lạc bộ Bóng đá Simple. Bảo lưu mọi quyền.",
    en: "© 2024 Simple Football Club. All rights reserved."
  }
};

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en");

  useEffect(() => {
    const savedLang = localStorage.getItem("simplefc_lang") as Language;
    if (savedLang === "vi" || savedLang === "en") {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setLanguageState(savedLang);
    } else {
      setLanguageState("en");
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("simplefc_lang", lang);
  };

  const toggleLanguage = () => {
    const newLang = language === "vi" ? "en" : "vi";
    setLanguage(newLang);
  };

  const t = (key: string): string => {
    if (!dictionary[key]) {
      console.warn(`Translation key not found: ${key}`);
      return key;
    }
    return dictionary[key][language];
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
