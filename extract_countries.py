import json

with open("CareerSimulatorPage.js", "r", encoding="utf-8") as f:
    text = f.read()

pos = text.find('kit_tertiary_color":"#FFFFFF"}]')
print("Found end of Kn at:", pos)
# Find start of Kn
# Look backwards for JSON.parse(`[
p = text.rfind('JSON.parse(`[', 0, pos)
print("Start of Kn JSON.parse:", p)
if p != -1:
    start_bracket = p + len('JSON.parse(`')
    end_bracket = pos + len('kit_tertiary_color":"#FFFFFF"}]')
    raw_countries = text[start_bracket:end_bracket]
    data = json.loads(raw_countries)
    print(f"Extracted {len(data)} countries!")
    with open("database_countries.json", "w", encoding="utf-8") as out:
        json.dump(data, out, ensure_ascii=False, indent=2)
