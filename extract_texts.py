import re
import json

with open("CareerSimulatorPage.js", "r", encoding="utf-8") as f:
    text = f.read()

# Let's search where event titles, descriptions, and option texts are defined
# We can search for strings like "hamstring" or "personal_coach" or "decisive_penalty"
# and look around them.

matches = [m.start() for m in re.finditer(r'training_extra', text)]
print("training_extra occurrences:", len(matches))

found_sections = []
for idx in matches:
    start = max(0, idx - 200)
    end = min(len(text), idx + 2000)
    found_sections.append(text[start:end])

with open("sections.txt", "w", encoding="utf-8") as out:
    for i, s in enumerate(found_sections):
        out.write(f"=== OCCURRENCE {i} ===\n{s}\n\n")

# Also find where achievement texts are defined
ach_pos = text.find("Rey de América")
if ach_pos != -1:
    with open("ach_texts.txt", "w", encoding="utf-8") as out:
        out.write(text[ach_pos-200:ach_pos+3000])

print("Sections extracted")
