import random

# Calibrated simulation
trophies_summary = []
goals_summary = []
peak_ovrs = []

for _ in range(100):
    ovr = 62
    age = 16
    total_goals = 0
    total_trophies = 0
    peak_ovr = ovr
    
    # Simulate year by year (or 2-year periods)
    # Let's say 12 periods of 2 years (from 16 to 40)
    for period in range(12):
        # 2-year period growth
        if age <= 19:
            delta = 2 + random.randint(1, 3) # +3 to +5 over 2 years (+1.5 ~ +2.5/yr)
        elif age <= 23:
            delta = 2 + random.randint(1, 3) # +3 to +5 over 2 years
        elif age <= 27:
            delta = 1 + random.randint(0, 2) # +1 to +3 over 2 years
        elif age <= 30:
            delta = random.randint(-1, 1)    # -1 to +1 over 2 years
        elif age <= 33:
            delta = -random.randint(1, 3)    # -1 to -3 over 2 years
        else:
            delta = -random.randint(3, 5)    # -3 to -5 over 2 years
            
        ovr = max(50, min(96, ovr + delta))
        if ovr > peak_ovr: peak_ovr = ovr
        
        apps = 50
        # Calibrated goals formula
        # ovr 60 -> 0.14, ovr 75 -> 0.35, ovr 85 -> 0.52, ovr 92 -> 0.65
        gRate = 0.12 + max(0, (ovr - 58) * 0.015)
        goals = round(apps * gRate * (0.85 + random.random() * 0.3))
        total_goals += goals * 2 # 2 seasons per period
        
        # Trophies per season (assuming 4.5 star team average)
        for s in range(2):
            if random.random() < 0.22: total_trophies += 1 # league
            if random.random() < 0.13: total_trophies += 1 # cup
            if random.random() < 0.07: total_trophies += 1 # UCL
        
        age += 2

    trophies_summary.append(total_trophies)
    goals_summary.append(total_goals)
    peak_ovrs.append(peak_ovr)

print("Average peak OVR:", round(sum(peak_ovrs)/len(peak_ovrs), 1))
print("Average career goals (Attacker):", round(sum(goals_summary)/len(goals_summary)))
print("Average career trophies in top club:", round(sum(trophies_summary)/len(trophies_summary), 1))
print("Sample trophies:", trophies_summary[:10])
print("Sample peak OVRs:", peak_ovrs[:10])
