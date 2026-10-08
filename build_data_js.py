import json
import os

target_dir = r"C:\Users\A\.gemini\antigravity\scratch\football-career-simulator"

with open(os.path.join(target_dir, "db_countries.json"), "r", encoding="utf-8") as f:
    countries = json.load(f)

with open(os.path.join(target_dir, "db_leagues.json"), "r", encoding="utf-8") as f:
    leagues = json.load(f)

# Korean translations for clubs (common ones)
club_ko = {
    "real-madrid": "레알 마드리드", "barcelona": "바르셀로나", "atletico-madrid": "아틀레티코 마드리드",
    "manchester-city": "맨체스터 시티", "liverpool": "리버풀", "arsenal": "아스널",
    "chelsea": "첼시", "manchester-united": "맨체스터 유나이티드", "tottenham": "토트넘 홋스퍼",
    "bayern-munchen": "바이에른 뮌헨", "borussia-dortmund": "보루시아 도르트문트", "bayer-leverkusen": "바이어 레버쿠젠",
    "paris-saint-germain": "파리 생제르맹 (PSG)", "juventus": "유벤투스", "inter": "인테르",
    "milan": "AC 밀란", "napoli": "나폴리", "roma": "AS 로마",
    "ajax": "아약스", "benfica": "벤피카", "sporting-cp": "스포르팅 CP", "porto": "FC 포르투",
    "boca-juniors": "보카 주니어스", "river-plate": "리버 플레이트", "flamengo": "플라멩구", "palmeiras": "파우메이라스",
    "al-hilal": "알 힐랄", "al-nassr": "알 나스르", "inter-miami": "인터 마이애미",
    "jeonbuk-hyundai-motors": "전북 현대", "ulsan-hd-fc": "울산 HD", "fc-seoul": "FC 서울",
    "pohang-steelers": "포항 스틸러스", "daejeon-hana-citizen": "대전 하나 시티즌", "gwangju-fc": "광주 FC",
    "gangwon-fc": "강원 FC", "gimcheon-sangmu-fc": "김천 상무", "jeju-sk-fc": "제주 유나이티드",
    "incheon-united": "인천 유나이티드", "fc-anyang": "FC 안양", "bucheon-fc-1995": "부천 FC 1995"
}

# Attach Korean names where available
for l in leagues:
    for t in l.get("teams", []):
        t["name_ko"] = club_ko.get(t["id"], t["name"])

