import re

regex = r"(ap_(mac\s-\s)?(.{2})(.{2})(.{2})(.{2})(.{2})(.{2}))"

test_str = ("The volume of events with \"ap_mac - 5c5b35be26f2\" is above normal\n"
	"The volume of events with \"ap_5c5b353e5cee_non_wifi_interference - 0.0\" is above normal")

matches = re.finditer(regex, test_str, re.IGNORECASE)

for matchNum, match in enumerate(matches, start=1):
    
    print ("Match {matchNum} was found at {start}-{end}: {match}".format(matchNum = matchNum, start = match.start(), end = match.end(), match = match.group()))
    
    for groupNum in range(0, len(match.groups())):
        groupNum = groupNum + 1
        
        print ("Group {groupNum} found at {start}-{end}: {group}".format(groupNum = groupNum, start = match.start(groupNum), end = match.end(groupNum), group = match.group(groupNum)))