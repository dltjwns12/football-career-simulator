with open("CareerSimulatorPage.js", "r", encoding="utf-8") as f:
    text = f.read()

pos = text.find('"id":"real-madrid"')
if pos == -1:
    pos = text.find('id:"real-madrid"')
print("Found pos:", pos)

start = max(0, pos - 500)
end = min(len(text), pos + 1500)

with open("real_madrid_snippet.txt", "w", encoding="utf-8") as out:
    out.write(text[start:end])

print("Saved snippet")
