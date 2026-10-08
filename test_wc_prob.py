import random

# Test South Korea World Cup winning probability over 1,000 careers (5 World Cups per career = 5,000 World Cups)
kor_wc_wins = 0
total_wc = 0

tier1 = ["BRA", "ARG", "FRA", "GER", "ESP", "ENG"]
tier2 = ["POR", "NED", "ITA", "BEL", "CRO", "URU"]
tier3 = ["KOR", "JPN", "USA", "MEX", "SEN", "MAR", "SUI", "DEN", "COL"]

for _ in range(1000):
    # player overall starts ~62, reaches ~90 at peak
    for wc_index in range(5):
        total_wc += 1
        age = 18 + wc_index * 4
        ovr = 65 if age == 18 else (84 if age == 22 else (92 if age == 26 else (91 if age == 30 else 82)))
        
        fifaCode = "KOR"
        wcProb = 0.003
        if ovr >= 95: wcProb += 0.012
        elif ovr >= 90: wcProb += 0.005
        
        if random.random() < wcProb:
            kor_wc_wins += 1

print(f"In 1,000 Korean careers (5,000 World Cups):")
print(f"Korea won World Cup: {kor_wc_wins} times ({kor_wc_wins/5000*100:.2f}% per tournament, or {kor_wc_wins/1000*100:.1f}% per 20-year career)")