# 25 Career Events localized into Korean
events_ko = {
    "training_extra": {
        "title": "추가 개인 훈련",
        "description": "프리시즌 특훈 루틴: 빠르게 실력을 끌어올릴 수 있지만, 무리하면 부상 위험이 따릅니다.",
        "options": {
            "accept": {
                "label": "특훈 강행하기",
                "badge": "성공 65% (+2 OVR) / 실패 35% (-2 OVR)",
                "successProb": 0.65,
                "positive": {"ovrDelta": 2, "msg": "피나는 노력 끝에 기량이 발전했습니다! (OVR +2)"},
                "negative": {"ovrDelta": -2, "msg": "과부하로 가벼운 근육 부상을 입었습니다. (OVR -2)"}
            },
            "reject": {
                "label": "충분한 휴식 취하기",
                "badge": "변화 없음",
                "positive": {"ovrDelta": 0, "msg": "무리하지 않고 컨디션을 온전히 유지했습니다."}
            }
        }
    },
    "personal_coach": {
        "title": "개인 전담 코치 영입",
        "description": "전문 개인 코치가 새로운 슈팅/패스 메커니즘 수정을 제안했습니다. 잘 맞으면 기량이 발전하지만, 폼을 망칠 수도 있습니다.",
        "options": {
            "accept": {
                "label": "새로운 폼으로 교정",
                "badge": "성공 50% (+1 OVR) / 실패 50% (-1 OVR)",
                "successProb": 0.5,
                "positive": {"ovrDelta": 1, "msg": "새로운 기술이 몸에 익어 플레이가 날카로워졌습니다! (OVR +1)"},
                "negative": {"ovrDelta": -1, "msg": "오히려 기존 폼의 밸런스가 무너지며 슬럼프를 겪습니다. (OVR -1)"}
            },
            "reject": {
                "label": "기존 스타일 고수",
                "badge": "변화 없음",
                "positive": {"ovrDelta": 0, "msg": "본인만의 오리지널 스타일을 지켜나갑니다."}
            }
        }
    },
    "mysterious_substance": {
        "title": "의문의 영양 보충제",
        "description": "구단 밖 지인이 엄청난 체력과 파워를 보장하는 '특수 비타민'을 건넸습니다. 도핑 테스트에 적발되면 출장 정지 징계를 받습니다.",
        "options": {
            "consume": {
                "label": "보충제 복용하기",
                "badge": "성공 70% (+3 OVR) / 실패 30% (출장 정지)",
                "successProb": 0.70,
                "positive": {"ovrDelta": 3, "msg": "폭발적인 신체 능력을 얻으며 그라운드를 지배합니다! (OVR +3)"},
                "negative": {"ovrDelta": -3, "suspended": True, "msg": "도핑 테스트에 불시 적발되어 잔여 시즌 출장 정지 처분을 받았습니다! (OVR -3, 출장 정지)"}
            },
            "reject": {
                "label": "단호히 거절하기",
                "badge": "안전",
                "positive": {"ovrDelta": 0, "msg": "정정당당한 페어플레이 정신을 지켰습니다."}
            }
        }
    },
    "honesty_test": {
        "title": "승부조작 브로커의 유혹",
        "description": "어두운 그림자의 브로커가 다가와 다음 빅매치에서 일부러 태업하거나 실수를 하면 거액의 뒷돈을 주겠다고 제안합니다.",
        "options": {
            "accept": {
                "label": "돈의 유혹에 넘어가기",
                "badge": "성공 50% (재력 상승) / 실패 50% (자격 정지)",
                "successProb": 0.5,
                "positive": {"ovrDelta": 2, "msg": "아무도 눈치채지 못했고 거액의 재산을 축적했습니다. (OVR +2)"},
                "negative": {"ovrDelta": -6, "suspended": True, "msg": "승부조작 혐의로 내부 고발되어 영구제명 위기에 처했습니다! (OVR -6, 출장 정지)"}
            },
            "reject": {
                "label": "협박을 뿌리치고 거절",
                "badge": "클린 스포츠",
                "positive": {"ovrDelta": 1, "msg": "정의를 지키고 당당하게 그라운드를 누볐습니다! (멘탈 강화, OVR +1)"}
            }
        }
    },
    "indecent_proposal": {
        "title": "팀 동료의 연인과의 스캔들",
        "description": "팀 핵심 동료 선수의 연인이 당신에게 은밀한 호감을 표시하며 위험한 만남을 제안해 왔습니다.",
        "options": {
            "proceed": {
                "label": "위험한 만남 갖기",
                "badge": "50% 자신감 폭발 / 50% 발각 파문",
                "successProb": 0.5,
                "positive": {"ovrDelta": 2, "msg": "비밀 연애의 스릴로 오히려 자신감이 넘쳐납니다! (OVR +2)"},
                "negative": {"ovrDelta": -3, "msg": "라커룸에 소문이 퍼져 동료들에게 왕따를 당하고 팀 분위기가 파탄났습니다. (OVR -3)"}
            },
            "reject": {
                "label": "단칼에 거절하기",
                "badge": "동료애 유지",
                "positive": {"ovrDelta": 0, "msg": "라커룸의 평화를 지키고 축구에만 전념했습니다."}
            }
        }
    },
    "controversial_post": {
        "title": "가족의 SNS 폭탄 발언",
        "description": "당신의 가족이 SNS에 구단 전술과 감독의 기용 방식을 맹비난하는 글을 올려 팬들과 언론이 발칵 뒤집혔습니다.",
        "options": {
            "support_family": {
                "label": "가족을 감싸기",
                "badge": "감독 눈 밖에 남 (출전 시간 급감)",
                "positive": {"rolePenalty": 1, "ovrDelta": 0, "msg": "가족의 편을 들다 감독의 눈 밖에 나 출전 시간이 줄어들었습니다."}
            },
            "support_club": {
                "label": "구단과 감독에게 공개 사과",
                "badge": "가족 불화 (-2 OVR)",
                "positive": {"ovrDelta": -2, "msg": "프로페셔널하게 사과했으나 가족과의 갈등으로 극심한 스트레스를 받습니다. (OVR -2)"}
            }
        }
    },
    "season_load": {
        "title": "살인적인 시즌 일정과 체력 관리",
        "description": "리그와 컵 대회가 겹친 빡빡한 일정 속에서, 출전 욕심을 내어 더블 세션 훈련을 이어갈지 체력 안배를 할지 결정해야 합니다.",
        "options": {
            "accept": {
                "label": "전 경기 선발 출전 강행",
                "badge": "성공 70% (철인 주전) / 실패 30% (과로 부상)",
                "successProb": 0.7,
                "positive": {"ovrDelta": 2, "msg": "강철 체력으로 전 경기를 소화하며 팀의 영웅이 되었습니다! (OVR +2)"},
                "negative": {"ovrDelta": -3, "msg": "결국 햄스트링이 터져 병원 신세를 지게 되었습니다. (OVR -3)"}
            },
            "stay_calm": {
                "label": "로테이션 수용 및 체력 안배",
                "badge": "출전 시간 소폭 감소",
                "positive": {"ovrDelta": 0, "msg": "몸을 아끼며 롱런할 수 있는 체력을 보존했습니다."}
            }
        }
    },
    "position_change": {
        "title": "감독의 포지션 변경 제안",
        "description": "새로 부임한 감독이 당신의 전술적 다재다능함을 보고 다른 포지션으로의 영구 전환을 강력히 권유합니다.",
        "options": {
            "accept": {
                "label": "새로운 포지션 수락",
                "badge": "확고한 주전 보장 / 적응 기간 필요",
                "positive": {"ovrDelta": 1, "msg": "새 포지션에 완벽히 정착하며 감독의 핵심 황태자로 거듭났습니다! (OVR +1)"}
            },
            "reject": {
                "label": "원래 포지션 고집",
                "badge": "주전 경쟁 심화",
                "positive": {"ovrDelta": 0, "rolePenalty": 1, "msg": "감독의 눈 밖에 나며 로테이션 멤버로 밀려났습니다."}
            }
        }
    },
    "position_competition": {
        "title": "동 포지션 경쟁자의 영입",
        "description": "구단이 당신의 자리에 천문학적인 이적료를 들여 월드클래스 라이벌 선수를 영입했습니다. 정면승부하시겠습니까?",
        "options": {
            "compete": {
                "label": "목숨 걸고 주전 경쟁하기",
                "badge": "50% 승리(주전 독점) / 50% 패배(벤치 신세)",
                "successProb": 0.5,
                "positive": {"ovrDelta": 3, "msg": "피나는 노력으로 라이벌을 압도하고 확고한 넘버원 주전 자리를 지켰습니다! (OVR +3)"},
                "negative": {"ovrDelta": -1, "rolePenalty": 1, "msg": "경쟁에서 밀리며 컵 대회용 로테이션 멤버로 전락했습니다. (OVR -1)"}
            }
        }
    },
    "unexpected_prospect": {
        "title": "초특급 유망주 원더키드의 등장",
        "description": "유스 팀에서 제2의 메시라 불리는 천재 소년이 1군에 콜업되었습니다. 당신의 자리를 위협할 수도 있습니다.",
        "options": {
            "mentor": {
                "label": "선배로서 멘토링 해주기",
                "badge": "팀 우승 확률 UP / 개인 출전 시간 양보",
                "positive": {"ovrDelta": 1, "teamBuff": True, "msg": "후배를 훌륭히 이끌며 팀에 환상적인 시너지를 불어넣었습니다! (OVR +1, 우승 확률 UP)"}
            },
            "search_exit": {
                "label": "주전 보장되는 타 구단 알아보기",
                "badge": "이적 추진",
                "positive": {"transferBoost": True, "msg": "새로운 도전을 위해 에이전트에게 이적을 지시했습니다."}
            }
        }
    },
    "club_priority": {
        "title": "구단의 시즌 목표 선택",
        "description": "시즌 후반기, 구단 수뇌부가 리그 우승과 대륙 대항전(챔피언스리그) 중 하나에 전력을 올인하려 합니다.",
        "options": {
            "prioritize_league": {
                "label": "국내 리그 제패에 집중",
                "badge": "리그 우승 확률 2배 / 챔스 확률 감소",
                "positive": {"leagueBoost": True, "msg": "리그 경기마다 맹활약하며 승점을 쓸어 담습니다!"}
            },
            "prioritize_continental": {
                "label": "대륙 챔피언스리그 정복에 올인",
                "badge": "챔스 우승 확률 2배 / 리그 확률 감소",
                "positive": {"uclBoost": True, "msg": "별들의 무대 챔피언스리그 토너먼트에서 영웅적 활약을 펼칩니다!"}
            }
        }
    },
    "rival_offer": {
        "title": "숙적 라이벌 구단의 메가 오퍼",
        "description": "현재 소속팀의 최대 앙숙인 라이벌 구단이 거액의 연봉과 트로피 보장을 약속하며 파격적인 이적 제안을 건넸습니다.",
        "options": {
            "accept": {
                "label": "라이벌 구단으로 이적 (배신자 루트)",
                "badge": "우승 확률 대폭 상승 / 팬들의 살해 협박",
                "positive": {"ovrDelta": 1, "rivalTransfer": True, "msg": "라이벌 팀의 슈퍼 스쿼드에 합류해 곧바로 트로피에 도전합니다! (OVR +1)"}
            },
            "reject": {
                "label": "의리를 지키고 거절 (클럽 레전드 루트)",
                "badge": "홈 팬들의 절대적 지지",
                "positive": {"ovrDelta": 1, "msg": "팬들에게 영원한 영웅이자 충신으로 각인되었습니다! (OVR +1)"}
            }
        }
    },
    "club_crisis": {
        "title": "소속 구단의 재정 위기 & 성적 침체",
        "description": "구단주가 바뀌고 재정 페어플레이(FFP) 위반으로 팀이 흔들리며 주축 선수들이 줄줄이 팔려나가고 있습니다.",
        "options": {
            "stay_and_fight": {
                "label": "난파선에 남아 끝까지 싸우기",
                "badge": "고난의 행군 / 낭만 레전드",
                "positive": {"ovrDelta": 0, "msg": "팀의 캡틴으로서 끝까지 팀을 지키며 팬들의 눈시울을 붉혔습니다."}
            },
            "search_exit": {
                "label": "탈출구(이적) 모색하기",
                "badge": "빅클럽 이적 추진",
                "positive": {"transferBoost": True, "msg": "자신의 커리어를 지키기 위해 발 빠르게 새 팀을 찾아 떠납니다."}
            }
        }
    },
    "fan_backlash": {
        "title": "팬들의 거센 야유와 SNS 테러",
        "description": "최근 몇 경기 동안의 침체기로 인해 성난 서포터즈가 당신에게 야유를 퍼붓고 출퇴근길을 가로막았습니다.",
        "options": {
            "stay_and_fight": {
                "label": "그라운드에서 실력으로 증명하기",
                "badge": "멘탈 압박 (-2 OVR 또는 반등)",
                "successProb": 0.6,
                "positive": {"ovrDelta": 2, "msg": "다음 경기 해트트릭을 작렬하며 비판론자들의 입을 다물게 했습니다! (OVR +2)"},
                "negative": {"ovrDelta": -2, "msg": "심리적 위축으로 자신감을 잃고 폼이 저하되었습니다. (OVR -2)"}
            },
            "search_exit": {
                "label": "환경 변화를 위해 이적 요청",
                "badge": "새로운 리그 도전",
                "positive": {"transferBoost": True, "msg": "새로운 팀에서 새 출발을 다짐합니다."}
            }
        }
    },
    "return_home": {
        "title": "고향 팀의 복귀 러브콜",
        "description": "해외 리그 생활에 지친 당신에게 고국의 명문 구단과 가족들이 집으로 돌아와 마지막 전성기를 빛내달라고 요청합니다.",
        "options": {
            "stay_abroad": {
                "label": "해외 무대 잔류 및 도전 지속",
                "badge": "가족과의 거리감 (-1 OVR) / 정상급 경쟁",
                "positive": {"ovrDelta": 1, "msg": "세계 최고 수준의 무대에서 치열하게 싸워나갑니다!"},
                "negative": {"ovrDelta": -1, "msg": "향수병으로 인해 약간의 피로감이 누적됩니다."}
            },
            "return_home": {
                "label": "금의환향하여 고국 복귀",
                "badge": "국내 리그 제패 도전",
                "positive": {"returnHome": True, "ovrDelta": 1, "msg": "고국 팬들의 열렬한 환영 속에 국내 리그의 슈퍼스타로 군림합니다! (OVR +1)"}
            }
        }
    },
    "giant_tattoo": {
        "title": "유명 타투이스트의 전신 문신 제안",
        "description": "유명 타투이스트가 당신의 등 전체에 거대한 호랑이와 날개 문신을 새겨주겠다고 무료 협찬을 제안했습니다.",
        "options": {
            "accept": {
                "label": "문신 새기기",
                "badge": "성공 70% (간지 폭발 +2 OVR) / 실패 30% (피부 염증)",
                "successProb": 0.7,
                "positive": {"ovrDelta": 2, "msg": "강렬한 카리스마로 경기장 위를 압도합니다! (OVR +2)"},
                "negative": {"ovrDelta": -2, "msg": "피부 감염으로 고열에 시달려 훈련을 거르게 되었습니다. (OVR -2)"}
            },
            "reject": {
                "label": "정중히 거절",
                "badge": "단정함 유지",
                "positive": {"ovrDelta": 0, "msg": "깔끔한 본래 모습을 유지했습니다."}
            }
        }
    },
    "tax_trouble": {
        "title": "국세청의 세무 조사 및 탈세 스캔들",
        "description": "초상권 계약 관련 세무 조사 대상에 올라 신문 1면을 장식하며 엄청난 추징금 위기에 처했습니다.",
        "options": {
            "stay_and_fight": {
                "label": "법정 다툼 및 벌금 납부",
                "badge": "스트레스 (-2 OVR)",
                "positive": {"ovrDelta": -2, "msg": "벌금을 납부하고 사태를 수습했으나 심적 소모가 컸습니다. (OVR -2)"}
            },
            "search_exit": {
                "label": "세금 부담 적은 타국 리그로 이적",
                "badge": "타 리그 이적",
                "positive": {"transferBoost": True, "msg": "신속하게 해외 타 리그로 이적하며 논란을 벗어납니다."}
            }
        }
    },
    "foreign_grandfather": {
        "title": "외국 혈통 발견 & 귀화 국가대표 제안",
        "description": "조부모 중 한 분이 다른 축구 강국 국적을 가졌음이 확인되어, 해당 국가대표팀 감독이 직접 귀화 발탁을 타진해왔습니다.",
        "options": {
            "switch_national_team": {
                "label": "새로운 국가대표팀 선택",
                "badge": "대표팀 변경 / 메이저 대회 진출 기회",
                "positive": {"switchNation": True, "msg": "새로운 국기를 가슴에 달고 국제 대회 우승에 도전합니다!"}
            },
            "keep_national_team": {
                "label": "기존 조국 대표팀 고수",
                "badge": "애국심과 낭만",
                "positive": {"ovrDelta": 1, "msg": "조국을 향한 헌신을 다짐하며 국민적 영웅으로 남습니다! (OVR +1)"}
            }
        }
    },
    "finish_high_school": {
        "title": "학업 병행 및 졸업장 취득",
        "description": "프로 조기 데뷔로 중단했던 학업을 마칠 기회가 생겼습니다. 공부와 운동을 병행하시겠습니까?",
        "options": {
            "accept": {
                "label": "야간 학업 이수 및 졸업",
                "badge": "멘탈 성숙 (+1 OVR) / 약간의 피로",
                "positive": {"ovrDelta": 1, "msg": "지적 성숙과 함께 경기 읽는 눈이 넓어졌습니다! (OVR +1)"}
            },
            "reject": {
                "label": "축구에만 올인",
                "badge": "변화 없음",
                "positive": {"ovrDelta": 0, "msg": "오직 축구공 하나에만 인생을 걸었습니다."}
            }
        }
    },
    "controversial_statement": {
        "title": "경기 후 인터뷰 설화 & 기자회견 사과",
        "description": "패배 직후 흥분한 상태에서 '동료들의 수준이 낮아 질 수밖에 없었다'고 발언해 라커룸이 뒤집어졌습니다.",
        "options": {
            "apologize": {
                "label": "선수단과 팬들에게 머리 숙여 사과",
                "badge": "자존심 굽히기 / 출전 시간 일시 감소",
                "positive": {"ovrDelta": -1, "msg": "진심 어린 사과로 파국을 면했으나 동료들의 신뢰 회복에 시간이 걸립니다. (OVR -1)"}
            }
        }
    },
    "club_national_team_conflict": {
        "title": "소속팀 vs 국가대표팀 차출 갈등",
        "description": "소속팀 감독이 중요한 리그 일정을 이유로 A매치 친선경기 차출을 거부하라며 강하게 압박합니다.",
        "options": {
            "go_anyway": {
                "label": "국가의 부름에 응하기 (비행기 탑승)",
                "badge": "국대 주전 보장 / 구단 징계",
                "positive": {"ovrDelta": 0, "rolePenalty": 1, "msg": "태극마크(국대)를 위해 날아갔고, 구단에서는 잠시 벤치로 밀려났습니다."}
            },
            "comply": {
                "label": "구단 잔류 및 휴식",
                "badge": "구단 주전 확보 / 대표팀 낙마 위기",
                "positive": {"ovrDelta": 1, "msg": "클럽에 집중해 맹활약했으나 대표팀 내 입지는 좁아졌습니다. (OVR +1)"}
            }
        }
    },
    "injury_at_peak": {
        "title": "대회 결승전을 앞둔 비극적 부상",
        "description": "결승전 직전 발목 인대 손상을 입었습니다. 진통제를 맞고 무리해서 뛰시겠습니까, 아니면 안전을 위해 결장하시겠습니까?",
        "options": {
            "play_injured": {
                "label": "진통제 투혼 강행 (부상 투혼)",
                "badge": "우승 확률 대폭 상승 / 영구 손상 위험 (-2 OVR)",
                "positive": {"ovrDelta": -2, "trophyBoost": True, "msg": "절뚝거리며 결승골을 터뜨려 팀을 우승시켰지만 무릎 연골이 닳았습니다! (우승 확률 UP, OVR -2)"}
            },
            "recover": {
                "label": "치료와 회복에 전념 (결장)",
                "badge": "안전한 완쾌 / 벤치에서 관전",
                "positive": {"ovrDelta": 0, "msg": "무리하지 않고 부상을 완치하여 롱런을 기약합니다."}
            }
        }
    },
    "injury": {
        "title": "시즌 중 불의의 부상 발생",
        "description": "경기 도중 거친 태클을 당해 들것에 실려 나갔습니다. 재활 치료가 필요합니다.",
        "options": {
            "continue": {
                "label": "재활 훈련 시작하기",
                "badge": "재활 기간 돌입",
                "positive": {"ovrDelta": -2, "msg": "피나는 재활 끝에 그라운드로 복귀했습니다."}
            }
        }
    },
    "decisive_penalty": {
        "title": "승부차기 마지막 5번 키커",
        "description": "메이저 대회 결승전, 승부차기 마지막 키커로 당신이 공 앞에 섰습니다. 어느 방향으로 차시겠습니까?",
        "options": {
            "left": {
                "label": "왼쪽 구석으로 강하게 슈팅!",
                "badge": "성공 50% (우승) / 실패 50% (실축)",
                "successProb": 0.5,
                "positive": {"trophyWin": True, "ovrDelta": 2, "msg": "골망을 시원하게 가르며 팀의 우승을 확정지었습니다! GOAL! (OVR +2)"},
                "negative": {"trophyWin": False, "ovrDelta": -2, "msg": "골키퍼의 슈퍼 세이브에 막히며 눈물을 삼켰습니다... (OVR -2)"}
            },
            "right": {
                "label": "오른쪽 구석으로 정교하게 슈팅!",
                "badge": "성공 50% (우승) / 실패 50% (실축)",
                "successProb": 0.5,
                "positive": {"trophyWin": True, "ovrDelta": 2, "msg": "골키퍼의 타이밍을 완전히 빼앗으며 골망을 흔들었습니다! 우승! (OVR +2)"},
                "negative": {"trophyWin": False, "ovrDelta": -2, "msg": "골대를 맞고 튕겨져 나오며 아쉽게 준우승에 머물렀습니다... (OVR -2)"}
            }
        }
    }
}

