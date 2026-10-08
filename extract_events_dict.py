import re
import json

with open("CareerSimulatorPage.js", "r", encoding="utf-8") as f:
    text = f.read()

# Let's search for the event texts dictionary
# Where are events like "training_extra", "personal_coach", "injury", etc. described in Spanish?
# Let's look for: training_extra:{title:
m = re.search(r'training_extra:\s*\{[^}]*title:\s*"([^"]+)"', text)
if m:
    print("Found training_extra title:", m.group(1))
    pos = m.start()
    with open("events_dict.txt", "w", encoding="utf-8") as out:
        out.write(text[pos-100:pos+15000])
else:
    # search where "preseason_camp" or option text is
    print("Searching for event text patterns...")
    pos = text.find("preseason_camp")
    print("preseason_camp pos:", pos)
    with open("events_dict.txt", "w", encoding="utf-8") as out:
        out.write(text[pos-500:pos+15000])
