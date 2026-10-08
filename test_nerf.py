import random

# Simulate 50 careers of 20 years with the new nerfed parameters
trophies_summary = []
goals_summary = []
peak_ovrs = []

for _ in range(50):
    ovr = 62
    age = 16
    total_goals = 0
    total_trophies = 0
    peak_ovr = ovr
    
    # 20 seasons (or 10 2-year periods)
    for period in range(11):
        # Growth
        if age <= 19:
            delta = 1 + random.randint(0, 2)
        elif age <= 23:
            delta = 1 + random.randint(0, 1)
        elif age <= 27:
            delta = random.randint(0, 1)
        elif age <= 31:
            delta = random.randint(-1, 0)
        elif age <= 34:
            delta = -random.randint(1, 2)
        else:
            delta = -random.randint(2, 3)
            
        ovr = max(50, min(95, ovr + delta))
        if ovr > peak_ovr: peak_ovr = ovr
        
        apps = 50
        gRate = 0.12 + max(0, (ovr - 58) * 0.014)
        goals = round(apps * gRate * (0.8 + random.random() * 0.35))
        total_goals += goals
        
        # Trophies (assuming 4.5 star team average)
        if random.random() < 0.22: total_trophies += 1 # league
        if random.random() < 0.13: total_trophies += 1 # cup
        if random.random() < 0.08: total_trophies += 1 # UCL
        
        age += 2

    trophies_summary.append(total_trophies)
    goals_summary.append(total_goals)
    peak_ovrs.append(peak_ovr)

print("Average peak OVR:", sum(peak_ovrs)/len(peak_ovrs))
print("Average career goals (Attacker):", sum(goals_summary)/len(goals_summary))
print("Average career trophies in top club:", sum(trophies_summary)/len(trophies_summary))
print("Sample trophies:", trophies_summary[:10])
print("Sample peak OVRs:", peak_ovrs[:10])
