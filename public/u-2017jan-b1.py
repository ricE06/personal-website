
with open('notlast.in', 'r') as f:
    text = f.readlines()

# parse the input 
milks: list[tuple[str, int]] = []
for i in range(1, len(text)):
    cow, milk_str = text[i].split()
    milks.append((cow, int(milk_str)))

# main algorithm
counts: dict[str, int] = {}

# there is one annoying catch about this problem, which is that 
# we have to consider a cow being absent as them making zero units of milk.
# if we don't include them in the counts dict explicitly, then when we 
# go to find the minimum we wont account for this.
for cow in ('Bessie', 'Elsie', 'Daisy', 'Gertie', 'Annabelle', 'Maggie', 'Henrietta'):
    counts[cow] = 0

for cow, milk_produced in milks:
    if cow not in counts:
        counts[cow] = 0
    counts[cow] = counts[cow] + milk_produced

# now, we need to to find second smallest
min = min(counts.values())
second_min = None
second_min_cow = None
for cow, count in counts.items():
    if count == min:
        continue # we don't care about the min here

    # is there a tie?
    if second_min is not None and count == second_min:
        second_min_cow = 'Tie'
        continue

    # important! we put "second_min is None" first, because 
    # it will get executed first. if we put it second, then 
    # in the case that second_min == None, the count < second_min 
    # comparison will raise a TypeError (try it!)
    if second_min is None or count < second_min:
        second_min = count
        second_min_cow = cow

with open('notlast.out', 'w') as f:
    f.write(str(second_min_cow))