# 20 Achievements translated into Korean
achievements_ko = {
    "king_of_america": {
        "title": "아메리카의 제왕",
        "desc": "한 커리어에서 코파 아메리카와 코파 리베르타도레스 우승 동시 달성",
        "icon": "👑"
    },
    "one_club_legend": {
        "title": "원클럽 레전드",
        "desc": "이적 없이 오직 한 클럽에서만 활약하며 리그, 컵, 대륙 대회 3대 메이저 우승",
        "icon": "🛡️"
    },
    "europe_owner": {
        "title": "유럽 5대 리그 정복자",
        "desc": "유럽 5대 빅리그(EPL, 라리가, 세리에A, 분데스리가, 리그1) 모두에서 리그 우승 달성",
        "icon": "🏰"
    },
    "mr_champions": {
        "title": "미스터 챔피언스",
        "desc": "UEFA 챔피언스리그 통산 5회 이상 우승",
        "icon": "⭐"
    },
    "goat": {
        "title": "축구의 신 (G.O.A.T)",
        "desc": "월드컵 1회, 대륙컵 2회, 발롱도르 8회, 챔피언스리그 4회 우승 달성 (메시급 위업)",
        "icon": "🐐"
    },
    "only_pele": {
        "title": "펠레의 환생",
        "desc": "월드컵 3회 우승 및 통산 1,000골 돌파",
        "icon": "⚽"
    },
    "black_spider": {
        "title": "검은 거미 (야신의 후예)",
        "desc": "올해의 골키퍼 상(야신상/골든글러브) 통산 6회 이상 수상",
        "icon": "🧤"
    },
    "net_terror": {
        "title": "골망의 파괴자",
        "desc": "골든슈(득점왕) 통산 6회 이상 수상",
        "icon": "👟"
    },
    "complete_football": {
        "title": "축구 올클리어",
        "desc": "클럽 및 국가대표의 모든 주요 메이저 대회와 개인상 석권",
        "icon": "🌟"
    },
    "most_decorated": {
        "title": "역대 최다 우승자",
        "desc": "통산 팀 공식 우승 트로피 49개 이상 수집",
        "icon": "🏆"
    },
    "ringless": {
        "title": "무관의 제왕",
        "desc": "화려한 개인 기량에도 불구하고 팀 메이저 트로피 0개로 은퇴 (케인 스타일)",
        "icon": "💔"
    },
    "national_hero": {
        "title": "조국의 영웅",
        "desc": "월드컵 우승 경험이 없던 비전통 강호 국가(한국 등)를 이끌고 월드컵 첫 우승",
        "icon": "🇰🇷"
    },
    "the_world_is_yours": {
        "title": "세상은 너의 것",
        "desc": "FIFA 월드컵과 FIFA 클럽 월드컵을 모두 제패",
        "icon": "🌍"
    },
    "from_the_periphery": {
        "title": "변방의 반란",
        "desc": "유럽/남미가 아닌 아시아, 아프리카, 북중미, 오세아니아 국적으로 발롱도르 수상",
        "icon": "🌏"
    },
    "ushuaia_to_darien": {
        "title": "남미 대륙 정복자",
        "desc": "남미 10개국 리그 클럽에서 모두 활약",
        "icon": "🗺️"
    },
    "nomad": {
        "title": "방랑자 (저니맨)",
        "desc": "전 세계 6개 대륙의 클럽에서 활약",
        "icon": "✈️"
    },
    "from_the_bottom": {
        "title": "밑바닥 신화",
        "desc": "3부 리그 팀에서 시작해 같은 팀을 이끌고 1부 리그 우승 견인",
        "icon": "🧗"
    },
    "matagigantes": {
        "title": "언더독의 기적 (자이언트 킬러)",
        "desc": "명성 0의 중소 클럽 소속으로 챔피언스리그 또는 리베르타도레스 우승",
        "icon": "⚡"
    },
    "the_treble": {
        "title": "트레블 달성",
        "desc": "단일 시즌에 리그, FA컵, 대륙 챔피언스리그 3관왕 달성",
        "icon": "✨"
    },
    "baldosero": {
        "title": "풍운아",
        "desc": "커리어 통산 24개 이상의 구단에서 활약",
        "icon": "🧳"
    }
}

