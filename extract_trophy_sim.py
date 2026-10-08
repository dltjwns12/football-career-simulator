import re

with open("CareerSimulatorPage.js", "r", encoding="utf-8") as f:
    text = f.read()

# Let's search for trophy simulation logic
pos = text.find('clubTrophyOverride')
if pos != -1:
    print("Found clubTrophyOverride at:", pos)
    with open("trophy_sim_code.txt", "w", encoding="utf-8") as out:
        out.write(text[pos-400:pos+3500])
else:
    print("clubTrophyOverride not found")
