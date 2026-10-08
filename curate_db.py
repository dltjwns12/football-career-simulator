import json
import os
import sys

sys.stdout.reconfigure(encoding='utf-8')

target_dir = r"C:\Users\A\.gemini\antigravity\scratch\football-career-simulator"

with open(f"{target_dir}\\db_leagues.json", "r", encoding="utf-8") as f:
    all_leagues = json.load(f)

with open(f"{target_dir}\\db_countries.json", "r", encoding="utf-8") as f:
    all_countries = json.load(f)

# The user explicitly asked:
# "어느정도 이름있는 유럽리그하고 브라질 아르헨티나 한국 일본 사우디 정도만 남기고 없애"
# Desired Leagues:
# ENG: Premier League, Championship
# ESP: LaLiga
# GER: Bundesliga
# ITA: Serie A
# FRA: Ligue 1
# NED: Eredivisie
# POR: Primeira Liga
# BRA: Brasileirão
# ARG: Liga Profesional
# KOR: K League 1
# JPN: J1 League
# KSA: Saudi Pro League

target_league_ids = [
    "premier-league", "championship",
    "laliga",
    "bundesliga",
    "serie-a",
    "ligue-1",
    "eredivisie",
    "por-primeira-liga",
    "brasileirao",
    "liga-profesional",
    "k-league-1",
    "j1-league",
    "saudi-pro-league"
]

curated_leagues = [l for l in all_leagues if l.get("id") in target_league_ids]
print(f"Retained {len(curated_leagues)} leagues.")

