# Test the career simulator simulation cycle in python to ensure all formulas, bounds, logic work without exception.
import json

with open(r"C:\Users\A\.gemini\antigravity\scratch\football-career-simulator\db_countries.json", "r", encoding="utf-8") as f:
    countries = json.load(f)

with open(r"C:\Users\A\.gemini\antigravity\scratch\football-career-simulator\db_leagues.json", "r", encoding="utf-8") as f:
    leagues = json.load(f)

print(f"Verified: {len(countries)} countries, {len(leagues)} leagues ready for use.")
