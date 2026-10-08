with open("CareerSimulatorPage.js", "r", encoding="utf-8") as f:
    text = f.read()

pos = text.find('{"id":"laliga"')
# trace backwards to find where the array starts
# Look for const something = [ ...
arr_start = text.rfind('=[{', 0, pos)
print("arr_start pos:", arr_start)
if arr_start != -1:
    arr_start += 1 # skip '='
    # Find matching ']'
    count = 0
    arr_end = -1
    for i in range(arr_start, len(text)):
        if text[i] == '[':
            count += 1
        elif text[i] == ']':
            count -= 1
            if count == 0:
                arr_end = i + 1
                break
    print(f"Array bounds: {arr_start} to {arr_end}, size: {arr_end - arr_start}")
    import json
    data = json.loads(text[arr_start:arr_end])
    print(f"Parsed {len(data)} leagues!")
    with open("database_leagues.json", "w", encoding="utf-8") as out:
        json.dump(data, out, ensure_ascii=False, indent=2)
    print("Saved database_leagues.json!")
