import json
import os
import sys

sys.stdout.reconfigure(encoding='utf-8')

target_dir = r"C:\Users\A\.gemini\antigravity\scratch\football-career-simulator"

with open(f"{target_dir}\\db_leagues.json", "r", encoding="utf-8") as f:
    leagues = json.load(f)

# FIFA / EA FC Official Star Rating tiers (1.0 to 5.0)
# Map known clubs directly to their FIFA star ratings
fifa_ratings = {
    # === 5.0 Stars (EA FC Top Tier: ~85+ OVR) ===
    "real-madrid": 5.0, "manchester-city": 5.0, "bayern-munchen": 5.0,
    "arsenal": 5.0, "liverpool": 5.0, "barcelona": 5.0, "paris-saint-germain": 5.0,
    "inter": 5.0,

    # === 4.5 Stars (EA FC 4.5 Star: ~81-84 OVR) ===
    "bayer-leverkusen": 4.5, "atletico-madrid": 4.5, "borussia-dortmund": 4.5,
    "chelsea": 4.5, "manchester-united": 4.5, "tottenham": 4.5,
    "juventus": 4.5, "milan": 4.5, "napoli": 4.5,
    "aston-villa": 4.5, "newcastle": 4.5, "atalanta": 4.5, "rb-leipzig": 4.5,

    # === 4.0 Stars (EA FC 4 Star: ~77-80 OVR) ===
    "roma": 4.0, "lazio": 4.0, "fiorentina": 4.0, "bologna": 4.0,
    "athletic-club": 4.0, "real-sociedad": 4.0, "real-betis": 4.0,
    "villarreal": 4.0, "sevilla": 4.0, "girona": 4.0,
    "eintracht-frankfurt": 4.0, "vfb-stuttgart": 4.0,
    "monaco": 4.0, "marseille": 4.0, "lyon": 4.0, "lille": 4.0,
    "benfica": 4.0, "sporting-cp": 4.0, "porto": 4.0,
    "ajax": 4.0, "psv": 4.0, "feyenoord": 4.0,
    "west-ham": 4.0, "brighton": 4.0,

    # === 3.5 Stars (EA FC 3.5 Star: ~73-76 OVR) ===
    "everton": 3.5, "wolverhampton": 3.5, "fulham": 3.5, "brentford": 3.5,
    "crystal-palace": 3.5, "bournemouth": 3.5, "nottingham-forest": 3.5,
    "celta-vigo": 3.5, "osasuna": 3.5, "valencia": 3.5, "mallorca": 3.5,
    "borussia-monchengladbach": 3.5, "sc-freiburg": 3.5, "wolfsburg": 3.5, "hoffenheim": 3.5,
    "nice": 3.5, "lens": 3.5, "rennes": 3.5, "brest": 3.5,
    "torino": 3.5, "udinese": 3.5, "genoa": 3.5,
    "braga": 3.5, "az": 3.5, "twente": 3.5,
    "al-hilal": 3.5, "al-nassr": 3.5, "al-ittihad": 3.5, "al-ahli": 3.5,
    "flamengo": 3.5, "palmeiras": 3.5, "river-plate": 3.5, "boca-juniors": 3.5,

    # === 3.0 Stars (EA FC 3 Star: ~69-72 OVR) ===
    # Top Championship, Premier League relegation battlers, K League/J League leaders
    "leicester": 3.0, "ipswich": 3.0, "southampton": 3.0,
    "burnley": 3.0, "leeds": 3.0, "sheffield-utd": 3.0, "norwich": 3.0,
    "middlesbrough": 3.0, "west-brom": 3.0, "sunderland": 3.0, "watford": 3.0,
    "getafe": 3.0, "rayo-vallecano": 3.0, "alaves": 3.0, "las-palmas": 3.0, "espanyol": 3.0,
    "augsburg": 3.0, "mainz": 3.0, "werder-bremen": 3.0, "union-berlin": 3.0, "heidenheim": 3.0, "st-pauli": 3.0,
    "cagliari": 3.0, "parma": 3.0, "hellas-verona": 3.0, "empoli": 3.0, "como": 3.0, "monza": 3.0, "lecce": 3.0,
    "toulouse": 3.0, "strasbourg": 3.0, "nantes": 3.0, "montpellier": 3.0, "reims": 3.0, "auxerre": 3.0, "saint-etienne": 3.0,
    "ulsan-hd-fc": 3.0, "jeonbuk-hyundai-motors": 3.0,
    "vissel-kobe": 3.0, "yokohama-f-marinos": 3.0, "kawasaki-frontale": 3.0, "urawa-red-diamonds": 3.0,
    "sao-paulo": 3.0, "fluminense": 3.0, "atletico-mineiro": 3.0, "botafogo": 3.0, "corinthians": 3.0, "gremio": 3.0, "internacional": 3.0,
    "racing-club": 3.0, "independiente": 3.0, "san-lorenzo": 3.0, "estudiantes-de-la-plata": 3.0, "velez-sarsfield": 3.0,
    "al-shabab": 3.0, "al-ettifaq": 3.0,

    # === 2.5 Stars (EA FC 2.5 Star: ~65-68 OVR) ===
    # K-League 1 / J1 League contenders, Championship mid table
    "fc-seoul": 2.5, "pohang-steelers": 2.5, "gwangju-fc": 2.5, "gangwon-fc": 2.5, "daejeon-hana-citizen": 2.5,
    "sanfrecce-hiroshima": 2.5, "kashima-antlers": 2.5, "nagoya-grampus": 2.5, "gamba-osaka": 2.5, "fc-tokyo": 2.5, "cerezo-osaka": 2.5,
    "cruzeiro": 2.5, "vasco-da-gama": 2.5, "bahia": 2.5, "fortaleza": 2.5, "athletico-paranaense": 2.5,
    "talleres-de-cordoba": 2.5, "lanus": 2.5, "newells-old-boys": 2.5, "rosario-central": 2.5, "argentinos-juniors": 2.5,

    # === 2.0 Stars (EA FC 2 Star: ~62-65 OVR) ===
    # K-League 1 / J1 lower, Saudi lower
    "incheon-united": 2.0, "jeju-sk-fc": 2.0, "gimcheon-sangmu-fc": 2.0, "fc-anyang": 2.0, "bucheon-fc-1995": 2.0,
    "avispa-fukuoka": 2.0, "sagan-tosu": 2.0, "kyoto-sanga": 2.0, "shonan-bellmare": 2.0, "albirex-niigata": 2.0, "kashiwa-reysol": 2.0,
    "jubilo-iwata": 2.0, "tokyo-verdy": 2.0, "machida-zelvia": 2.0, "consadole-sapporo": 2.0
}

