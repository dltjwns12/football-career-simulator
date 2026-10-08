import re
import json

with open("CareerSimulatorPage.js", "r", encoding="utf-8") as f:
    text = f.read()

# Let's search for all league definitions:
# e.g., "id": "esp-laliga", "name": "LaLiga", ...
leagues = []
for m in re.finditer(r'\{"id":"([^"]+)","name":"([^"]+)","country":"([^"]+)"', text):
    start = m.start()
    # parse the league object
    count = 0
    end = -1
    for i in range(start, len(text)):
        if text[i] == '{':
            count += 1
        elif text[i] == '}':
            count -= 1
            if count == 0:
                end = i + 1
                break
    if end != -1:
        try:
            obj = json.loads(text[start:end])
            leagues.append({
                "id": obj.get("id"),
                "name": obj.get("name"),
                "country": obj.get("country"),
                "confederation": obj.get("confederation"),
                "tier": obj.get("tier"),
                "teams_count": len(obj.get("teams", []))
            })
        except Exception:
            pass

print(f"Found {len(leagues)} leagues:")
for l in leagues:
    print(f" - {l['name']} ({l['country']}, {l['confederation']}, Tier {l['tier']}): {l['teams_count']} teams")

with open("all_leagues_summary.json", "w", encoding="utf-8") as out:
    json.dump(leagues, out, ensure_ascii=False, indent=2)
