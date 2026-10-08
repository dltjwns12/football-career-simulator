import re
import json

with open("CareerSimulatorPage.js", "r", encoding="utf-8") as f:
    text = f.read()

# Let's find where leagues are defined
# Search for league IDs or names
leagues_match = re.findall(r'id:\s*"([a-z0-9_-]+)",\s*name:\s*"([^"]+)",\s*country:\s*"([^"]+)"', text)
print("Leagues found:", len(leagues_match), leagues_match[:10])

# Let's search for the big teams list or countries list
# Let's find countries
countries = re.findall(r'code:\s*"([A-Z]{3})",\s*name:\s*"([^"]+)"', text)
print("Countries found:", len(countries), countries[:10])

with open("parsed_db.json", "w", encoding="utf-8") as out:
    json.dump({
        "leagues": leagues_match,
        "countries": countries
    }, out, ensure_ascii=False, indent=2)
