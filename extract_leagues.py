import json
import re

with open("CareerSimulatorPage.js", "r", encoding="utf-8") as f:
    text = f.read()

# Let's find the leagues array
# It contains items like: {"id":"esp-laliga" or similar, "confederation":"UEFA", ...}
pos = text.find('"domestic_cup_id":"esp-copa-del-rey"')
print("Found domestic_cup_id pos:", pos)

# Find the start of the array or object
start = text.rfind('[', 0, pos)
# Now let's try to find where this JSON array ends or extract it
# Let's write a small bracket counter
count = 0
end = -1
for i in range(start, len(text)):
    if text[i] == '[':
        count += 1
    elif text[i] == ']':
        count -= 1
        if count == 0:
            end = i + 1
            break

print(f"Array range: {start} to {end}, length: {end - start}")
if end != -1:
    raw_json = text[start:end]
    try:
        data = json.loads(raw_json)
        print("Successfully parsed JSON leagues! Count:", len(data))
        with open("leagues_data.json", "w", encoding="utf-8") as f_out:
            json.dump(data, f_out, ensure_ascii=False, indent=2)
    except Exception as e:
        print("JSON parse error:", e)
        with open("raw_leagues.txt", "w", encoding="utf-8") as f_out:
            f_out.write(raw_json[:2000])
