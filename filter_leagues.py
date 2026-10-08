import json
import os

target_dir = r"C:\Users\A\.gemini\antigravity\scratch\football-career-simulator"

with open(os.path.join(target_dir, "db_leagues.json"), "r", encoding="utf-8") as f:
    all_leagues = json.load(f)

print("Original leagues count:", len(all_leagues))

# Keep only the requested leagues:
# Major European leagues:
# - Premier League, Championship (ENG)
# - LaLiga, LaLiga 2 (ESP)
# - Bundesliga (GER)
# - Serie A (ITA)
# - Ligue 1 (FRA)
# - Eredivisie (NED)
# - Primeira Liga (POR)
# - (Optional top European): Scottish Premiership (SCO), Belgian Pro League (BEL), Turkish Super Lig (TUR)
# Requested Non-European:
# - Brazil (BRA)
# - Argentina (ARG)
# - South Korea (KOR)
# - Japan (JPN)
# - Saudi Arabia (KSA)

allowed_countries = {
    "ENG": ["premier-league", "championship"],
    "ESP": ["laliga", "laliga-hypermotion"],
    "GER": ["bundesliga"],
    "ITA": ["serie-a"],
    "FRA": ["ligue-1"],
    "NED": ["eredivisie"],
    "POR": ["primeira-liga"],
    "BRA": ["brasileirao-serie-a"],
    "ARG": ["liga-profesional"],
    "KOR": ["k-league-1"],
    "JPN": ["j1-league"],
    "KSA": ["saudi-pro-league"]
}

filtered_leagues = []
for l in all_leagues:
    country = l.get("country_fifa_code")
    lid = l.get("id")
    if country in allowed_countries:
        # Check if specific leagues are specified
        target_ids = allowed_countries[country]
        if not target_ids or lid in target_ids:
            filtered_leagues.append(l)

# If J1 League or any specified wasn't found under that ID, let's check
found_countries = set(l.get("country_fifa_code") for l in filtered_leagues)
print("Filtered leagues count:", len(filtered_leagues))
for l in filtered_leagues:
    print(f" - {l['name']} ({l.get('country_fifa_code')}, id: {l.get('id')}): {len(l.get('teams', []))} teams")

missing = set(allowed_countries.keys()) - found_countries
print("Missing countries from filter:", missing)
