with open("CareerSimulatorPage.js", "r", encoding="utf-8") as f:
    text = f.read()

pos = text.find('{"id":"laliga"')
# Let's see the 200 characters before pos
print("Context before pos:")
print(text[pos-200:pos+50])

# Find the start of the list:
# It's a list containing leagues. Look backwards for '[' that encloses this element.
p = pos
depth = 0
while p > 0:
    p -= 1
    if text[p] == ']':
        depth += 1
    elif text[p] == '[':
        if depth == 0:
            # We found the opening bracket of the enclosing array!
            print("Found enclosing bracket at:", p)
            print("Snippet before opening bracket:", text[p-50:p+10])
            break
        else:
            depth -= 1

if p > 0:
    arr_start = p
    # count forward to find matching ']'
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
