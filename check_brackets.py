def check_brackets(filepath):
    with open(filepath, "r", encoding="utf-8") as f:
        code = f.read()
    stack = []
    pairs = {')': '(', '}': '{', ']': '['}
    in_string = False
    quote_char = ''
    in_line_comment = False
    in_block_comment = False
    i = 0
    while i < len(code):
        c = code[i]
        if in_line_comment:
            if c == '\n': in_line_comment = False
        elif in_block_comment:
            if c == '*' and i + 1 < len(code) and code[i+1] == '/':
                in_block_comment = False
                i += 1
        elif in_string:
            if c == '\\':
                i += 1
            elif c == quote_char:
                in_string = False
        else:
            if c == '/' and i + 1 < len(code) and code[i+1] == '/':
                in_line_comment = True
                i += 1
            elif c == '/' and i + 1 < len(code) and code[i+1] == '*':
                in_block_comment = True
                i += 1
            elif c in ["'", '"', '`']:
                in_string = True
                quote_char = c
            elif c in ['(', '{', '[']:
                stack.append((c, i))
            elif c in [')', '}', ']']:
                if not stack:
                    return False, f"Extra {c} at {i}"
                top, _ = stack.pop()
                if pairs[c] != top:
                    return False, f"Mismatched {top} and {c} at {i}"
        i += 1
    if stack:
        return False, f"Unclosed {stack[-1][0]} at {stack[-1][1]}"
    return True, "OK"

for f in ["simulator.js", "app.js"]:
    path = rf"C:\Users\A\.gemini\antigravity\scratch\football-career-simulator\{f}"
    ok, msg = check_brackets(path)
    print(f"{f}: {msg}")
