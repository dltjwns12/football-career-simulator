import re
import json

with open("CareerSimulatorPage.js", "r", encoding="utf-8") as f:
    text = f.read()

# Let's search for the events definition in text around "training_extra"
idx = text.find("training_extra")
print("Index of training_extra:", idx)
start = max(0, idx - 500)
end = min(len(text), idx + 25000)
event_chunk = text[start:end]

with open("event_chunk.txt", "w", encoding="utf-8") as f:
    f.write(event_chunk)

# Search for achievement details
ach_idx = text.find("king_of_america")
start_ach = max(0, ach_idx - 500)
end_ach = min(len(text), ach_idx + 15000)
with open("ach_chunk.txt", "w", encoding="utf-8") as f:
    f.write(text[start_ach:end_ach])

print("Chunks written")
