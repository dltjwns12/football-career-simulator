import json

with open("database_leagues.json", "r", encoding="utf-8") as f:
    leagues = json.load(f)

korean_leagues = [l for l in leagues if l.get("country_fifa_code") == "KOR"]
print("Korean leagues in db:", len(korean_leagues))
for kl in korean_leagues:
    print(kl["name"], len(kl.get("teams", [])))
