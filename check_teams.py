with open("CareerSimulatorPage.js", "r", encoding="utf-8") as f:
    text = f.read()

pos = text.find('id:"real-madrid"')
start = max(0, pos - 1500)
end = min(len(text), pos + 1500)

with open("teams_context_utf8.txt", "w", encoding="utf-8") as out:
    out.write(text[start:end])

print("Written successfully")
