import json

with open("database_leagues.json", "r", encoding="utf-8") as f:
    leagues = json.load(f)

k_teams = [l for l in leagues if l.get("country_fifa_code") == "KOR"][0]["teams"]
for t in k_teams:
    print(t["name"], t["short_name"], t["domestic_reputation"], t["continental_reputation"])
