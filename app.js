'use strict';
(function () {
  const RESULT_URL = 'https://biresh-result-lf2hgmmpxou.qoder.website';
  const SCHOOL = { bn: 'বীরেশ চন্দ্র উচ্চ বিদ্যালয়', en: 'BIRESH CHANDRA HIGH SCHOOL' };
  const SUB = { bn: 'সিলেট সিটি কর্পোরেশন পরিচালিত · স্থাপিত: ১৯৯৯ খ্রি.', en: '(Administered by Sylhet City Corporation) · Est. 1999' };
  const STATS = { students: 148, classes: 11, exams: 1, subjects: 12 };
  const EXAM = { bn: 'টেস্ট এক্সাম-২০২৬', en: 'Test Exam-2026' };
  const PAGES = ['home', 'about', 'notice', 'admission', 'contact'];
  const NAV = [['home', 'HOME'], ['about', 'ABOUT US'], ['notice', 'NOTICE'], ['result', 'RESULT'], ['admission', 'ADMISSION'], ['contact', 'CONTACT US']];
  const TITLES = {
    home: ['হোম', 'Home'], about: ['আমাদের সম্পর্কে', 'About Us'], notice: ['নোটিশ', 'Notice'],
    admission: ['ভর্তি তথ্য', 'Admission'], contact: ['যোগাযোগ', 'Contact Us']
  };

  if (window.top !== window.self) {
    try { window.top.location = window.self.location.href; } catch (e) { /* cross-origin frame */ }
    document.body.innerHTML = '<p class="framed"><a href="' + window.location.href.split('#')[0] + '" target="_top" rel="noopener">বীরেশ চন্দ্র উচ্চ বিদ্যালয় — ওয়েবসাইট খুলুন / Open website</a></p>';
    return;
  }

  const store = {
    get(k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
    set(k, v) { try { localStorage.setItem(k, v); } catch (e) { /* storage blocked */ } }
  };
  let LANG = store.get('webLang') === 'en' ? 'en' : 'bn';
  const theme = store.get('webTheme');
  if (theme === 'dark' || theme === 'light') document.documentElement.dataset.theme = theme;

  const T = (b, e) => (LANG === 'en' ? e : b);
  const N = n => (LANG === 'en' ? String(n) : String(n).replace(/\d/g, d => '০১২৩৪৫৬৭৮৯'[d]));
  const name = () => SCHOOL[LANG];
  const resBtn = (cls, label) => `<a class="btn ${cls}" href="${RESULT_URL}" target="_blank" rel="noopener noreferrer">${label}</a>`;
  const go = (pg, cls, label) => `<a class="btn ${cls}" href="#${pg}">${label}</a>`;

  function page(pg) {
    const S = name();
    if (pg === 'home') {
      const mq = [S, EXAM[LANG], T('অনলাইনে নিজের ফলাফল দেখুন', 'Check your result online'), T('শিক্ষাই জাতির মেরুদণ্ড', 'Education is the backbone of the nation'), T('সকল বিভাগের ফলাফল এক জায়গায়', 'Results of all groups in one place')];
      return `<div class="hero"><img class="himg" src="assets/school.jpg" alt=""><div class="hin">
        <span class="badge">🎓 ${T('স্বাগতম', 'Welcome')} — ${S}</span>
        <h2>${T('জ্ঞানের আলোয় গড়ি', 'Shaping the future with')}<br><em>${T('আগামীর প্রজন্ম', 'knowledge, values & vision')}</em></h2>
        <p>${T(`ঐতিহ্যবাহী <b>${S}</b>-এর ওয়েবসাইটে আপনাকে স্বাগতম। এখান থেকে শিক্ষার্থীরা তাদের পরীক্ষার ফলাফল এবং ভর্তি সংক্রান্ত তথ্য সহজেই দেখতে পারবেন।`, `Welcome to the website of the historic <b>${S}</b>. Students can easily view exam results and admission information here.`)}</p>
        <div class="hcta">${resBtn('gold', T('রেজাল্ট দেখুন →', 'Check Result →'))}${go('admission', 'ghost', T('ভর্তি তথ্য দেখুন', 'View Admission Info'))}</div>
      </div></div>
      <div class="stats">
        <div class="stat"><b>${N(STATS.students)}</b><span>${T('মোট শিক্ষার্থী', 'Total Students')}</span></div>
        <div class="stat"><b>${N(STATS.classes)}</b><span>${T('শ্রেণি', 'Classes')}</span></div>
        <div class="stat"><b>${N(STATS.exams)}</b><span>${T('পরীক্ষা', 'Exams')}</span></div>
        <div class="stat"><b>${N(STATS.subjects)}</b><span>${T('বিষয় (দশম শ্রেণি)', 'Subjects (Class 10)')}</span></div>
      </div>
      <div class="web-grid">
        <div class="web-box"><div class="ficon">📊</div><h4>${T('অনলাইন রেজাল্ট', 'Online Result')}</h4><p>${T('পরীক্ষা, শ্রেণি, শাখা ও রোল নং দিয়ে শিক্ষার্থী শুধু নিজের ফলাফল দেখতে ও প্রিন্ট করতে পারবে।', 'Students can view and print only their own result using exam, class, section and roll number.')}</p>${resBtn('', T('রেজাল্ট দেখুন →', 'Check Result →'))}</div>
        <div class="web-box"><div class="ficon">🎓</div><h4>${T('ভর্তি তথ্য', 'Admission Info')}</h4><p>${T('নতুন শিক্ষাবর্ষে শিশু শ্রেণি থেকে নবম শ্রেণি পর্যন্ত ভর্তি কার্যক্রম সম্পর্কে জানতে <b>ADMISSION</b> ট্যাব দেখুন।', 'See the <b>ADMISSION</b> tab to learn about admission from Nursery to Class 9 in the new academic year.')}</p>${go('admission', '', T('ভর্তি তথ্য দেখুন →', 'View Admission Info →'))}</div>
        <div class="web-box"><div class="ficon">📢</div><h4>${T('নোটিশ বোর্ড', 'Notice Board')}</h4><p>${T('বিদ্যালয়ের সব বিজ্ঞপ্তি, নির্দেশনা ও ঘোষণা এক জায়গায় দেখুন।', 'All school notices, instructions and announcements in one place.')}</p>${go('notice', '', T('নোটিশ দেখুন →', 'View Notices →'))}</div>
      </div>
      <div class="split"><div class="web-box"><h4>🏫 ${T('আমাদের সম্পর্কে', 'About Us')}</h4><p>${T(`<b>${S}</b> একটি স্বনামধন্য শিক্ষা প্রতিষ্ঠান (স্থাপিত: ১৯৯৯ খ্রি.)। প্রতিষ্ঠালগ্ন থেকেই বিদ্যালয়টি মানসম্মত শিক্ষা প্রদান, নৈতিক মূল্যবোধ গঠন এবং সহ-শিক্ষা কার্যক্রমে গুরুত্বপূর্ণ ভূমিকা রেখে চলেছে।`, `<b>${S}</b> is a renowned institution (established: 1999). Since its founding, the school has played an important role in quality education, moral development and co-curricular activities.`)}</p>${go('about', 'g', T('আরও জানুন →', 'Learn more →'))}</div><img src="assets/school.jpg" alt="${S}"></div>
      <div class="marquee"><span class="lbl">📌 ${T('নোটিশ', 'NOTICE')}</span><div class="mq"><div>${mq.concat(mq).map(s => `<span>${s}</span>`).join('')}</div></div></div>`;
    }
    if (pg === 'notice') return `<div class="web-sec"><h2>📢 ${T('নোটিশ বোর্ড (NOTICE)', 'Notice Board (NOTICE)')}</h2><p>${T(`<b>${S}</b>-এর সাধারণ বিজ্ঞপ্তি, গুরুত্বপূর্ণ নির্দেশনা ও অন্যান্য ঘোষণা এখানে প্রকাশ করা হবে।`, `General notices, important instructions and other announcements of <b>${S}</b> will be published here.`)}</p>
      <div class="web-grid"><div class="web-box"><div class="ficon">📊</div><h4>${T(`${EXAM.bn}-এর ফলাফল প্রকাশিত`, `${EXAM.en} result published`)}</h4><p>${T('দশম শ্রেণির শিক্ষার্থীরা পরীক্ষা, শ্রেণি, শাখা ও রোল নং দিয়ে অনলাইনে নিজের ফলাফল দেখতে পারবে।', 'Class 10 students can check their own result online with exam, class, section and roll number.')}</p>${resBtn('', T('রেজাল্ট দেখুন →', 'Check Result →'))}</div>
      <div class="web-box"><div class="ficon">📌</div><h4>${T('সাধারণ বিজ্ঞপ্তি', 'General Notices')}</h4><p>${T('বর্তমানে কোনো সাধারণ বিজ্ঞপ্তি প্রকাশ করা হয়নি।', 'No general notice has been published yet.')}</p></div></div></div>`;
    if (pg === 'about') return `<div class="web-sec"><h2>📖 ${T('আমাদের সম্পর্কে (ABOUT US)', 'About Us (ABOUT US)')}</h2><p>${T(`<b>${S}</b> একটি স্বনামধন্য শিক্ষা প্রতিষ্ঠান (স্থাপিত: ১৯৯৯ খ্রি.)। প্রতিষ্ঠালগ্ন থেকেই বিদ্যালয়টি মানসম্মত শিক্ষা প্রদান, নৈতিক মূল্যবোধ গঠন এবং সহ-শিক্ষা কার্যক্রমে গুরুত্বপূর্ণ ভূমিকা রেখে চলেছে।`, `<b>${S}</b> is a renowned educational institution (established: 1999). Since its founding, the school has played an important role in providing quality education, building moral values and co-curricular activities.`)}</p><img class="aboutimg" src="assets/school.jpg" alt="${S}"><div class="web-grid"><div class="web-box"><div class="ficon">🎯</div><h4>${T('আমাদের লক্ষ্য', 'Our Mission')}</h4><p>${T('আধুনিক ও বিজ্ঞানমনস্ক শিক্ষার মাধ্যমে শিক্ষার্থীদের সুনাগরিক হিসেবে গড়ে তোলা।', 'To develop students into good citizens through modern, science-oriented education.')}</p></div><div class="web-box"><div class="ficon">📚</div><h4>${T('একাডেমিক বিভাগসমূহ', 'Academic Groups')}</h4><p>${T('শিশু শ্রেণি থেকে দশম শ্রেণি পর্যন্ত (বিজ্ঞান, মানবিক ও ব্যবসায় শিক্ষা বিভাগসহ) পাঠদান কার্যক্রম পরিচালিত হয়।', 'Classes run from Nursery to Class 10, including Science, Humanities and Business Studies groups.')}</p></div></div></div>`;
    if (pg === 'admission') return `<div class="web-sec"><h2>📝 ${T('ভর্তি সংক্রান্ত তথ্য (ADMISSION)', 'Admission Information (ADMISSION)')}</h2><p>${T(`<b>${S}</b>-এ নতুন শিক্ষাবর্ষে ভর্তি ইচ্ছুক শিক্ষার্থীদের জন্য প্রয়োজনীয় তথ্য নিচে দেওয়া হলো:`, `Below is the necessary information for students seeking admission to <b>${S}</b> in the new academic year:`)}</p><div class="web-grid"><div class="web-box"><div class="ficon">📋</div><h4>${T('প্রয়োজনীয় কাগজপত্র', 'Required Documents')}</h4><ul><li>${T('শিক্ষার্থীর জন্ম নিবন্ধন সনদের ফটোকপি', 'Photocopy of the student’s birth registration certificate')}</li><li>${T('পিতা ও মাতার জাতীয় পরিচয়পত্রের (NID) ফটোকপি', 'Photocopy of parents’ National ID (NID)')}</li><li>${T('পূর্ববর্তী শ্রেণির ছাড়পত্র / প্রশংসাপত্র ও মার্কসিট', 'Previous class transfer certificate / testimonials and marksheet')}</li><li>${T('পাসপোর্ট সাইজের ২ কপি রঙিন ছবি', '2 passport-size colour photographs')}</li></ul></div><div class="web-box"><div class="ficon">📅</div><h4>${T('ভর্তি প্রক্রিয়া', 'Admission Process')}</h4><p>${T('বিদ্যালয় অফিস চলাকালীন সময়ে (সকাল ১০:০০ টা – বিকাল ৪:০০ টা) ভর্তি ফরম সংগ্রহ ও জমা দেওয়া যাবে।', 'Admission forms can be collected and submitted during school office hours (10:00 AM – 4:00 PM).')}</p></div></div></div>`;
    if (pg === 'contact') return `<div class="web-sec"><h2>📞 ${T('যোগাযোগ (CONTACT US)', 'Contact Us (CONTACT US)')}</h2><div class="web-grid"><div class="web-box"><div class="ficon">📍</div><h4>${T('বিদ্যালয়ের ঠিকানা', 'School Address')}</h4><p><b>${S}</b><br>${T('সিলেট সিটি কর্পোরেশন এলাকা, সিলেট।', 'Sylhet City Corporation area, Sylhet.')}</p></div><div class="web-box"><div class="ficon">🕒</div><h4>${T('অফিস সময়সূচি', 'Office Hours')}</h4><p>${T('রবিবার থেকে বৃহস্পতিবার: সকাল ১০:০০ টা – বিকাল ৪:০০ টা<br>শুক্রবার ও শনিবার: সাপ্তাহিক ছুটি', 'Sunday to Thursday: 10:00 AM – 4:00 PM<br>Friday & Saturday: Weekly holiday')}</p></div></div></div>`;
    return '';
  }

  function current() {
    const h = window.location.hash.replace('#', '');
    return PAGES.includes(h) ? h : 'home';
  }

  function render() {
    const pg = current();
    const S = name();
    document.documentElement.lang = LANG;
    document.title = T(TITLES[pg][0], TITLES[pg][1]) + ' | ' + S;
    document.getElementById('app').innerHTML =
      `<a class="skip" href="#main" data-a="skip">${T('মূল অংশে যান', 'Skip to content')}</a>
      <header class="top"><img src="assets/logo1.jpg" alt=""><div><h1>${S}</h1><small>${SUB[LANG]}</small></div><div class="tsp"></div>
      <button class="g" type="button" data-a="lang" title="${T('ভাষা বদলান', 'Switch language')}">🌐 ${LANG === 'en' ? 'বাংলা' : 'EN'}</button>
      <button class="g" type="button" data-a="theme" title="${T('থিম বদলান', 'Toggle theme')}" aria-label="${T('থিম বদলান', 'Toggle theme')}">🌓</button>
      <img src="assets/logo2.jpg" alt=""></header>
      <nav class="web-nav" aria-label="${T('মূল মেনু', 'Main menu')}">${NAV.map(([k, label], i) => (i ? '<span class="sep">|</span>' : '') +
        (k === 'result'
          ? `<a href="${RESULT_URL}" target="_blank" rel="noopener noreferrer">${label}</a>`
          : `<a href="#${k}" class="${pg === k ? 'on' : ''}"${pg === k ? ' aria-current="page"' : ''}>${label}</a>`)).join('')}</nav>
      <main class="wrap" id="main" tabindex="-1">${page(pg)}</main>
      <footer class="foot">© ${N(new Date().getFullYear())} ${S}<br>${T('অনলাইন ফলাফল', 'Online result')}: <a href="${RESULT_URL}" target="_blank" rel="noopener noreferrer">${RESULT_URL.replace('https://', '')}</a></footer>`;
  }

  document.addEventListener('click', e => {
    const b = e.target.closest('[data-a]');
    if (!b) return;
    if (b.dataset.a === 'skip') {
      e.preventDefault();
      document.getElementById('main').focus();
    } else if (b.dataset.a === 'lang') {
      LANG = LANG === 'en' ? 'bn' : 'en';
      store.set('webLang', LANG);
      render();
    } else if (b.dataset.a === 'theme') {
      const dark = document.documentElement.dataset.theme
        ? document.documentElement.dataset.theme === 'dark'
        : window.matchMedia('(prefers-color-scheme: dark)').matches;
      const next = dark ? 'light' : 'dark';
      document.documentElement.dataset.theme = next;
      store.set('webTheme', next);
    }
  });
  window.addEventListener('hashchange', () => {
    render();
    window.scrollTo(0, 0);
  });
  render();
})();
