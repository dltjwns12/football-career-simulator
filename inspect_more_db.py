import json

with open("CareerSimulatorPage.js", "r", encoding="utf-8") as f:
    text = f.read()

before = text[max(0, 105883 - 5000):105883]
with open("data_before_leagues.txt", "w", encoding="utf-8") as out:
    out.write(before)

after = text[486309:486309 + 8000]
with open("data_after_leagues.txt", "w", encoding="utf-8") as out:
    out.write(after)

print("Saved surrounding snippets!")
