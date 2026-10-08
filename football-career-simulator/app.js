// 축구선수 커리어 시뮬레이터 - 메인 UI 컨트롤러 (app.js)

document.addEventListener("DOMContentLoaded", () => {
  const sim = new CareerSimulator();

  // DOM Elements
  const stepIdentity = document.getElementById("stepIdentity");
  const stepAcademy = document.getElementById("stepAcademy");
  const stepPlaying = document.getElementById("stepPlaying");
  const stepRetirement = document.getElementById("stepRetirement");

  const identityForm = document.getElementById("identityForm");
  const playerNationSelect = document.getElementById("playerNation");
  const academyOffersGrid = document.getElementById("academyOffersGrid");

  // HUD Elements
  const hudPos = document.getElementById("hudPos");
  const hudNumber = document.getElementById("hudNumber");
  const hudFlag = document.getElementById("hudFlag");
  const hudName = document.getElementById("hudName");
  const hudNation = document.getElementById("hudNation");
  const hudTeamColor = document.getElementById("hudTeamColor");
  const hudTeam = document.getElementById("hudTeam");
  const hudLeague = document.getElementById("hudLeague");
  const hudRole = document.getElementById("hudRole");
  const hudAge = document.getElementById("hudAge");
  const hudYear = document.getElementById("hudYear");
  const hudOvr = document.getElementById("hudOvr");
  const hudValue = document.getElementById("hudValue");
  const hudStats = document.getElementById("hudStats");

  // Event & Recap Elements
  const eventTitle = document.getElementById("eventTitle");
  const eventDesc = document.getElementById("eventDesc");
  const eventOptionsContainer = document.getElementById("eventOptionsContainer");

  const lastSeasonEmpty = document.getElementById("lastSeasonEmpty");
  const lastSeasonContent = document.getElementById("lastSeasonContent");
  const lastSeasonTag = document.getElementById("lastSeasonTag");
  const lastEventMsg = document.getElementById("lastEventMsg");
  const recapApps = document.getElementById("recapApps");
  const recapGoals = document.getElementById("recapGoals");
  const recapAssists = document.getElementById("recapAssists");
  const recapRating = document.getElementById("recapRating");
  const recapTrophiesArea = document.getElementById("recapTrophiesArea");
  const recapNationalArea = document.getElementById("recapNationalArea");
  const recapGrowth = document.getElementById("recapGrowth");

  const careerTotalsSummary = document.getElementById("careerTotalsSummary");
  const careerTableBody = document.getElementById("careerTableBody");

  // Modals & Header
  const transferModal = document.getElementById("transferModal");
  const transferOffersList = document.getElementById("transferOffersList");
  const btnStayClub = document.getElementById("btnStayClub");
  const btnEarlyRetire = document.getElementById("btnEarlyRetire");

  const btnAchievements = document.getElementById("btnAchievements");
  const achievementsCount = document.getElementById("achievementsCount");
  const achievementsModal = document.getElementById("achievementsModal");
  const btnCloseAchModal = document.getElementById("btnCloseAchModal");
  const achievementsModalList = document.getElementById("achievementsModalList");

  const btnRestartHeader = document.getElementById("btnRestartHeader");
  const btnPlayAgain = document.getElementById("btnPlayAgain");
  const btnCopyResult = document.getElementById("btnCopyResult");

  // Retirement Screen Elements
  const hofRankTitle = document.getElementById("hofRankTitle");
  const hofTierBadge = document.getElementById("hofTierBadge");
  const hofDesc = document.getElementById("hofDesc");
  const hofScore = document.getElementById("hofScore");
  const hofTotalApps = document.getElementById("hofTotalApps");
  const hofTotalGA = document.getElementById("hofTotalGA");
  const hofTotalTrophies = document.getElementById("hofTotalTrophies");
  const hofTrophyList = document.getElementById("hofTrophyList");
  const hofClubJourney = document.getElementById("hofClubJourney");
  const hofAchCount = document.getElementById("hofAchCount");
  const hofAchList = document.getElementById("hofAchList");

  // 1. 국적 선택 드롭다운 채우기
  function populateCountries() {
    playerNationSelect.innerHTML = "";
    COUNTRIES_DATA.forEach(country => {
      const opt = document.createElement("option");
      opt.value = country.fifa_code;
      opt.textContent = `${country.flag_url ? "🚩 " : ""}${country.name} (${country.fifa_code})`;
      if (country.fifa_code === "KOR") opt.selected = true;
      playerNationSelect.appendChild(opt);
    });
  }
  populateCountries();

  // 이름 프리셋 헬퍼 전역 등록
  window.setNamePreset = function(name) {
    document.getElementById("playerName").value = name;
  };

  // 2. 선수 생성 폼 제출
  identityForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("playerName").value.trim() || "김유망";
    const number = parseInt(document.getElementById("playerNumber").value, 10) || 10;
    const foot = document.getElementById("playerFoot").value;
    const position = document.querySelector('input[name="position"]:checked').value;
    const nationalityFifa = playerNationSelect.value;
    const mode = document.querySelector('input[name="gameMode"]:checked').value;

    sim.createPlayer({
      name,
      number,
      preferredFoot: foot,
      position,
      nationalityFifa,
      mode
    });

    // 아카데미 오퍼 화면으로 전환
    stepIdentity.style.display = "none";
    stepAcademy.style.display = "block";
    btnRestartHeader.style.display = "inline-flex";

    renderAcademyOffers();
  });

  // FIFA 공식 1~5성 별점 렌더러 (1성~5성 한도 준수)
  function getFifaStarBadge(team) {
    const rating = team.star_rating !== undefined ? team.star_rating : (team.domestic_reputation || 2.5);
    const clamped = Math.min(5.0, Math.max(1.0, rating));
    const fullStars = Math.floor(clamped);
    const hasHalf = (clamped % 1) >= 0.5;
    const starsStr = "★".repeat(fullStars) + (hasHalf ? "½" : "");
    return `${starsStr} (${clamped.toFixed(1)}성)`;
  }

  // 3. 아카데미 입단 제안 렌더링
  function renderAcademyOffers() {
    const offers = sim.getYouthAcademyOffers();
    academyOffersGrid.innerHTML = "";

    offers.forEach(team => {
      const card = document.createElement("div");
      card.className = "team-card";
      
      const repStars = getFifaStarBadge(team);
      const teamLogo = team.logo_url || "https://media.copero.com.ar/logos/football/teams/generic.svg";

      card.innerHTML = `
        <div>
          <div class="team-logo-area">
            <img src="${teamLogo}" alt="${team.name}" class="team-logo-img" onerror="this.src='https://placehold.co/60x60/1e293b/ffffff?text=FC'">
          </div>
          <div class="team-name">${team.name_ko || team.name}</div>
          <div class="team-league">${team.leagueName || '프로 리그'}</div>
          <div class="team-rep-row">명성: ${repStars}</div>
        </div>
        <button class="btn btn-primary btn-block btn-sign" data-id="${team.id}">
          ✍️ 입단 계약 체결
        </button>
      `;

      card.querySelector(".btn-sign").addEventListener("click", () => {
        sim.signWithClub(team);
        startCareerSimulationUI();
      });

      academyOffersGrid.appendChild(card);
    });
  }

  // 4. 메인 플레이 화면 진입
  function startCareerSimulationUI() {
    stepAcademy.style.display = "none";
    stepPlaying.style.display = "block";
    updateHUD();
    renderCurrentEvent();
    showToast(`축하합니다! ${sim.currentTeam.name_ko || sim.currentTeam.name}에 정식 입단했습니다!`, "success");
  }

  // 5. 상단 HUD 업데이트
  function updateHUD() {
    const p = sim.player;
    hudPos.textContent = p.position;
    hudNumber.textContent = `#${p.number}`;
    hudFlag.textContent = getCountryEmoji(p.nationality.fifa_code);
    hudName.textContent = p.name;
    hudNation.textContent = p.nationality.name;
    hudTeamColor.style.backgroundColor = sim.currentTeam.primary_color || "#10b981";
    hudTeam.textContent = sim.currentTeam.name_ko || sim.currentTeam.name;
    hudLeague.textContent = sim.currentLeague.name;
    hudAge.textContent = `${p.age}세`;
    const curYear = sim.startYear + (p.age - 16);
    hudYear.textContent = `(${curYear}년)`;
    hudOvr.textContent = p.overall;
    hudValue.textContent = `€${(p.marketValue / 1000000).toFixed(1)}M`;
    hudStats.textContent = `${p.careerGoals}G / ${p.careerAssists}A`;

    achievementsCount.textContent = sim.achievements.size;
  }

  // 6. 이벤트 및 선택지 렌더링
  function renderCurrentEvent() {
    const ev = sim.pendingEvent;
    if (!ev) return;

    eventTitle.textContent = ev.title;
    eventDesc.textContent = ev.description;
    eventOptionsContainer.innerHTML = "";

    Object.entries(ev.options).forEach(([optKey, optData]) => {
      const optCard = document.createElement("button");
      optCard.className = "event-option-card";
      optCard.innerHTML = `
        <span class="option-label">${optData.label}</span>
        <span class="option-badge">${optData.badge}</span>
      `;

      optCard.addEventListener("click", () => {
        handleSeasonSimulation(optKey);
      });

      eventOptionsContainer.appendChild(optCard);
    });
  }

  // 7. 시즌 시뮬레이션 실행 및 결과 갱신
  function handleSeasonSimulation(chosenOptionKey) {
    const res = sim.simulateSeason(chosenOptionKey);
    const rec = res.seasonRecord;

    // HUD 갱신
    updateHUD();
    hudRole.textContent = rec.role;

    // 최근 시즌 결과 패널 갱신
    lastSeasonEmpty.style.display = "none";
    lastSeasonContent.style.display = "block";
    lastSeasonTag.textContent = `${rec.year}년 (${rec.age}세 시즌)`;

    lastEventMsg.textContent = rec.eventMsg || "성공적으로 한 시즌을 소화했습니다.";
    recapApps.textContent = rec.appearances;
    recapGoals.textContent = rec.goals;
    recapAssists.textContent = rec.assists;
    recapRating.textContent = rec.rating.toFixed(1);

    // 트로피 / 개인상
    recapTrophiesArea.innerHTML = "";
    rec.trophies.forEach(tr => {
      const badge = document.createElement("span");
      badge.className = "trophy-badge";
      badge.textContent = `${tr.icon} ${tr.name}`;
      recapTrophiesArea.appendChild(badge);
    });
    rec.awards.forEach(aw => {
      const badge = document.createElement("span");
      badge.className = "award-badge";
      badge.textContent = `${aw.icon} ${aw.name}`;
      recapTrophiesArea.appendChild(badge);
    });

    // 국가대표
    if (rec.nationalSummary) {
      recapNationalArea.style.display = "block";
      recapNationalArea.textContent = `🇰🇷 [국가대표] ${rec.nationalSummary}`;
    } else {
      recapNationalArea.style.display = "none";
    }

    // 성장 보고
    const diff = rec.ovrEnd - rec.ovrStart;
    const diffTxt = diff >= 0 ? `+${diff}` : `${diff}`;
    recapGrowth.textContent = `종합 능력치: ${rec.ovrStart} ➔ ${rec.ovrEnd} (${diffTxt} OVR ${diff >= 0 ? '성장!' : '하락'})`;

    // 커리어 히스토리 테이블에 행 추가
    addSeasonTableRow(rec);
    updateCareerTotalsSummary();

    // 신규 업적 알림
    if (sim.unlockedAchievementsThisStep.length > 0) {
      sim.unlockedAchievementsThisStep.forEach(ach => {
        showToast(`🏆 업적 달성: [${ach.title}] - ${ach.desc}`, "gold");
      });
    }

    // 은퇴 확인
    if (res.retired) {
      showToast("40세가 되어 위대한 선수 생활을 마감합니다.", "gold");
      setTimeout(showRetirementScreen, 1200);
      return;
    }

    // 이적 제안 확인
    if (sim.status === "transfer_pending") {
      setTimeout(renderTransferOffersModal, 800);
    } else {
      renderCurrentEvent();
    }
  }

  // 테이블 행 추가
  function addSeasonTableRow(rec) {
    const tr = document.createElement("tr");

    const trophiesStr = [
      ...rec.trophies.map(t => `${t.icon} ${t.name}`),
      ...rec.awards.map(a => `${a.icon} ${a.name}`)
    ].join(", ") || "-";

    tr.innerHTML = `
      <td>${rec.year} (${rec.age}세)</td>
      <td><strong>${rec.team.name_ko || rec.team.name}</strong></td>
      <td>${rec.league.name}</td>
      <td><span class="hud-role-badge">${rec.role}</span></td>
      <td><strong>${rec.ovrEnd}</strong></td>
      <td>${rec.appearances}</td>
      <td class="text-emerald"><strong>${rec.goals}</strong></td>
      <td class="text-cyan"><strong>${rec.assists}</strong></td>
      <td class="text-yellow">${rec.rating.toFixed(1)}</td>
      <td>${trophiesStr}</td>
    `;
    careerTableBody.appendChild(tr);
  }

  function updateCareerTotalsSummary() {
    const p = sim.player;
    const t = sim.player.trophiesWon;
    const totalTrophies = Object.values(t).reduce((sum, v) => sum + v, 0);
    careerTotalsSummary.textContent = `통산 ${p.careerAppearances}경기 | ${p.careerGoals}골 | ${p.careerAssists}도움 | 🏆 우승 트로피 ${totalTrophies}개`;
  }

  // 8. 이적 제안 모달 렌더링
  function renderTransferOffersModal() {
    transferOffersList.innerHTML = "";
    sim.pendingTransferOffers.forEach(offer => {
      const card = document.createElement("div");
      card.className = "transfer-card";
      
      const repStars = getFifaStarBadge(offer.team);
      card.innerHTML = `
        <div>
          <div class="team-logo-area">
            <img src="${offer.team.logo_url || 'https://placehold.co/60x60/1e293b/ffffff?text=FC'}" class="team-logo-img" alt="${offer.team.name}">
          </div>
          <div class="team-name">${offer.team.name_ko || offer.team.name}</div>
          <div class="team-league">${offer.team.leagueName || '해외 빅리그'}</div>
          <div class="team-rep-row">구단 명성: ${repStars}</div>
          <div class="transfer-fee">이적료: €${(offer.transferFee / 1000000).toFixed(1)}M</div>
          <div class="transfer-wage">주급: €${offer.wageOffer.toLocaleString()} / 보장 역할: ${offer.rolePromised}</div>
        </div>
        <button class="btn btn-primary btn-block btn-accept-transfer">
          🚀 이적 계약서 서명
        </button>
      `;

      card.querySelector(".btn-accept-transfer").addEventListener("click", () => {
        sim.acceptTransfer(offer);
        transferModal.style.display = "none";
        updateHUD();
        renderCurrentEvent();
        showToast(`새로운 무대! ${offer.team.name_ko || offer.team.name}으로의 이적이 확정되었습니다!`, "success");
      });

      transferOffersList.appendChild(card);
    });

    transferModal.style.display = "flex";
  }

  btnStayClub.addEventListener("click", () => {
    sim.stayAtCurrentClub();
    transferModal.style.display = "none";
    renderCurrentEvent();
    showToast("의리를 지키고 현재 구단에 잔류하기로 결정했습니다.", "success");
  });

  // 조기 은퇴 버튼
  btnEarlyRetire.addEventListener("click", () => {
    if (confirm("정말로 지금 축구화를 벗고 은퇴하시겠습니까? 은퇴 후에는 최종 커리어 평가를 받게 됩니다.")) {
      sim.retireNow();
      showRetirementScreen();
    }
  });

  // 9. 은퇴 화면 및 명예의 전당 (Hall of Fame) 렌더링
  function showRetirementScreen() {
    stepPlaying.style.display = "none";
    stepRetirement.style.display = "block";

    const hof = sim.getHallOfFameSummary();
    const p = hof.player;

    hofRankTitle.textContent = hof.rankTitle;
    hofTierBadge.textContent = hof.tierBadge;
    hofDesc.textContent = hof.description;
    hofScore.textContent = `${hof.score.toLocaleString()} pts`;
    hofTotalApps.textContent = `${p.careerAppearances} 경기`;
    hofTotalGA.textContent = `${p.careerGoals}골 / ${p.careerAssists}도움`;
    hofTotalTrophies.textContent = `🏆 ${hof.totalTrophies}개`;

    // 트로피 목록
    hofTrophyList.innerHTML = "";
    const trData = [
      { name: "FIFA 월드컵", count: p.trophiesWon.world_cup, icon: "🏆" },
      { name: "대륙 선수권 (유로/코파/아시안컵)", count: p.trophiesWon.national_continental, icon: "🥇" },
      { name: "대륙 챔피언스리그", count: p.trophiesWon.continental_primary, icon: "⭐" },
      { name: "FIFA 클럽 월드컵", count: p.trophiesWon.club_world_cup, icon: "🌐" },
      { name: "정규 리그 우승", count: p.trophiesWon.league, icon: "🏆" },
      { name: "국내 FA컵 우승", count: p.trophiesWon.cup, icon: "🥇" },
      { name: "발롱도르 (Ballon d'Or)", count: p.awardsWon.ballon_dor, icon: "🌟" },
      { name: "골든슈 (득점왕)", count: p.awardsWon.golden_boot, icon: "👟" },
      { name: "야신상 (최우수 골키퍼)", count: p.awardsWon.golden_glove, icon: "🧤" }
    ];

    trData.filter(item => item.count > 0).forEach(item => {
      const pill = document.createElement("div");
      pill.className = "trophy-room-pill";
      pill.innerHTML = `
        <span>${item.icon} ${item.name}</span>
        <span class="trophy-count-tag">x${item.count}</span>
      `;
      hofTrophyList.appendChild(pill);
    });

    if (hofTrophyList.children.length === 0) {
      hofTrophyList.innerHTML = `<span class="text-muted">획득한 공식 메이저 트로피가 없습니다 (무관).</span>`;
    }

    // 클럽 여정
    hofClubJourney.innerHTML = "";
    p.clubHistory.forEach(h => {
      const endAge = h.leftAge ? `${h.leftAge}세` : `${p.age}세(은퇴)`;
      const item = document.createElement("div");
      item.className = "journey-item";
      item.innerHTML = `
        <span class="journey-years">${h.joinedAge}세 ~ ${endAge}</span>
        <span class="journey-club">${h.teamName}</span>
        <span class="journey-league">(${h.leagueName})</span>
      `;
      hofClubJourney.appendChild(item);
    });

    // 달성 업적
    hofAchCount.textContent = sim.achievements.size;
    hofAchList.innerHTML = "";
    sim.achievements.forEach(achKey => {
      const ach = ACHIEVEMENTS_DATA[achKey];
      if (ach) {
        const item = document.createElement("div");
        item.className = "ach-card-item";
        item.innerHTML = `
          <div class="ach-icon">${ach.icon}</div>
          <div>
            <div class="ach-title">${ach.title}</div>
            <div class="ach-desc">${ach.desc}</div>
          </div>
        `;
        hofAchList.appendChild(item);
      }
    });

    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  // 10. 커리어 결과 복사하기
  btnCopyResult.addEventListener("click", () => {
    const hof = sim.getHallOfFameSummary();
    const p = hof.player;
    const text = `⚽ [COPERO 커리어 시뮬레이터 요약] ⚽
선수명: ${p.name} (${p.position}, #${p.number})
국적: ${p.nationality.name}
최종 평가: ${hof.rankTitle} [${hof.tierBadge}]
통산 성적: ${p.careerAppearances}경기 ${p.careerGoals}골 ${p.careerAssists}도움
우승 트로피: 총 ${hof.totalTrophies}회
- 리그 ${p.trophiesWon.league}회 | FA컵 ${p.trophiesWon.cup}회 | 대륙 챔스 ${p.trophiesWon.continental_primary}회 | 월드컵 ${p.trophiesWon.world_cup}회
개인 수상: 발롱도르 ${p.awardsWon.ballon_dor}회 | 골든슈 ${p.awardsWon.golden_boot}회
달성 업적: ${sim.achievements.size}/20개
#축구선수커리어 #축구시뮬레이터 #Copero`;

    navigator.clipboard.writeText(text).then(() => {
      showToast("커리어 요약이 클립보드에 복사되었습니다!", "success");
    });
  });

  // 11. 업적 모달 열기/닫기
  btnAchievements.addEventListener("click", () => {
    achievementsModalList.innerHTML = "";
    Object.entries(ACHIEVEMENTS_DATA).forEach(([key, data]) => {
      const unlocked = sim.achievements.has(key);
      const card = document.createElement("div");
      card.className = `ach-modal-card ${unlocked ? 'unlocked' : 'locked'}`;
      card.innerHTML = `
        <div class="ach-icon">${data.icon}</div>
        <div>
          <div class="ach-title">${data.title} ${unlocked ? '✅' : '🔒'}</div>
          <div class="ach-desc">${data.desc}</div>
        </div>
      `;
      achievementsModalList.appendChild(card);
    });
    achievementsModal.style.display = "flex";
  });

  btnCloseAchModal.addEventListener("click", () => {
    achievementsModal.style.display = "none";
  });

  // 다시 시작
  btnPlayAgain.addEventListener("click", () => location.reload());
  btnRestartHeader.addEventListener("click", () => {
    if (confirm("현재 진행 중인 커리어를 초기화하고 새로 시작하시겠습니까?")) {
      location.reload();
    }
  });

  // 헬퍼: 국기 이모지
  function getCountryEmoji(fifa) {
    const emojis = {
      KOR: "🇰🇷", ENG: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", FRA: "🇫🇷", GER: "🇩🇪", ESP: "🇪🇸",
      ITA: "🇮🇹", BRA: "🇧🇷", ARG: "🇦🇷", POR: "🇵🇹", NED: "🇳🇱",
      BEL: "🇧🇪", CRO: "🇭🇷", URU: "🇺🇾", JPN: "🇯🇵", USA: "🇺🇸"
    };
    return emojis[fifa] || "🌐";
  }

  // 헬퍼: 토스트 메시지
  function showToast(msg, type = "success") {
    const toastContainer = document.getElementById("toastContainer");
    const toast = document.createElement("div");
    toast.className = `toast toast-${type}`;
    toast.innerHTML = `<span>${type === 'gold' ? '🌟' : '⚽'}</span><span>${msg}</span>`;
    toastContainer.appendChild(toast);
    setTimeout(() => {
      toast.style.opacity = "0";
      toast.style.transform = "translateX(50px)";
      setTimeout(() => toast.remove(), 300);
    }, 3500);
  }
});
