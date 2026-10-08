import json
import re

with open("CareerSimulatorPage.js", "r", encoding="utf-8") as f:
    text = f.read()

# Let's search for constants, step definitions, events, position stats, etc.
# Check what components or data structures are in the file:
# Look for objects containing: positions, nationalities, events, years/ages, etc.
analysis = {}

# Look for leagues / teams
clubs_matches = re.findall(r'name:\s*"([^"]+)",\s*country:\s*"([^"]+)"', text)
analysis["clubs_count"] = len(clubs_matches)
analysis["clubs_sample"] = clubs_matches[:20]

# Search for position names
positions = re.findall(r'(Arquero|Defensor|Mediocampista|Delantero|Portero|Lateral|Central|Extremo)', text)
analysis["positions_found"] = list(set(positions))

# Look for decision / event patterns
decisions = re.findall(r'\{[^{}]*title:\s*"([^"]+)"[^{}]*\}', text)
analysis["decisions_sample"] = decisions[:20]

# Let's find specific sections: e.g., how the career simulator is structured
# Search for words like "Comenzar", "carrera", "temporada", "retiro", "trofeos"
terms = ["Comenzar", "Simulador", "carrera", "temporada", "retiro", "Trofeos", "Estadísticas", "Goles", "Asistencias", "Partidos", "Habilidad"]
found_terms = {}
for term in terms:
    pos = [m.start() for m in re.finditer(re.escape(term), text, re.IGNORECASE)]
    found_terms[term] = len(pos)
analysis["terms_freq"] = found_terms

# Let's see if there are hardcoded events or decisions in JSON or array form
# Find large arrays or object definitions
snippets = []
for m in re.finditer(r'(const\s+[A-Za-z0-9_]+\s*=\s*\[[\s\S]{100,5000}?\];)', text):
    snip = m.group(1)
    if any(k in snip for k in ["edad", "temporada", "club", "evento", "opcion", "decision"]):
        snippets.append(snip[:500])

analysis["code_snippets"] = snippets[:5]

with open("analysis.json", "w", encoding="utf-8") as out:
    json.dump(analysis, out, ensure_ascii=False, indent=2)

print("Analysis written successfully")
