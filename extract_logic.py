import re

with open("CareerSimulatorPage.js", "r", encoding="utf-8") as f:
    text = f.read()

# Let's search for how goals/assists/ratings are generated
pos = text.find('totals.goals')
print("pos of totals.goals:", pos)
if pos != -1:
    with open("goals_logic.txt", "w", encoding="utf-8") as out:
        out.write(text[pos-500:pos+3000])

# Let's search for contract / transfer offer generation
transfer_pos = text.find('transfer_offer')
if transfer_pos == -1:
    transfer_pos = text.find('academy_offer')
print("pos of academy_offer:", transfer_pos)
if transfer_pos != -1:
    with open("transfer_logic.txt", "w", encoding="utf-8") as out:
        out.write(text[transfer_pos-500:transfer_pos+3000])

print("Written logic files")