# Comprehensive Club Reputation Polish
# Format: [domestic_rep (0-5), continental_rep (0-5), international_rep (0-5)]
club_custom_reputations = {
    # England - Premier League
    "manchester-city": (5, 5, 5), "liverpool": (5, 5, 5), "arsenal": (5, 5, 5),
    "chelsea": (4, 4, 5), "manchester-united": (4, 4, 5), "tottenham": (4, 4, 4),
    "aston-villa": (3, 3, 4), "newcastle": (3, 3, 4), "brighton": (2, 2, 3),
    "west-ham": (2, 2, 3), "everton": (2, 1, 3), "brentford": (2, 1, 3),
    "crystal-palace": (2, 1, 3), "fulham": (2, 1, 3), "bournemouth": (1, 1, 2),
    "wolverhampton": (2, 1, 3), "nottingham-forest": (2, 1, 2), "leicester": (2, 1, 3),
    "ipswich": (1, 0, 2), "southampton": (1, 0, 2),

    # England - Championship
    "burnley": (1, 0, 2), "leeds": (1, 0, 2), "sheffield-utd": (1, 0, 2),
    "norwich": (1, 0, 2), "middlesbrough": (1, 0, 2), "west-brom": (1, 0, 2),
    "sunderland": (1, 0, 2), "watford": (1, 0, 2),

    # Spain - LaLiga
    "real-madrid": (5, 5, 5), "barcelona": (5, 5, 5), "atletico-madrid": (4, 4, 4),
    "athletic-club": (3, 3, 3), "real-sociedad": (3, 3, 3), "real-betis": (3, 3, 3),
    "villarreal": (3, 3, 3), "sevilla": (3, 3, 4), "valencia": (2, 2, 3),
    "girona": (3, 3, 3), "celta-vigo": (2, 1, 2), "osasuna": (2, 1, 2),
    "getafe": (2, 0, 2), "mallorca": (2, 1, 2), "rayo-vallecano": (2, 0, 2),
    "alaves": (1, 0, 2), "las-palmas": (1, 0, 2), "espanyol": (2, 0, 2),
    "leganes": (1, 0, 1), "valladolid": (1, 0, 1),

    # Germany - Bundesliga
    "bayern-munchen": (5, 5, 5), "bayer-leverkusen": (5, 4, 5), "borussia-dortmund": (4, 4, 5),
    "rb-leipzig": (4, 4, 4), "eintracht-frankfurt": (3, 3, 4), "vfb-stuttgart": (3, 3, 3),
    "wolfsburg": (2, 2, 3), "borussia-monchengladbach": (2, 2, 3), "sc-freiburg": (2, 2, 3),
    "union-berlin": (2, 2, 2), "werder-bremen": (2, 1, 2), "augsburg": (2, 0, 2),
    "mainz": (2, 0, 2), "hoffenheim": (2, 2, 2), "st-pauli": (1, 0, 2),
    "heidenheim": (2, 2, 2), "bochum": (1, 0, 1), "holstein-kiel": (1, 0, 1),

    # Italy - Serie A
    "inter": (5, 5, 5), "juventus": (5, 4, 5), "milan": (4, 4, 5),
    "napoli": (4, 3, 4), "roma": (3, 3, 4), "lazio": (3, 3, 4),
    "atalanta": (3, 4, 4), "fiorentina": (3, 3, 3), "bologna": (3, 3, 3),
    "torino": (2, 1, 3), "udinese": (2, 0, 2), "genoa": (2, 0, 2),
    "cagliari": (2, 0, 2), "parma": (2, 0, 2), "hellas-verona": (2, 0, 2),
    "monza": (2, 0, 2), "lecce": (1, 0, 2), "empoli": (1, 0, 2),
    "como": (2, 0, 2), "venezia": (1, 0, 2),

    # France - Ligue 1
    "paris-saint-germain": (5, 5, 5), "monaco": (3, 3, 4), "marseille": (3, 3, 4),
    "lyon": (3, 3, 4), "lille": (3, 3, 3), "rennes": (2, 2, 3),
    "lens": (3, 2, 3), "nice": (2, 2, 3), "reims": (2, 1, 2),
    "toulouse": (2, 1, 2), "strasbourg": (2, 1, 2), "brest": (3, 3, 2),
    "nantes": (2, 0, 2), "montpellier": (2, 0, 2), "auxerre": (1, 0, 2),
    "le-havre": (1, 0, 1), "saint-etienne": (2, 0, 2), "angers": (1, 0, 1),

    # Netherlands - Eredivisie
    "ajax": (4, 3, 4), "psv": (4, 3, 4), "feyenoord": (4, 3, 4),
    "az": (3, 2, 3), "twente": (2, 2, 3), "utrecht": (2, 1, 2),

    # Portugal - Primeira Liga
    "benfica": (4, 4, 4), "sporting-cp": (4, 4, 4), "porto": (4, 4, 4),
    "braga": (3, 3, 3), "vitoria-guimaraes": (2, 1, 2),

    # Brazil - Brasileirao
    "flamengo": (5, 5, 3), "palmeiras": (5, 5, 3), "sao-paulo": (4, 4, 3),
    "fluminense": (4, 4, 3), "atletico-mineiro": (4, 4, 3), "botafogo": (4, 4, 3),
    "corinthians": (4, 3, 3), "gremio": (4, 4, 3), "internacional": (4, 4, 3),
    "cruzeiro": (3, 3, 2), "vasco-da-gama": (3, 2, 2), "bahia": (3, 2, 2),
    "fortaleza": (3, 3, 2), "athletico-paranaense": (3, 3, 2),

    # Argentina - Liga Profesional
    "river-plate": (5, 5, 3), "boca-juniors": (5, 5, 3),
    "racing-club": (4, 3, 2), "independiente": (3, 2, 2), "san-lorenzo": (3, 2, 2),
    "estudiantes-de-la-plata": (4, 3, 2), "velez-sarsfield": (3, 2, 2),

    # Saudi Arabia - Saudi Pro League
    "al-hilal": (5, 4, 3), "al-nassr": (5, 4, 3), "al-ittihad": (4, 3, 3),
    "al-ahli": (4, 3, 3), "al-shabab": (3, 2, 2), "al-ettifaq": (3, 1, 2),

    # South Korea - K League 1
    "ulsan-hd-fc": (5, 4, 2), "jeonbuk-hyundai-motors": (5, 4, 2),
    "fc-seoul": (4, 3, 2), "pohang-steelers": (4, 3, 2),
    "gwangju-fc": (3, 2, 1), "gangwon-fc": (3, 2, 1), "daejeon-hana-citizen": (3, 1, 1),
    "incheon-united": (2, 1, 1), "jeju-sk-fc": (2, 1, 1), "gimcheon-sangmu-fc": (2, 1, 1),
    "fc-anyang": (2, 0, 1), "bucheon-fc-1995": (2, 0, 1),

    # Japan - J1 League
    "vissel-kobe": (5, 4, 2), "yokohama-f-marinos": (4, 3, 2), "kawasaki-frontale": (4, 3, 2),
    "urawa-red-diamonds": (4, 4, 2), "sanfrecce-hiroshima": (4, 3, 2),
    "kashima-antlers": (3, 2, 1), "nagoya-grampus": (3, 2, 1), "gamba-osaka": (3, 2, 1),
    "fc-tokyo": (3, 2, 1), "cerezo-osaka": (3, 1, 1)
}

# Apply reputations to teams
for l in curated_leagues:
    for t in l.get("teams", []):
        tid = t.get("id")
        if tid in club_custom_reputations:
            d_rep, c_rep, i_rep = club_custom_reputations[tid]
            t["domestic_reputation"] = d_rep
            t["continental_reputation"] = c_rep
            t["international_reputation"] = i_rep
        else:
            # Default fallback adjustment: if tier 2 league (Championship), cap int rep at 1
            if l.get("id") == "championship":
                t["international_reputation"] = min(1, t.get("international_reputation", 0))
                t["domestic_reputation"] = min(1, t.get("domestic_reputation", 0))

# Save curated leagues
with open(os.path.join(target_dir, "db_leagues.json"), "w", encoding="utf-8") as f:
    json.dump(curated_leagues, f, ensure_ascii=False, indent=2)

print("Saved updated db_leagues.json successfully!")
