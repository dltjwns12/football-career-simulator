import json
import os

with open("database_leagues.json", "r", encoding="utf-8") as f:
    leagues = json.load(f)

with open("database_countries.json", "r", encoding="utf-8") as f:
    countries = json.load(f)

print(f"Loaded {len(leagues)} leagues, {len(countries)} countries")

# Build a compact, rich database for the frontend:
# Top leagues and clubs
# Keep major leagues and teams, with domestic and continental reputations
# Also translate country names to Korean!

korean_countries = {
    "KOR": "대한민국", "ENG": "잉글랜드", "FRA": "프랑스", "GER": "독일", "ESP": "스페인",
    "ITA": "이탈리아", "BRA": "브라질", "ARG": "아르헨티나", "POR": "포르투갈", "NED": "네덜란드",
    "BEL": "벨기에", "CRO": "크로아티아", "URU": "우루과이", "JPN": "일본", "USA": "미국",
    "MEX": "멕시코", "COL": "콜롬비아", "CHI": "칠레", "SEN": "세네갈", "MAR": "모로코",
    "EGY": "이집트", "NGA": "나이지리아", "GHA": "가나", "CIV": "코트디부아르", "CMR": "카메룬",
    "ALG": "알제리", "NOR": "노르웨이", "SWE": "스웨덴", "DEN": "덴마크", "SUI": "스위스",
    "AUT": "오스트리아", "POL": "폴란드", "SRB": "세르비아", "TUR": "튀르키예", "UKR": "우크라이나",
    "CZE": "체코", "SCO": "스코틀랜드", "WAL": "웨일스", "NIR": "북아일랜드", "IRL": "아일랜드",
    "GRE": "그리스", "HUN": "헝가리", "ROU": "루마니아", "BUL": "불가리아", "SVK": "슬로바키아",
    "SVN": "슬로베니아", "FIN": "핀란드", "ISL": "아이슬란드", "AUS": "호주", "NZL": "뉴질랜드",
    "KSA": "사우디아라비아", "IRN": "이란", "QAT": "카타르", "UAE": "아랍에미리트", "UZB": "우즈베키스탄",
    "CHN": "중국", "THA": "태국", "VIE": "베트남", "IDN": "인도네시아", "CAN": "캐나다",
    "CRC": "코스타리카", "PAN": "파나마", "JAM": "자메이카", "ECU": "에콰도르", "PER": "페루",
    "PAR": "파라과이", "VEN": "베네수엘라", "BOL": "볼리비아"
}

# Translate league names into friendly Korean names
league_korean_names = {
    "laliga": "라리가 (스페인 1부)",
    "laliga-hypermotion": "라리가 2 (스페인 2부)",
    "premier-league": "프리미어리그 (잉글랜드 1부)",
    "championship": "챔피언십 (잉글랜드 2부)",
    "league-one": "리그 1 (잉글랜드 3부)",
    "serie-a": "세리에 A (이탈리아 1부)",
    "serie-b": "세리에 B (이탈리아 2부)",
    "bundesliga": "분데스리가 (독일 1부)",
    "2-bundesliga": "2. 분데스리가 (독일 2부)",
    "ligue-1": "리그 1 (프랑스 1부)",
    "ligue-2": "리그 2 (프랑스 2부)",
    "eredivisie": "에레디비시 (네덜란드 1부)",
    "primeira-liga": "프리메이라리가 (포르투갈 1부)",
    "brasileirao-serie-a": "세리에 A (브라질 1부)",
    "liga-profesional": "프로페셔널 리그 (아르헨티나 1부)",
    "saudi-pro-league": "사우디 프로리그 (사우디 1부)",
    "mls": "메이저리그 사커 (미국 MLS)",
    "k-league-1": "K리그 1 (대한민국 1부)",
    "j1-league": "J1리그 (일본 1부)"
}

processed_countries = []
for c in countries:
    fifa = c.get("fifa_code")
    ko_name = korean_countries.get(fifa, c.get("name_en"))
    processed_countries.append({
        "name": ko_name,
        "name_en": c.get("name_en"),
        "fifa_code": fifa,
        "iso_alpha2": c.get("iso_alpha2"),
        "flag_url": c.get("flag_url"),
        "confederation": c.get("confederation"),
        "fifa_reputation": c.get("fifa_reputation", 0),
        "continental_reputation": c.get("continental_reputation", 0),
        "international_reputation": c.get("international_reputation", 0),
        "primary_color": c.get("primary_color", "#333")
    })

# Sort countries so KOR and major countries appear at top
priority_fifa = ["KOR", "ENG", "ESP", "FRA", "GER", "ITA", "BRA", "ARG", "POR", "NED", "JPN", "USA"]
processed_countries.sort(key=lambda x: (0 if x["fifa_code"] in priority_fifa else 1, priority_fifa.index(x["fifa_code"]) if x["fifa_code"] in priority_fifa else x["name"]))

target_dir = r"C:\Users\A\.gemini\antigravity\scratch\football-career-simulator"
os.makedirs(target_dir, exist_ok=True)

with open(os.path.join(target_dir, "db_countries.json"), "w", encoding="utf-8") as out:
    json.dump(processed_countries, out, ensure_ascii=False, indent=2)

with open(os.path.join(target_dir, "db_leagues.json"), "w", encoding="utf-8") as out:
    json.dump(leagues, out, ensure_ascii=False, indent=2)

print("Saved db_countries.json and db_leagues.json in target directory!")
