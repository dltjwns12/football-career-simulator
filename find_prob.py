with open("CareerSimulatorPage.js", "r", encoding="utf-8") as f:
    text = f.read()

pos = text.find('Wt={league:')
if pos == -1:
    pos = text.find('league:[')
print("pos of league prob array:", pos)
print(text[pos-200:pos+500])
