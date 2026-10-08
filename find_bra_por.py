import json

with open(r"C:\Users\A\.gemini\antigravity\scratch\football-career-simulator\db_leagues.json", "r", encoding="utf-8") as f:
    all_leagues = json.load(f)

res = []
for l in all_leagues:
    name = l.get("name", "")
    country = l.get("country_fifa_code", "")
    if country in ["BRA", "POR"] or any(k in name.lower() for k in ["bra", "por"]):
        res.append({"id": l.get("id"), "name": name, "country": country})

with open("bra_por_res.json", "w", encoding="utf-8") as out:
    json.dump(res, out, ensure_ascii=False, indent=2)

print("Saved bra_por_res.json, count:", len(res))