injuries_ko = [
    {"type": "hamstring", "name": "햄스트링 파열", "ovrDelta": -3, "weight": 24},
    {"type": "meniscus", "name": "반월판 연골 손상", "ovrDelta": -2, "weight": 18},
    {"type": "acl", "name": "전방십자인대(ACL) 파열", "ovrDelta": -5, "weight": 14},
    {"type": "tibia_fibula", "name": "경골 및 비골 골절", "ovrDelta": -8, "weight": 8},
    {"type": "achilles", "name": "아킬레스건 파열", "ovrDelta": -10, "weight": 4},
    {"type": "ankle_sprain", "name": "발목 인대 염좌", "ovrDelta": -1, "weight": 14},
    {"type": "calf_tear", "name": "종아리 근육 파열", "ovrDelta": -2, "weight": 8},
    {"type": "metatarsal_fracture", "name": "중족골 골절", "ovrDelta": -4, "weight": 5},
    {"type": "shoulder_dislocation", "name": "어깨 관절 탈구", "ovrDelta": -4, "weight": 3},
    {"type": "disc_hernia", "name": "허리 디스크", "ovrDelta": -5, "weight": 2}
]

# Write data.js
data_js_content = f"""// 축구선수 커리어 시뮬레이터 (Football Career Simulator) 데이터베이스
// Copero Simulador de Carrera 한글 패치 에디션

const COUNTRIES_DATA = {json.dumps(countries, ensure_ascii=False, indent=2)};

const LEAGUES_DATA = {json.dumps(leagues, ensure_ascii=False, indent=2)};

const CAREER_EVENTS_DATA = {json.dumps(events_ko, ensure_ascii=False, indent=2)};

const ACHIEVEMENTS_DATA = {json.dumps(achievements_ko, ensure_ascii=False, indent=2)};

const INJURIES_DATA = {json.dumps(injuries_ko, ensure_ascii=False, indent=2)};

const TOURNAMENTS_INFO = {{
  world_cup: {{ name: "FIFA 월드컵", cycle: 4, icon: "🏆", badge: "국제 메이저" }},
  club_world_cup: {{ name: "FIFA 클럽 월드컵", cycle: 4, icon: "🌐", badge: "세계 클럽" }},
  UEFA: {{
    continental_primary: {{ name: "UEFA 챔피언스리그", icon: "⭐" }},
    continental_secondary: {{ name: "UEFA 유로파리그", icon: "🥈" }},
    national_continental: {{ name: "UEFA 유로 (유럽선수권)", cycle: 4, icon: "🇪🇺" }}
  }},
  CONMEBOL: {{
    continental_primary: {{ name: "코파 리베르타도레스", icon: "🏆" }},
    continental_secondary: {{ name: "코파 수다메리카나", icon: "🥈" }},
    national_continental: {{ name: "코파 아메리카", cycle: 4, icon: "🌎" }}
  }},
  AFC: {{
    continental_primary: {{ name: "AFC 챔피언스리그 엘리트", icon: "🏆" }},
    continental_secondary: {{ name: "AFC 챔피언스리그 2", icon: "🥈" }},
    national_continental: {{ name: "AFC 아시안컵", cycle: 4, icon: "🌏" }}
  }},
  CONCACAF: {{
    continental_primary: {{ name: "북중미 챔피언스컵", icon: "🏆" }},
    national_continental: {{ name: "북중미 골드컵", cycle: 2, icon: "🏆" }}
  }},
  CAF: {{
    continental_primary: {{ name: "CAF 챔피언스리그", icon: "🏆" }},
    continental_secondary: {{ name: "CAF 컨페더레이션컵", icon: "🥈" }},
    national_continental: {{ name: "아프리카 네이션스컵", cycle: 2, icon: "🌍" }}
  }},
  OFC: {{
    continental_primary: {{ name: "OFC 챔피언스리그", icon: "🏆" }},
    national_continental: {{ name: "OFC 네이션스컵", cycle: 4, icon: "🏆" }}
  }}
}};
"""

with open(os.path.join(target_dir, "data.js"), "w", encoding="utf-8") as out:
    out.write(data_js_content)

print("Generated data.js successfully, size:", os.path.getsize(os.path.join(target_dir, "data.js")))
