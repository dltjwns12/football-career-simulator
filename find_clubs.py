import re
import json

with open("CareerSimulatorPage.js", "r", encoding="utf-8") as f:
    text = f.read()

# Let's search for club or league lists
# e.g., Real Madrid, Manchester City, Boca Juniors, River Plate, Barcelona, etc.
clubs_to_search = ["Real Madrid", "Barcelona", "Boca Juniors", "River Plate", "Bayern", "PSG"]
for club in clubs_to_search:
    p = text.find(club)
    print(f"Club '{club}' pos:", p)

if p != -1:
    pos = text.find("Real Madrid")
    with open("clubs_snippet.txt", "w", encoding="utf-8") as out:
        out.write(text[pos-200:pos+5000])

print("Done")
