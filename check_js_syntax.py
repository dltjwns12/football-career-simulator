with open(r"C:\Users\A\.gemini\antigravity\scratch\football-career-simulator\data.js", "r", encoding="utf-8") as f:
    code = f.read()

print("data.js size:", len(code))
print("First 100 chars:", code[:100])
print("Last 100 chars:", code[-100:])
