with open("CareerSimulatorPage.js", "r", encoding="utf-8") as f:
    text = f.read()

pos = 95348
# Let's inspect text from pos-3000 to pos+200
# And search backwards for JSON.parse or similar
p = text.rfind('JSON.parse(', 0, pos)
print("rfind JSON.parse(:", p)
if p != -1:
    print(text[p:p+50])
    # find closing `)`
    # The string inside JSON.parse(`...`)
    quote_char = text[p+len('JSON.parse(')]
    print("Quote char:", quote_char)
    end_p = text.find(quote_char + ')', p)
    raw = text[p+len('JSON.parse(')+1 : end_p]
    import json
    data = json.loads(raw)
    print("Parsed countries count:", len(data))
    with open("database_countries.json", "w", encoding="utf-8") as out:
        json.dump(data, out, ensure_ascii=False, indent=2)
