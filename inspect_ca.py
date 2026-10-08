with open("CareerSimulatorPage.js", "r", encoding="utf-8") as f:
    text = f.read()

pos = text.find('clubTrophyOverride')
print("Function Ca snippet:")
print(text[pos-1000:pos])
