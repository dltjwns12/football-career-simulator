with open("CareerSimulatorPage.js", "r", encoding="utf-8") as f:
    text = f.read()

pos = text.find('continental_secondary')
start = max(0, pos - 500)
end = min(len(text), pos + 3000)

with open("trophy_prob_logic.txt", "w", encoding="utf-8") as out:
    out.write(text[start:end])

print("Trophy logic written")
