import json
import re

with open("event_chunk.txt", "r", encoding="utf-8") as f:
    ev = f.read()

# Let's search for objects inside ev that define the events
# For example, look for strings in Spanish
events_extracted = []
# Find patterns like id: "...", title: "...", description: "...", options: [...]
# Let's inspect raw text segments
with open("extracted_events.txt", "w", encoding="utf-8") as out:
    # Let's find matches of string literals or object structures
    lines = ev.split(";")
    for line in lines:
        if any(w in line for w in ["training_extra", "decisive_penalty", "options", "title"]):
            out.write(line + "\n---\n")

print("Done extracting events")
