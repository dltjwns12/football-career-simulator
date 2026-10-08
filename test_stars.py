import json

with open(r"C:\Users\A\.gemini\antigravity\scratch\football-career-simulator\db_leagues.json", "r", encoding="utf-8") as f:
    leagues = json.load(f)

print("Total leagues:", len(leagues))
all_teams = [t for l in leagues for t in l.get("teams", [])]
print("Total teams:", len(all_teams))

# Check star rating distribution
stars = [t.get("star_rating", 0) for t in all_teams]
from collections import Counter
c = Counter(stars)
for star in sorted(c.keys(), reverse=True):
    print(f"  {star}성: {c[star]}개 클럽")

print("Max star:", max(stars), "Min star:", min(stars))
assert max(stars) <= 5.0 and min(stars) >= 1.0, "Star rating must be between 1.0 and 5.0"
print("Star rating verification PASSED!")
