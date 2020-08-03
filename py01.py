list = [7,8,3,4,1,2,6]

print(range(len(list)))

for i in range(len(list) - 1):
    for j in range(len(list) - 1):
        if(list[j] > list[j+1]):
            temp = list[j+1]
            list[j+1] = list[j]
            list[j] = temp

print('sorted list: '+str(list))

#Bubble Sort in Python