# League baseline ratings for teams not explicitly mapped
league_defaults = {
    "premier-league": 3.5,
    "championship": 2.5,
    "laliga": 3.0,
    "bundesliga": 3.0,
    "serie-a": 3.0,
    "ligue-1": 3.0,
    "eredivisie": 2.5,
    "por-primeira-liga": 2.5,
    "brasileirao": 2.5,
    "liga-profesional": 2.5,
    "saudi-pro-league": 2.0,
    "k-league-1": 2.0,
    "j1-league": 2.0
}

for l in leagues:
    lid = l.get("id")
    def_rating = league_defaults.get(lid, 2.0)
    for t in l.get("teams", []):
        tid = t.get("id")
        rating = fifa_ratings.get(tid, def_rating)
        t["star_rating"] = rating
        
        # Synchronize domestic, continental, international reputations with FIFA star ratings:
        # Scale: 5.0 -> 5, 4.5 -> 4, 4.0 -> 4, 3.5 -> 3, 3.0 -> 2, 2.5 -> 2, 2.0 -> 1, 1.5 -> 1, 1.0 -> 1
        # Max is strictly 5, min is strictly 1!
        if rating >= 5.0:
            t["domestic_reputation"] = 5
            t["continental_reputation"] = 5
            t["international_reputation"] = 5
        elif rating >= 4.5:
            t["domestic_reputation"] = 4
            t["continental_reputation"] = 4
            t["international_reputation"] = 4
        elif rating >= 4.0:
            t["domestic_reputation"] = 4
            t["continental_reputation"] = 3
            t["international_reputation"] = 3
        elif rating >= 3.5:
            t["domestic_reputation"] = 3
            t["continental_reputation"] = 3
            t["international_reputation"] = 3
        elif rating >= 3.0:
            t["domestic_reputation"] = 3
            t["continental_reputation"] = 2
            t["international_reputation"] = 2
        elif rating >= 2.5:
            t["domestic_reputation"] = 2
            t["continental_reputation"] = 2
            t["international_reputation"] = 2
        else:
            t["domestic_reputation"] = 2
            t["continental_reputation"] = 1
            t["international_reputation"] = 1

# Save back to db_leagues.json
with open(os.path.join(target_dir, "db_leagues.json"), "w", encoding="utf-8") as f:
    json.dump(leagues, f, ensure_ascii=False, indent=2)

print("Saved updated db_leagues.json with FIFA star ratings!")
