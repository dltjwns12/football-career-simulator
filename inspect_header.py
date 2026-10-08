with open("CareerSimulatorPage.js", "r", encoding="utf-8") as f:
    text = f.read()

pos = text.find('"domestic_cup_id":"esp-copa-del-rey"')
print("Snippet before domestic_cup_id:")
print(text[pos-300:pos+100])
