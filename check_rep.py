import json
import sys

sys.stdout.reconfigure(encoding='utf-8')

target_dir = r"C:\Users\A\.gemini\antigravity\scratch\football-career-simulator"
with open(f"{target_dir}\\db_leagues.json", "r", encoding="utf-8") as f:
    all_leagues = json.load(f)

curated_league_ids = [
    "premier-league", "championship",
    "laliga", "laliga-hypermotion",
    "bundesliga", "serie-a", "ligue-1",
    "eredivisie", "por-primeira-liga",
    "brasileirao", "liga-profesional",
    "k-league-1", "j1-league", "saudi-pro-league"
]

curated = [l for l in all_leagues if l.get("id") in curated_league_ids]

print("Curated leagues count:", len(curated))
for l in curated:
    teams = l.get("teams", [])
    # Sort teams by international reputation descending
    sorted_teams = sorted(teams, key=lambda x: (x.get("international_reputation", 0), x.get("continental_reputation", 0)), reverse=True)
    sample = [(t.get("name"), t.get("domestic_reputation"), t.get("continental_reputation"), t.get("international_reputation")) for t in sorted_teams[:4]]
    print(f"\n[{l.get('name')} - {l.get('country_fifa_code')}] Total teams: {len(teams)}")
    for s in sample:
        print(f"  {s[0]}: dom={s[1]}, cont={s[2]}, int={s[3]}")
